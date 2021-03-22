import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';

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

//   //TODO:  there will be a type activity
  @Field()
  activity: string;

//   //TODO: match Type
  @Field((type) => [String], { nullable: true })
  matches: string[] | null;
}

