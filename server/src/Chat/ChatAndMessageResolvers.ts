import { ArrayMaxSize } from 'class-validator';
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
import { Chat } from './Chat';
import { Message } from './Message';


 @InputType()
class createMessageInput {
  @Field()
  content: string;

  @Field()
  senderId: number;

  @Field()
  chatId: number;
  
}

@Resolver(Chat)
export class ChatResolvers {
  // Queries
  //returns one chat based on its Id
  //TODO: implement a query that gets all the chats for one user
  @Query(returns => Chat)
  async getSpecificChat(@Arg('chatId') chatId:number, @Ctx() ctx: Context) {
    return await ctx.prisma.chat.findUnique(
      { where: {id: chatId}, include: {messages: true, userOne: true, userTwo: true}}
    )
  }


}


@Resolver(Message)
export class messageResolver {
  //The only resolver needed for message, it also stores it in a chat
  @Mutation(returns => Message)
  async sendMessage(@Arg('data') data: createMessageInput, @Ctx() ctx: Context ) {

    return await ctx.prisma.message.create({
      data: {
        senderId: data.senderId,
        content: data.content,
        chat: {connect: {id: data.chatId}}
      }, include: {chat: {include: {messages: true, userOne: true, userTwo: true}}} }
    )
  }
   
  }
