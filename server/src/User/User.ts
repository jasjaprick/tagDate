import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';
import { Activity } from '../Activity/Activity';


@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => String, { nullable: true })
  bio: string | null;

  @Field()
  age: number;

//   //TODO: TYPE GENDER(?)
  @Field()
  gender: string; 

//    //TODO: TYPE GENDER
  @Field()
  interestedIn: string;

//   //TODO: Add object that can take latitude and longitude
  @Field()
  location: string;
  
  @Field((type) => String, { nullable: true })
  profilePicture: string | null;

}

