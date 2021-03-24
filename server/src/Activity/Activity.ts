import 'reflect-metadata';
import {ObjectType, Field, ID } from 'type-graphql';
import { Profile } from '../Profile/Profile';
import { User } from '../User/User';




@ObjectType()
export class Activity {
  @Field(type => ID)
  id: number;

  @Field()
  description: string;

  @Field(type => String)
  tag: string;

  @Field(type => User)
  user?: User;
}