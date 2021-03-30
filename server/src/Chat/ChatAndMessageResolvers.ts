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
  Root,
  Args,
  ArgsType
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

//OR:[ , {userTwoId: userId}]}
@Resolver(Chat)
export class ChatResolvers {
  // Queries
  //returns all the chats for the user based on its id
  @Query(returns => [Chat]) //include: {userOne: true, userTwo:true, messages: true}  OR: [{userOneId: id},
  async getChatByUserId(@Arg('id') id: number, @Ctx() ctx: Context) {
    const chats = await ctx.prisma.chat.findMany({where:{ OR: [{userOneId: id}, {userTwoId: id}]}, include: {userOne: true, userTwo: true, messages: true}});
    return chats;
  }
  
  //returns one chat based on its Id
  @Query(returns => Chat)
  async getSpecificChat(@Arg('chatId') chatId:number, @Ctx() ctx: Context) {
    return await ctx.prisma.chat.findUnique(
      { where: {id: chatId}, include: {messages: true, userOne: true, userTwo: true}}
    )
  }


  @Query(returns=> Chat,)
  async getAllMessagesForChat(@PubSub() pubsub: PubSubEngine,
  @Arg("chatId") chatId: number, @Ctx() ctx: Context) {
    return await  ctx.prisma.chat.findUnique({where: {id: chatId}, include:{messages: true}}); 
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
    @Mutation(returns => Message )
    async messageSent(@PubSub() pubsub: PubSubEngine, @Arg('data')  data: createMessageInput, @Ctx() ctx: Context ): Promise <Message> { 
      const message=  await ctx.prisma.message.create({
        data: {
          senderId: data.senderId,
          content: data.content,
          chat: {connect: {id: data.chatId}}
        }, include: {chat: {include: {messages: true, userOne: true, userTwo: true}}} }
        )
        const payload = message;
        await pubsub.publish(data.chatId.toString(),  payload);
        return message;
      }
      @Subscription( {topics: 
        ({ args }) =>{ 
        console.log('CREATING ARGS!!!', args)
        return args.args.toString()
      }}
      )
       listenMessages(@Root()  payload: Message,  @Arg('args') args: number ): Message {
        return payload;
      }
      
    }
    