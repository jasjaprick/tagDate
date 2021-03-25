import 'reflect-metadata';
import {
  Ctx,
  Field,
  InputType,
  Mutation,
  Resolver,
  Arg,
  Query,
} from 'type-graphql';
import { Context } from '../context';
import { PossibleMatch } from './PossibleMatch';

@InputType()
class AddPossibleMatchInput {
  @Field()
  UID1: number;

  @Field()
  UID2: number;
}

@Resolver(PossibleMatch)
export class PossibleMatchResolvers {
  // Queries

  // GetAll Query
  //TODO: Delete this one later
  @Query((returns) => [PossibleMatch])
  async getAllPossibleMatches(@Ctx() ctx: Context) {
    return await ctx.prisma.possibleMatch.findMany({
      include: {
        userOne: {
          include: {
            profile: true,
          },
        },
        userTwo: {
          include: {
            profile: true,
          },
        },
        userOneActivity: true,
        userTwoActivity: true,
      },
    });
  }

  // Get all confirmed matches for loggedIn user
  @Query((returns) => [PossibleMatch])
  async getConfirmedMatches(@Arg('id') id: number, @Ctx() ctx: Context) {
    await ctx.prisma.possibleMatch.findMany({
      // find many matches where the match has been confirmed and where logged in user is present
      where: {
        isMatch: true,
        OR: [{ UID1: id }, { UID2: id }],
      },
      // include
      include: {
        userOne: {
          include: {
            profile: true,
          },
        },
        userTwo: {
          include: {
            profile: true,
          },
        },
        userOneActivity: true,
        userTwoActivity: true,
      },
    });
  }

  // Mutations

  // Create or confirm possible match - Liking
  @Mutation((returns) => PossibleMatch)
  async addPossibleMatch(
    @Arg('data') data: AddPossibleMatchInput,
    @Ctx() ctx: Context
  ) {
    // Check if the user we like already likes us and if so, save in const
    const pendingMatch = await ctx.prisma.possibleMatch.findFirst({
      where: {
        AND: [{ UID1: data.UID2 }, { UID2: data.UID1 }],
      },
      select: {
        id: true,
      },
    });

    // If the target user likes us, then we simply update and confirm the match
    if (pendingMatch) {
      return ctx.prisma.possibleMatch.update({
        where: {
          id: pendingMatch.id,
        },
        data: {
          isMatch: true,
        },
      });
    } else {
      // If the other user is not into us yet, then we create the possible match
      // isMatch (match confirmation) will be set to default false
      const myActivity = await ctx.prisma.activity.findFirst({
        where: {
          AND: [{ postedBy: data.UID1 }, { isActive: true }],
        },
      });

      const partnerActivity = await ctx.prisma.activity.findFirst({
        where: {
          AND: [{ postedBy: data.UID1 }, { isActive: true }],
        },
      });
      return ctx.prisma.possibleMatch.create({
        data: {
          UID1: data.UID1,
          UID2: data.UID2,
          myActivity: myActivity.id,
          partnerActivity: partnerActivity.id,
        },
      });
    }
  }
}
