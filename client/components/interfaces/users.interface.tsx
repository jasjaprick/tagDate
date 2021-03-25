import { Activities } from './activities.interface';
import { Match } from './matches.interface';

export interface Users {
  email: string;
  password: string;
  name: string;
  bio: string;
  age: number;
  userGender: string;
  genderPreference: string;
  location: string;
  pictures: string[];
  activity: Activities;
  matches: Match[];
}
