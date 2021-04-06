import { Prisma } from '.prisma/client';

export const mockProfilesData: Prisma.ProfileUncheckedCreateInput[] = [
  {
    name: 'Johnnie',
    dateOfBirth: '1985-06-20',
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1609902726285-00668009f004?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    userId: 1,
  },
  {
    name: 'Beckie',
    dateOfBirth: '1993-04-20',
    gender: 'female',
    interestedIn: 'male',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1603320409355-d0dd91d88c9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGZlbWFsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 2,
  },
  {
    name: 'Diana',
    dateOfBirth: '1993-05-20',
    gender: 'female',
    interestedIn: 'female',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpYW5hfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 3,
  },
  {
    name: 'Toby',
    dateOfBirth: '2000-03-20',
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1543001746-6b48d1dcf32b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1850&q=80',
    userId: 4,
  },
  {
    name: 'Johnie II',
    dateOfBirth: '2000-06-20',
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBub3QlMjBhdHRyYWN0aXZlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 5,
  },
  {
    name: 'Lulu',
    dateOfBirth: '2000-06-20',
    gender: 'female',
    interestedIn: 'male',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1599577180513-7dd76ffd9761?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bHVsdXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 6,
  },
  {
    name: 'Gino',
    dateOfBirth: '1984-08-20',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGpvaG58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 7,
  },
  {
    name: 'Yanira',
    dateOfBirth: '2000-06-20',
    gender: 'female',
    interestedIn: 'female',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1569627339477-6ec415a108eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8eWFuaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 8,
  },
  {
    name: 'Giorgio',
    dateOfBirth: '2000-06-20',
    gender: 'male',
    interestedIn: 'male',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1598518141892-06ba05f87bbe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fGdlb3JnZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 9,
  },
  {
    name: 'Jorge',
    dateOfBirth: '1995-06-20',
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/flagged/photo-1578571404073-3518632b3e93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8am9yZ2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 10,
  },
  {
    name: 'Mark',
    dateOfBirth: '1980-04-20',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1547429213-3178de3bd3b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hcmt8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 11,
  },
  {
    name: 'Lola',
    dateOfBirth: '1995-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60',
    userId: 12,
  },
  {
    name: 'Francesca',
    dateOfBirth: '1991-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://images.unsplash.com/photo-1543207564-1271b510019d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTcxfHx3b21hbiUyMHVnbHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    userId: 13,
  },
  {
    name: 'Michael',
    dateOfBirth: '1995-06-10',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture: 'https://source.unsplash.com/OFSQ6bHjFjs',
    userId: 14,
  },
  {
    name: 'Charlotte',
    dateOfBirth: '1995-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/ROJFuWCsfmA',
    userId: 15,
  },
  {
    name: 'James',
    dateOfBirth: '1989-06-10',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/mpPfqvh04Fc',
    userId: 16,
  },
  {
    name: 'Mia',
    dateOfBirth: '1979-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/PA0vICn6DwE',
    userId: 17,
  },
  {
    name: 'Robert',
    dateOfBirth: '1994-06-10',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture: 'https://source.unsplash.com/2EGNqazbAMk',
        userId: 18,
  },
  {
    name: 'Sophia',
    dateOfBirth: '1993-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/w1W3kT1kixo',
    userId: 19,
  },
  {
    name: 'Anthony',
    dateOfBirth: '1991-06-10',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/3hsoRvNiEz8',
    userId: 20,
  },
  {
    name: 'Kimberly',
    dateOfBirth: '1990-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/V297jRiZZSI',
    userId: 21,
  },
  
  {
    name: 'Charles',
    dateOfBirth: '1984-06-10',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/O5_adohk29M',
    userId: 22,
  },
  {
    name: 'Jessica',
    dateOfBirth: '1996-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/tTUSgZ8uLkk',
    userId: 23,
  },
  {
    name: 'Thomas',
    dateOfBirth: '1996-06-10',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/-8c7o7Rt_tE',
    userId: 24,
  },
  {
    name: 'Lisa',
    dateOfBirth: '1988-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/x7HSkZGD28g',
    userId: 25,
  },
  {
    name: 'Christopher',
    dateOfBirth: '1988-06-10',
    gender: 'male',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/j3lf-Jn6deo',
    userId: 26,
  },
  {
    name: 'Ashley',
    dateOfBirth: '1994-06-10',
    gender: 'female',
    interestedIn: 'all',
    location: 'Barcelona',
    profilePicture:
      'https://source.unsplash.com/yZwrmzKGKZA',
    userId: 27,
  },
];