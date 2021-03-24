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
    }
]