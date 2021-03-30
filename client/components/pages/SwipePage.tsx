import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from 'react-navigation-drawer';
import { IUsers } from '../../db';
import { Text, View, Button } from 'react-native';
import Swipe from '../organisms/Swipe';
import { useQuery, useMutation, gql } from '@apollo/client';
import QueryResult from '../organisms/QueryResult';
import { NavigationContainer } from '@react-navigation/native';
import MenuNavigator from '../navigations/MenuNavigator';

interface Props {
  dbUser: IUsers[];
}

// GraphQL definitions
const GET_MATCHING_ACTIVITIES = gql`
  query Query($ownId: Float!, $tag: String!) {
    findActivityByTag(ownID: $ownId, tag: $tag) {
      description
      user {
        profile {
          name
          bio
          dateOfBirth
          location
          profilePicture
        }
      }
      tag
      postedBy
    }
  }
`;

const LIKE_USER = gql`
  mutation Mutation($likeData: AddPossibleMatchInput!) {
    addPossibleMatch(data: $likeData) {
      id
    }
  }
`;

const REJECT_USER = gql`
  mutation RejectUserMutation($ownId: Float!, $rejectedId: Float!) {
    rejectUser(rejectedId: $rejectedId, ownId: $ownId) {
      id
    }
  }
`;

const SwipePage: React.FunctionComponent<Props> = () => {
  const [index, setIndex] = useState(0);

  const { loading, error, data } = useQuery(GET_MATCHING_ACTIVITIES, {
    variables: {
      ownId: 5,
      tag: 'fish',
    },
  });

  const [likeUser] = useMutation(LIKE_USER);
  const [rejectUser] = useMutation(REJECT_USER);
  const navigation = useNavigation();

  const onLike = () => {
    likeUser({
      variables: {
        likeData: { UID1: 1, UID2: data.findActivityByTag[index].postedBy },
      },
    });
    setIndex(index + 1);
  };
  const onNoLike = () => {
    rejectUser({
      variables: {
        ownId: 1,
        rejectedId: data.findActivityByTag[index].postedBy,
      },
    });
    setIndex(index + 1);
  };

  return (
    <View>
      <Button
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        title='Btn'
      />
      <QueryResult error={error} loading={loading} data={data}>
        <View>
          {data &&
          data.findActivityByTag.length >= 1 &&
          index < data.findActivityByTag.length ? (
            <Swipe
              target={data.findActivityByTag[index]}
              onLike={onLike}
              onNoLike={onNoLike}
            />
          ) : (
            <Text>NO MORE USERS!</Text>
          )}
        </View>
      </QueryResult>
    </View>
  );
};

export default SwipePage;
