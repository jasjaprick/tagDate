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

  @Field(type => PossibleMatch, { nullable: true})
  myActivity?: PossibleMatch;

  @Field(type => PossibleMatch, {nullable: true})
  theirActivity?: PossibleMatch;
}