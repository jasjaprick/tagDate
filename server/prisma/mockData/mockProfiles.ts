import { Prisma } from ".prisma/client";

export const mockProfilesData: Prisma.ProfileUncheckedCreateInput[] = [
    {name: 'Johnnie',
    age: 28,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
userId: 1},
{
    name: 'Beckie',
    age: 27,
    gender: 'female',
    interestedIn: 'male',
    location: 'Barcelona',
    userId: 2
  },
  {
    name: 'Diana',
    age: 28,
    gender: 'female',
    interestedIn: 'female',
    location: 'Barcelona',
    userId: 3
  },
  {
    name: 'Toby',
    age: 30,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    userId: 4
  },
  {
      name: 'Johnie II',
      age: 28,
      gender: 'male',
      interestedIn: 'female',
      location: 'Barcelona',
      userId: 5
    },
    {
      name: 'Lulu',
      age: 28,
      gender: 'female',
      interestedIn: 'male',
      location: 'Barcelona',
      userId: 6
    },
    {name: 'Gino',
    age: 28,
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
userId: 7},
{
    name: 'Yanira',
    age: 27,
    gender: 'female',
    interestedIn: 'female',
    location: 'Barcelona',
    userId: 8
  },
  {
    name: 'Giorgio',
    age: 28,
    gender: 'male',
    interestedIn: 'male',
    location: 'Barcelona',
    userId: 9
  },
  {
    name: 'Jorge',
    age: 30,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    userId: 10
  },
  {
      name: 'Mark',
      age: 28,
      gender: 'male',
      interestedIn: 'all',
      location: 'Barcelona',
      userId: 11
    },
    {
      name: 'Lola',
      age: 28,
      gender: 'female',
      interestedIn: 'all',
      location: 'Barcelona',
      userId: 12
    },
    {
      name: 'Francesca',
      age: 28,
      gender: 'female',
      interestedIn: 'all',
      location: 'Barcelona',
      userId: 13
    }
]