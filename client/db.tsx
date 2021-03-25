export interface IUsers {
  name: string,
  bio: string,
  age: number,
  gender: string,
  interestedIn: string,
  location: string,
  pictures: string[],
  activity: number,
  key: number
  // matches?: Match[]
}



export const dbUser  = 
  [
    {
      name: 'Sofia',
      bio: 'I love dogs and Rock&Roll',
      age: 26,
      gender: 'female',
      interestedIn: 'male',
      location: 'Barcelona',
      pictures: ['https://source.unsplash.com/NUEWYsqzHxM', 'https://source.unsplash.com/fwafgljc0f0'],
      activity: 1,  
      key: 1
    },
    {
      name: 'Luis',
      bio: 'Crazy man looking for adventure partner!',
      age: 40,
      gender: 'male',
      interestedIn: 'female',
      location: 'London',
      pictures: ['https://source.unsplash.com/DItYlc26zVI', 'https://source.unsplash.com/uuVguyksViA'],
      activity: 2,
      key: 2
    },
    {
      name: 'Craig',
      bio: 'Plátano de Canarias is my passion',
      age: 34,
      gender: 'male',
      interestedIn: 'female',
      location: 'Iran',
      pictures: ['https://source.unsplash.com/a3RhaDG_pNM', 'https://source.unsplash.com/QLcxFso3gLk'],
      activity: 3,
      key: 3
    },
  ];


