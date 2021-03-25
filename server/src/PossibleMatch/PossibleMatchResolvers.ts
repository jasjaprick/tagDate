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

  @Field()
  myActivity: number;

  @Field()
  partnerActivity: number;
}

@Resolver(PossibleMatch)
export class PossibleMatchResolvers {
  // Queries

  // GetAll Query
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
        userTwoActivity: true
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
      return ctx.prisma.possibleMatch.create({
        data: {
          UID1: data.UID1,
          UID2: data.UID2,
          myActivity: data.myActivity,
          partnerActivity: data.partnerActivity,
        },
      });
    }
  }
}
