import { Tags } from './tags.interface';
import { Users } from './users.interface';

export interface Activities {
  description: string,
  tags: Tags,
  postedBy: number;
  user: Users
}