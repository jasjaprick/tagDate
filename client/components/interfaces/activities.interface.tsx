import { Tags } from './tags.interface';

export interface Activities {
  description: string,
  tags: Tags[],
  postedBy: number
}