import 'reflect-metadata';
import { Query, Mutation, Arg, Ctx, FieldResolver, Root, Int, Field, InputType, Resolver} from 'type-graphql';
import { Prisma } from '@prisma/client'
import {User} from './User';
import { Context} from './context';

@InputType()
class AddUserInput {
  @Field()
  name: string

  @Field()
  age: number
  
//   @Field()
//   gender: string

//   @Field()
//   interestedIn: string

//   @Field()
//   location: string

//   @Field()
//   activity: string
}

@Resolver(User)
export class UserResolver {
  @Mutation((returns) => User)
  async addUser(
    @Arg('data') data: AddUserInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return await ctx.prisma.user.create({
      data: {
        name: data.name,
        age: data.age,
      },
    });
  }

  @Query((returns) => User, { nullable: true })
  async user(@Arg('id', (type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.user.findUnique({
      where: { id: id },
    });
  }
}


