import React, { useEffect, useState, useRef } from 'react';
import { dbUser, IUsers } from '../../db';
import { Text, View, Dimensions } from 'react-native';
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
  // const [index, setIndex]  = useState(0);
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
    // console.log('DATA', data.findActivityByTag);
    if (data?.findActivityByTag){
      setCarouslItems(data.findActivityByTag);
    }
  }, [data]);

  useEffect(() => {
   console.log('ACTIVE INDEX', activeIndex);

  }, [activeIndex]);

  const windowWidth = Math.round(Dimensions.get('window').width); 
  const buttonRef = useRef<any>();

  const onLike = () => {
    console.log('LIKE', activeIndex);
  
    const UID2 = data?.findActivityByTag[activeIndex] ? data.findActivityByTag[activeIndex].postedBy : 0;
    likeUser({variables: {likeData: {UID1: 1, UID2 }}});
    setActiveIndex(activeIndex+1);
    buttonRef.current?.snapToNext(true);
  };
  const onDislike = () => {
    const rejectedId = data?.findActivityByTag[activeIndex] ? data.findActivityByTag[activeIndex].postedBy : 0;
    rejectUser({variables: {ownId: 1, rejectedId }});
    setActiveIndex(activeIndex+1);
    buttonRef.current?.snapToNext(true);
  };

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
                onDislike={onDislike}
              />
              ) : (
                <Text>NO MORE USERS!</Text>
              )
          }
             </View>
       </QueryResult>
      );
  }; 
  // const onSnap = (index: number) => {
  //   setActiveIndex(index);
  //   onLike();
  // };

  return (
    <View style={{flex: 1 }}>
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
        <Carousel
          ref={buttonRef}
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
