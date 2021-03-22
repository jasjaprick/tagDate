import 'reflect-metadata';
import { ObjectType, Field, ID} from 'type-graphql';

@ObjectType()
export class Tags {
    @Field((type) => ID)
    id: number;

    @Field()
    content: string;
}