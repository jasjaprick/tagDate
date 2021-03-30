import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';
import { Profile } from '../Profile/Profile';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;
//   //TODO: Add object that can take latitude and longitude

  @Field(type => Profile)
  profile: Profile;

  @Field(type => [Number])
  rejections: number[]

}

