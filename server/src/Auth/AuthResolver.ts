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
import { Token } from '../Auth/Auth';
import { Context } from '../context';
import { sign } from 'jsonwebtoken';

interface IToken {
  accessToken?: string
}

@InputType()
class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

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
  // @Query(() => Token)
  // async verifyjwt(@Arg('token') token: string, @Ctx() ctx: Context) {
  //   jwt.verify(token, 'deded');
  //   return accessToken;
  // }
}
