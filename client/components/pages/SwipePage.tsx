import React, { useState } from 'react';
import { IUsers } from '../../db';
import { Text, View } from 'react-native';
import Swipe from '../organisms/Swipe';
import { useQuery, useMutation, gql } from '@apollo/client';
import QueryResult from '../organisms/QueryResult';

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
  );
};

export default SwipePage;
