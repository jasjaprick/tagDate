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
import { Token, Id } from '../Auth/Auth';
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
  @Query(() => Token)
  async getWebToken(@Arg('data') data: LoginInput, @Ctx() ctx: Context) {
    console.log('initializing getjwt');
    //Verify email
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    console.log('user', user);

    if (!user) {
      return null;
    }

    //Verify password
    if (user.password !== data.password) {
      return null;
    }

    const webToken: IToken = {};

    //Generate accessToken
    webToken.accessToken = sign({ id: user.id }, 'deded');
    console.log('accessToken', webToken.accessToken);

    return webToken;
  }

  // Verify JWT
  @Query(() => Id)
  async verifyWebToken(
    @Arg('tokenToVerify') tokenToVerify: string,
    @Ctx() ctx: Context
  ) {
    try {
      let res = verify(tokenToVerify, 'deded');
      const Id: IId = {};
      Id.id = res.id;
      console.log('id: ', Id.id);
      return Id;
    } catch (err) {
      console.log('error', err);

      return null;
    }
  }
}
