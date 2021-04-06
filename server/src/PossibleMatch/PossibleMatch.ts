import { Field, ObjectType, ID } from 'type-graphql';
import { Activity } from '../Activity/Activity';
import { User } from '../User/User';


//TODO: Check if UIDs and activities need to be adjusted to User and Activity type

@ObjectType()
export class PossibleMatch {
  // id -UID
  @Field((type) => ID)
  id: number;
  // UID1 - UId
  @Field()
  UID1: number;

  @Field((type) => User)
  userOne?: User;

  // UID2 - UID

  @Field()
  UID2: number;

  @Field((type) => User)
  userTwo?: User;

  // myActivity -UID
  @Field((type) => Activity)
  userOneActivity: Activity;

  // partnerActivity -UID
  @Field((type) => Activity)
  userTwoActivity: Activity;

  // isMatch - Boolean
  @Field()
  isMatch: boolean;
}