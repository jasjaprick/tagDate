import { ArrayMaxSize } from 'class-validator';
import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';
import { User } from '../User/User';
import { Message } from './Message'
@ObjectType()
export class Chat {
    @Field((type) => ID)
    id: number;

    @Field(type => [Message], {nullable: true})
    messages?: Message[] | [];

    @Field(type => [User], {nullable: true})
    @ArrayMaxSize(2)
    users?: User[] | [];

    @Field()
  userOneId: number;

  @Field((type) => User)
  userOne?: User;

  

  @Field()
  userTwoId: number;

  @Field((type) => User)
  userTwo?: User;


}