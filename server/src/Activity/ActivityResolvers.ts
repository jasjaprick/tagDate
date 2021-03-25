import 'reflect-metadata';
import {
  Query,
  Mutation,
  Arg,
  Ctx,
  Int,
  Field,
  InputType,
  Resolver,
} from 'type-graphql';
import { Activity } from './Activity';
import { Context } from '../context';
import { userData } from '../../prisma/mockData/mockUsers';

// Input definition for add new activity mutation
@InputType()
class AddActivityInput {
  @Field()
  description: string;
  @Field()
  postedBy: number;
  @Field()
  tag: string;
}

// Main resolver class for the activities
@Resolver(Activity)
export class ActivityResolvers {
  // Queries

  // Get activity by ID
  @Query((returns) => Activity, { nullable: true })
  async getActivityById(
    @Arg('id', (type) => Int) id: number,
    @Ctx() ctx: Context
  ) {
    return ctx.prisma.activity.findUnique({
      where: { id: id },
    });
  }
  // GetAll Query (for development purposes)
  @Query((returns) => [Activity])
  async getAllActivities(@Ctx() ctx: Context) {
    return await ctx.prisma.activity.findMany({
      include: { user: { include: { profile: true } } },
    });
  }
  // Find activities based on tag (returns list of array of activities with matching tags,
  // posted by possible partners and not posted by our own
  @Query((returns) => [Activity], { nullable: true })
  async findActivityByTag(
    @Arg('tag', (type) => String) tag: string,
    @Arg('ownID') id: number,
    @Ctx() ctx: Context
  ) {
    // Query user array that the current user rejected
    const theUser = await ctx.prisma.user.findUnique({
      where: {
        id,
      }, include: {profile: true}
    // select: {
    //     rejections: true,
    //   }  ,
    });
    

    //switch(theUser.profile.gender) {
      
    // Query the activities that have our tag but NOT our ID
    let activitiesToShow;
    if ( theUser.profile.interestedIn === 'all' ) {
      activitiesToShow = await ctx.prisma.activity.findMany({
        where: {
          AND: [
            {tag: tag}, 
            {isActive: true}, 
            {OR: [
              {user: {profile: {interestedIn: theUser.profile.gender}}}, 
              {user: {profile: {interestedIn: 'all'}}}
            ]}
          ],
          NOT: { postedBy: id },
        },
        include: {
          user: {include: { profile : true}}
        },
      });
    } else {
      activitiesToShow = await ctx.prisma.activity.findMany({
        where: {
          AND: [
            {tag: tag}, 
            {isActive: true}, 
            {OR: [
              {user: {profile: {interestedIn: theUser.profile.gender}}}, 
              {user: {profile: {interestedIn: 'all'}}}
            ]},
            {user: {profile: {gender: theUser.profile.interestedIn}}}
          ],
          NOT: { postedBy: id },
        },
        include: {
          user: {include: { profile : true}}
        },
      });
    }

    // Filter and return the activities that were not posted by the rejected users
    return activitiesToShow.filter(
      (activity) => !theUser.rejections.includes(activity.postedBy)
    );
  }

  // Mutations

  // Add a new activity
  @Mutation((returns) => Activity)
  async addActivity(
    @Arg('data') data: AddActivityInput,
    @Ctx() ctx: Context
  ): Promise<Activity> {
    await ctx.prisma.activity.updateMany({
      where: {
        AND: [{postedBy: data.postedBy}, {isActive: true}]
      }, data: {
        isActive: false
      }
    });
    return await ctx.prisma.activity.create({
      data: {
        description: data.description,
        postedBy: data.postedBy,
        tag: data.tag,
      },
    });
  }
}
