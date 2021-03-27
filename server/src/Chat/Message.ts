import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';
import { Chat } from './Chat';

@ObjectType()
export class Message {
    @Field((type) => ID)
    id: number;

    @Field(type => Chat)
    chat: Chat;

    @Field()
    content: string;

    @Field()
    senderId: number;
}