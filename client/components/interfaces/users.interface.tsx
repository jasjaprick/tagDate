import { Activities } from './activities.interface';
import { Match } from './matches.interface';

export interface Users {
  name: string,
  bio: string,
  age: number,
  gender: string,
  interestedIn: string,
  location: string,
  pictures: string[],
  activity: Activities,
  matches: Match[]
}