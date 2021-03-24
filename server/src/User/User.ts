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

  @Field()
  email: string;

  @Field()
  password: string;
//   //TODO: Add object that can take latitude and longitude
  @Field()
  location: string;
  
  @Field((type) => String, { nullable: true })
  profilePicture: string | null;

  @Field(type => [Number])
  rejections: number[]

}

