import 'reflect-metadata';
import { Ctx, Field, InputType, Mutation, Resolver, Arg, Query } from 'type-graphql';
import { Context } from '../context';
import { PossibleMatch} from './PossibleMatch';

@InputType()
class AddPossibleMatchInput {
  @Field()
  UID1: number;

  @Field()
  UID2: number;

  @Field()
  myActivity: number

  @Field()
  partnerActivity: number
}

@Resolver(PossibleMatch)
export class PossibleMatchResolvers {
  // Queries

  // GetAll Query (for development purposes)
  @Query((returns) => [PossibleMatch])
  async getAllPossibleMatches(@Ctx() ctx: Context) {
    return await ctx.prisma.possibleMatch.findMany();
  }

  // Mutations

  // Create or confirm possible match
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

    // Confirm the possible match if the target user likes us,
    // If not, then create the possible match. Finallty return the created match
    return ctx.prisma.possibleMatch.upsert({
      where: {
        id: pendingMatch.id,
      },
      update: {
        isMatch: true,
      },
      create: {
        UID1: data.UID1,
        UID2: data.UID2,
        myActivity: data.myActivity,
        partnerActivity: data.partnerActivity,
      },
    });
  }
}