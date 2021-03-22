import 'reflect-metadata';
import { Query, Mutation, Arg, Ctx, FieldResolver, Root, Int, Field, InputType, Resolver} from 'type-graphql';
import { Prisma } from '@prisma/client';
import {Activity} from './Activity';
import { Context} from '../context';
import { ArrayMaxSize } from 'class-validator';

@InputType()
class AddActivityInput {
  @Field()
  description: string;
  @Field()
  postedBy: number;
  @Field(type => [String])
  @ArrayMaxSize(3)
  tags: [string];

}

@Resolver(Activity)
export class ActivityResolvers {
  @Mutation((returns) => Activity)
  async addActivity(
    @Arg('data') data: AddActivityInput,
    @Ctx() ctx: Context
  ): Promise<Activity> {
    return await ctx.prisma.activity.create({
      data: {
        description: data.description,
        postedBy: data.postedBy,
        tags: data.tags
      },
    });
  }

  @Query((returns) => Activity, { nullable: true })
  async activity(@Arg('id', (type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.activity.findUnique({
      where: { id: id },
    });
  }
}

