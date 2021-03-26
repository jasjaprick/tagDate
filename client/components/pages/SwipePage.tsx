import React, { useEffect, useState } from 'react';
import { dbUser, IUsers } from '../../db';
import { Text, View } from 'react-native';
import Swipe from '../organisms/Swipe';
import {useQuery, useMutation, gql} from '@apollo/client';
import QueryResult from '../organisms/QueryResult';

interface Props {
  dbUser: IUsers[]
}

// GraphQL definitions
const GET_MATCHING_ACTIVITIES = gql`
  query Query($ownId: Float!, $tag: String!) {
    findActivityByTag(
      ownID: $findActivityByTagOwnId
      tag: $findActivityByTagTag
    ) {
      description
      tag
      user {
        profile {
          name
          bio
          age
          location
          profilePicture
        }
      }
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
    
  }
}
`;

const SwipePage: React.FunctionComponent<Props> = () => {
  const [index, setIndex]  = useState(0);

  const {loading, error, data } = useQuery(GET_MATCHING_ACTIVITIES);
  const [likeUser] = useMutation(LIKE_USER);
  const [rejectUser] = useMutation(REJECT_USER);
  
  // If error in fetching data then console.log error
  if(error) console.log(error);

  const onLike = () => {
    likeUser({variables: {likeData: {UID1: 1, UID2: data.postedBy}}});
    setIndex(index+1);
  };
  const onNoLike = () => {
    rejectUser({variables: {ownId: 1, rejectedId: data.postedBy}});
    setIndex(index+1);};

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <View>
        {data[index] ? (
          <Swipe target={data[index]} onLike={onLike} onNoLike={onNoLike} />
        ) : (
          <Text>NO MORE USERS!</Text>
        )}
      </View>
    </QueryResult>
  );
};

export default SwipePage;
