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
import { User } from './User';
import { Context } from '../context';
import { prisma } from '.prisma/client';



@InputType()
class RejectUserInput {
  @Field()
  ownID: number;

  @Field()
  rejectedID: number;
}
@InputType()
class LoginInput {
  @Field()
  email: string;
  @Field()
  password: string;
}

@Resolver(User)
export class UserResolver {
  // Queries

  // Get user by ID
  @Query((returns) => User, { nullable: true })
  async getUserById(@Arg('id', (type) => Int) id: number, @Ctx() ctx: Context) {
    return await ctx.prisma.user.findUnique({
      where: { id: id },
    });
  }

  // GetAll Query (for development purposes)
  @Query((returns) => [User]) 
  async getAllUsers(@Ctx() ctx: Context) {
    return await ctx.prisma.user.findMany();
  }

 

  // Mutations

  // Add new user
  @Mutation((returns) => User)
  async addUser(
    @Arg('data') data: LoginInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return await ctx.prisma.user.create({
      data: {
        
        email: data.email,
        password: data.password
      },
    });
  }

  // Add user to rejection list // Disliking a User
  @Mutation((returns) => User)
  async rejectUser(
    @Arg('data') data: RejectUserInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    // Query user array with users the current user rejected
    const resUser = await ctx.prisma.user.findUnique({
      where: { id: data.ownID },
      select: {
        rejections: true,
      },
    });
    // Query possible pending match with the user we dislike
    const resMatch = await ctx.prisma.possibleMatch.findFirst({
      where: {
        AND: [{ UID1: data.rejectedID }, { UID2: data.ownID }],
      },
      select: {
        id: true,
      },
    });
    // delete that matchID if exists
    await ctx.prisma.possibleMatch.delete({
      where: {
        id: resMatch.id,
      },
    });
    // Update that array with the newly rejected user ID and return the current user
    return await ctx.prisma.user.update({
      data: {
        rejections: {
          set: [...resUser.rejections, data.rejectedID],
        },
      },
      where: { id: data.ownID },
    });
  }
}
