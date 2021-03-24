import React from 'react';
import { dbUser, IUsers } from '../../db';
import { Text, View, StyleSheet } from 'react-native';
import Match from '../organisms/Match';

interface Props {
  dbUser: IUsers[]
}

const MatchPage: React.FunctionComponent<Props> = () => {
console.log(dbUser, 'dbUserrrrr');
  return (
    <View>
      <Match 
      name={dbUser[0].name}
      age={dbUser[0].age}
      location={dbUser[0].location}
      pictures={dbUser[0].pictures}
      activity={dbUser[0].activity}
      />
    </View>
  );
};

export default MatchPage;