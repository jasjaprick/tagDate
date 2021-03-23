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
  ID,
} from 'type-graphql';
import { prisma, Prisma } from '@prisma/client';
import { User } from './User';
import { Context } from '../context';
import { Activity } from '../Activity/Activity';

@InputType()
class AddUserInput {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  gender: string;

  @Field()
  interestedIn: string;

  @Field()
  location: string;
}

@InputType()
class RejectUserInput {
  @Field()
  ownID: number;

  @Field()
  rejectedID: number;
}

@Resolver(User)
export class UserResolver {
  // Queries

  // Get user by ID
  @Query((returns) => User, { nullable: true })
  async user(@Arg('id', (type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.user.findUnique({
      where: { id: id },
    });
  }

  // Mutations

  // Add new user
  @Mutation((returns) => User)
  async addUser(
    @Arg('data') data: AddUserInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return await ctx.prisma.user.create({
      data: {
        name: data.name,
        age: data.age,
        gender: data.gender,
        interestedIn: data.interestedIn,
        location: data.location,
      },
    });
  }

  // Add user to rejection list
  @Mutation((returns) => User)
  async rejectUser(
    @Arg('data') data: RejectUserInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    // Query user array that the current user rejected
    const res = await ctx.prisma.user.findUnique({
      where: { id: data.ownID },
      select: {
        rejections: true,
      },
    });
    // Update that array with the newly rejected user ID
    return await ctx.prisma.user.update({
      data: {
        rejections: {
          set: [...res.rejections, data.rejectedID],
        },
      },
      where: { id: data.ownID },
    });
  }
}
