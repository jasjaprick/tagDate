import { Activities } from './activities.interface';
import { Match } from './matches.interface';

export interface Users {
  email: string;
  password: string;
  name: string;
  bio: string;
  dateOfBirth: string;
  userGender: string;
  genderPreference: string;
  location: string;
  pictures: string[];
  activity: Activities;
  matches: Match[];
  profile: {
    bio: string;
    dateOfBirth: string;
    location: string;
    name: string;
    profilePicture:string;
  }
}
