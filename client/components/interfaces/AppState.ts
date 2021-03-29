import { gql, useQuery ,makeVar} from '@apollo/client';


export interface IAppState {
  email: string,
  password:string,
  name: string,
  bio: string,
  age: Date, 
  show: boolean, 
  minAge: number | null,
  maxAge:  number | null,
  userGender: string, 
  genderPreference: string,
  location: string,
} 

export const InitialAppState: IAppState = {
  email: '',
  password: '',
  name:'',
  bio: '',
  age: new Date('1992-12-10T00:00:00.000Z'),
  show: false,
  minAge: null,  
  maxAge: null,
  userGender: 'male', 
  genderPreference: 'male',
  location: ''
};
export const updateState = makeVar<IAppState>(InitialAppState);

export const getState = gql`
  query getState {
    appState @client {
      email
      password
      name
      bio
      age
      show
      minAge
      maxAge
      userGender
      genderPreference
      location
    }
  }
`;


export default function useAppState() {
  const { data: { appState }} = useQuery(getState);
  return [ appState, updateState ];
}