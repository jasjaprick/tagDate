import { ArrayMaxSize } from 'class-validator';
import { subscribe } from 'graphql';
import 'reflect-metadata';
import {
  Ctx,
  Field,
  InputType,
  Mutation,
  Resolver,
  Arg,
  Query,
  Subscription,
  PubSub,
  PubSubEngine,
  Root
} from 'type-graphql';
//import { PubSub} from'graphql-subscriptions';
import { Context } from '../context';
import { Chat } from './Chat';
import { Message } from './Message';
// import {User} from '../User/User'
// import { Prisma } from '@prisma/client';

const chats: Chat[] = [];
const channel = "CHAT_CHANNEL"
//const pubsub = new PubSub();


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


  @Subscription(returns=> Chat, {topics: channel})
  async getAllMessagesForChat(
  @Arg("chatId") chatId: number, @Ctx() ctx: Context) {
    const chat = await  ctx.prisma.chat.findUnique({where: {id: chatId}, include:{messages: true}}); 
    // const payload = chat;
    // await pubsub.publish(channel, payload)
    return chat;
  }


  //  @Subscription({  topics: channel})
  //   messageSent(@): Chat {
  //       return 
  //   }   


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
  @Mutation(returns => Message)
  async messageSent(@PubSub() pubsub: PubSubEngine, @Arg('data')  data: createMessageInput, @Ctx() ctx: Context ): Promise <Message> { 
    const message=  await ctx.prisma.message.create({
      data: {
        senderId: data.senderId,
        content: data.content,
        chat: {connect: {id: data.chatId}}
      }, include: {chat: {include: {messages: true, userOne: true, userTwo: true}}} }
    )
  const payload = message;
    await pubsub.publish(channel, payload);
    console.log('done')
  return message;
}
}
  // @Subscription({topics: channel})
  // }

//include: {chat: {include: {messages: true, userOne: true, userTwo: true}}}