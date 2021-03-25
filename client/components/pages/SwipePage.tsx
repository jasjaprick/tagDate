import React, { useEffect, useState } from 'react';
import { dbUser, IUsers } from '../../db';
import { Text, View, StyleSheet } from 'react-native';
import Swipe from '../organisms/Swipe';

interface Props {
  dbUser: IUsers[]
}

const MatchPage: React.FunctionComponent<Props> = () => {
  const [index, setIndex]  = useState(0);
  const [user, setUser]  = useState<IUsers>(dbUser[0]);
  
  useEffect(() => {
    setUser({...dbUser[index]});
  }, [index]);
  console.log(user, 'USER');
  const onLike = () => {setIndex(index+1);};
  const onNoLike = () => {setIndex(index+1);};

  return (
    <View>
      {dbUser[index] ? 
        <Swipe 
        user={user}
        onLike={onLike}
        onNoLike={onNoLike}
        />
        :
        <Text>NO MORE USERS!</Text>
      }
    </View>
  );
};

export default MatchPage;
