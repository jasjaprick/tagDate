import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

 
  @Field()
  email: string;

  @Field()
  password: string;
//   //TODO: Add object that can take latitude and longitude


  @Field(type => [Number])
  rejections: number[]

}

