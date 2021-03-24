import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Token {
  @Field()
  accessToken: string;
}
