import { Field, ObjectType, ID } from 'type-graphql';
import { Activity } from '../Activity/Activity';


//TODO: Check if UIDs and activities need to be adjusted to User and Activity type

@ObjectType()
export class PossibleMatch {
  // id -UID
  @Field((type) => ID)
  id: number;
  // UID1 - UId
  @Field()
  UID1: number;

  // UID2 - UID
  @Field()
  UID2: number;

  // myActivity -UID
  @Field((type) => Activity)
  myActivity: Activity;

  // partnerActivity -UID
  @Field((type) => Activity)
  partnerActivity: Activity;

  // isMatch - Boolean
  @Field()
  isMatch: boolean;
}