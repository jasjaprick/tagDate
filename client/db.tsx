interface IUsers {
  name: string,
  bio: string,
  age: number,
  gender: string,
  interestedIn: string,
  location: string,
  pictures: string[],
  activity: number,
  // matches?: Match[]
}



export const dbUser :IUsers [] = 
  [
    {
      name: 'Pedro',
      bio: 'I love cats and Rock&Roll',
      age: 26,
      gender: 'male',
      interestedIn: 'female',
      location: 'Barcelona',
      pictures: ['https://api.unsplash.com/photos/8ig-SzHpqDw', 'https://unsplash.com/photos/jgaVXPv9soI'],
      activity: 1,
    },
    {
      name: 'Luis',
      bio: 'Crazy man looking for adventure partner!',
      age: 40,
      gender: 'male',
      interestedIn: 'female',
      location: 'London',
      pictures: ['https://unsplash.com/photos/DItYlc26zVI', 'https://unsplash.com/photos/uuVguyksViA'],
      activity: 2,
    },
    {
      name: 'Craig',
      bio: 'Plátano de Canarias is my passion',
      age: 34,
      gender: 'male',
      interestedIn: 'female',
      location: 'Iran',
      pictures: ['https://unsplash.com/photos/a3RhaDG_pNM', 'https://unsplash.com/photos/QLcxFso3gLk'],
      activity: 3,
    },
  ];


