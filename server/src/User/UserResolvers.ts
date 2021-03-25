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

// Inputs
@InputType()
export class AddUserInput {
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  bio?: string;

  @Field()
  gender: string;

  @Field()
  interestedIn: string;

  @Field()
  location: string;

  @Field()
  profilePicture?: string;
}

@Resolver(User)
export class UserResolver {
  // Queries

  // Get user by ID
  @Query((returns) => User, { nullable: true })
  async getUserById(@Arg('id', (type) => Int) id: number, @Ctx() ctx: Context) {
    return await ctx.prisma.user.findUnique({
      where: { id: id }, include: {
        profile: true
      }
    });
  }

  // GetAll Query (for development purposes)
  @Query((returns) => [User])
  async getAllUsers(@Ctx() ctx: Context) {
    return await ctx.prisma.user.findMany({ include: { profile: true } });
  }

  // Mutations

  // Add new user
  @Mutation((returns) => User)
  async addUser(
    @Arg('data') data: AddUserInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    // Create the User model with email and password
    const newUser = await ctx.prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
      },
    });
    // Then create the profile and link it to the user
    await ctx.prisma.profile.create({
      data: {
        name: data.name,
        age: data.age,
        gender: data.gender,
        bio: data.bio,
        interestedIn: data.interestedIn,
        location: data.location,
        userId: newUser.id,
        profilePicture: data.profilePicture
      },
    });
    console.log('User Added 🥳');
    // Finally, return the user including the newly set profile
    return ctx.prisma.user.findUnique({
      where: {
        id: newUser.id,
      },
      include: {
        profile: true,
      },
    });
  }

  // Add user to rejection list // Disliking a User
  @Mutation((returns) => User)
  async rejectUser(
    @Arg('ownId') ownId: number,
    @Arg('rejectedId') rejectedId: number,
    @Ctx() ctx: Context
  ): Promise<User> {
    // Query user array with users the current user rejected
    const resUser = await ctx.prisma.user.findUnique({
      where: { id: ownId },
      select: {
        rejections: true,
      },
    });
    // Query possible pending match with the user we dislike
    const resMatch = await ctx.prisma.possibleMatch.findFirst({
      where: {
        AND: [{ UID1: rejectedId }, { UID2: ownId }],
      },
      select: {
        id: true,
      },
    });
    // delete that matchID if exists
    if (resMatch)
      await ctx.prisma.possibleMatch.delete({
        where: {
          id: resMatch.id,
        },
      });
    // Update that array with the newly rejected user ID and return the current user
    return await ctx.prisma.user.update({
      data: {
        rejections: {
          set: [...resUser.rejections, rejectedId],
        },
      },
      where: { id: ownId },
    });
  }
}
