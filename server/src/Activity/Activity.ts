import 'reflect-metadata';
import {ObjectType, Field, ID } from 'type-graphql';



@ObjectType()
export class Activity {
  @Field(type => ID)
  id: number;

  @Field()
  description: string;

  @Field(type => String)
  tag: string;

  @Field()
  postedBy: number;


}