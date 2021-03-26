import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';

@ObjectType()
export class Profile {
@Field()
name: string;

@Field((type) => String, { nullable: true })
bio: string | null;

@Field()
dateOfBirth: Date;

//   //TODO: TYPE GENDER(?)
@Field()
gender: string; 

//    //TODO: TYPE GENDER
@Field()
interestedIn: string;

@Field()
location: string;

@Field((type) => String, { nullable: true })
profilePicture: string | null;
}
