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
import { User } from '../User/User';
import { Token, id } from '../Auth/Auth';
import { Context } from '../context';
import { sign, verify } from 'jsonwebtoken';

interface IToken {
  accessToken?: string;
}

interface IId {
  id?: number;
}

@InputType()
class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

let tk: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE2NjA3MDY3fQ.vWbeNd4LjJAZdSMalbpnPZnPDGQ83TcZS0lQMVN6p3o';

@Resolver(User)
export class AuthResolver {
  // Queries

  // Get JWT
  @Query((returns) => User, { nullable: true })
  async getWebToken(@Arg('data') data: LoginInput, @Ctx() ctx: Context) {
    //Verify email
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return null;
    }

     return user;

  }
}
