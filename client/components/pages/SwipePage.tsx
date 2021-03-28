import React, { useEffect, useState, useMemo } from 'react';
import { dbUser, IUsers } from '../../db';
import { Text, View,  SafeAreaView, Dimensions } from 'react-native';
import Swipe from '../organisms/Swipe';
import {useQuery, useMutation, gql} from '@apollo/client';
import QueryResult from '../organisms/QueryResult';
import Carousel from 'react-native-snap-carousel';

interface Props {
  dbUser: IUsers[]
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
  const [index, setIndex]  = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
 
  const [likeUser] = useMutation(LIKE_USER);
  const [rejectUser] = useMutation(REJECT_USER);

  const {loading, error, data } = useQuery(GET_MATCHING_ACTIVITIES, {
    variables: {
      ownId: 5,
      tag: 'fish'
    }
  });
  const [carouselItems, setCarouslItems] = useState([]);

  useEffect(() => {
    // console.log("DATA", data.findActivityByTag);
    if (data?.findActivityByTag){
      setCarouslItems(data.findActivityByTag);
    }
  }, [data]);

  const windowWidth = Math.round(Dimensions.get('window').width); 

  const onLike = () => {
    const UID2 = data?.findActivityByTag[index] ? data.findActivityByTag[index].postedBy : 0;
    likeUser({variables: {likeData: {UID1: 1, UID2 }}});
    setIndex(index+1);
  };
  const onNoLike = () => {
    const rejectedId = data?.findActivityByTag[index] ? data.findActivityByTag[index].postedBy : 0;
    rejectUser({variables: {ownId: 1, rejectedId }});
    setIndex(index+1);};

    const  _renderItem = ({item, indexRender}) => {
      
      return (
        <QueryResult error={error} loading={loading} data={data}>
        <View>
          {
           item ? 
            (
              <Swipe
                target={item}
                onLike={onLike}
                onNoLike={onNoLike}
              />
              ) : (
                <Text>NO MORE USERS!</Text>
              )
          }
             </View>
       </QueryResult>
      );
  }; 

  return (
    <View style={{flex: 1 }}>
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
        <Carousel
          layout={"tinder"}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={windowWidth}
          renderItem={_renderItem}
          onSnapToItem = { index => setActiveIndex(index) } />
    </View>
  </View>
  );
};

export default SwipePage;
