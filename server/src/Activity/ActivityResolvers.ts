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

  // Add a new activity
  @Mutation((returns) => Activity)
  async addActivity(
    @Arg('data') data: AddActivityInput,
    @Ctx() ctx: Context
  ): Promise<Activity> {
    return await ctx.prisma.activity.create({
      data: {
        description: data.description,
        postedBy: data.postedBy,
        tag: data.tag,
      },
    });
  }

  // Get activity by ID
  @Query((returns) => Activity, { nullable: true })
  async activity(@Arg('id', (type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.activity.findUnique({
      where: { id: id },
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
    const rejectedUsers = await ctx.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        rejections: true,
      },
    });

    // Query the activities that have our tag but NOT our ID
    const activitiesToShow = await ctx.prisma.activity.findMany({
      where: {
        tag: tag,
        NOT: { postedBy: id },
      },
      include: {
        user: true
      }
    });

    // Filter and return the activities that were not posted by the rejected users
    return activitiesToShow.filter(
      (activity) => !rejectedUsers.rejections.includes(activity.postedBy)
    );
  }
}