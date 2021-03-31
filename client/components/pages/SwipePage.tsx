import React, { useEffect, useState, useRef } from 'react';
import { IUsers } from '../../db';
import { Text, View, Dimensions, Animated, PanResponder } from 'react-native';
import Swipe from '../organisms/Swipe';
import { useQuery, useMutation, gql } from '@apollo/client';
import QueryResult from '../organisms/QueryResult';
import { Activities } from '../interfaces/activities.interface';
import {
  currentUserRegistrationId,
  currentUserTag,
} from '../interfaces/AppState';
import TitleHeader from '../molecules/TitleHeader';

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

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipePage: React.FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const userId = currentUserRegistrationId();

  const [likeUser] = useMutation(LIKE_USER);
  const [rejectUser] = useMutation(REJECT_USER);

  const currentTag = currentUserTag();

  const { loading, error, data } = useQuery(GET_MATCHING_ACTIVITIES, {
    variables: {
      ownId: userId,
      tag: currentTag,
    },
  });
  const [users, setUsers] = useState<Activities[]>([]);

  const position = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    error && console.log(error);
    if (data?.findActivityByTag) {
      setUsers(data.findActivityByTag);
    }
  }, [data]);

  useEffect(() => {
    console.log('ACTIVE INDEX', activeIndex);
    position.setValue({ x: 0, y: 0 });
  }, [activeIndex]);

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-30deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });

  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  };

  const likeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const dislikeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });

  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });

  // eslint-disable-next-line prefer-const
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
          position.setValue({ x: gestureState.dx, y: gestureState.dy });
        },
        onPanResponderRelease: (evt, gestureState) => {
          if (gestureState.dx > 120) {
            Animated.spring(position, {
              useNativeDriver: true,
              toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            }).start(() => {
              setActiveIndex(activeIndex + 1);
            });
          } else if (gestureState.dx < -120) {
            Animated.spring(position, {
              useNativeDriver: true,
              toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            }).start(() => {
              setActiveIndex(activeIndex + 1);
            });
          } else {
            Animated.spring(position, {
              useNativeDriver: true,
              toValue: { x: 0, y: 0 },
              friction: 4,
            }).start();
          }
        },
      }),
    []
  );

  const onLike = () => {
    const UID2 = users[activeIndex] ? users[activeIndex].postedBy : 0;
    likeUser({ variables: { likeData: { UID1: 1, UID2 } } });
    setActiveIndex(activeIndex + 1);
  };
  const onDislike = () => {
    const rejectedId = users[activeIndex] ? users[activeIndex].postedBy : 0;
    rejectUser({ variables: { ownId: 1, rejectedId } });
    setActiveIndex(activeIndex + 1);
  };

  const onSwipeLeft = () => {
    onDislike();
  };

  const onSwipeRight = () => {
    onLike();
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  const renderUsers = () => {
    if (users.length === 0 || activeIndex >= users.length) {
      return (
        <View>
          <TitleHeader isPrimary={true} title={'Swipe'} />
          <Text>NO MORE USERS!</Text>
        </View>
      );
    }

    return users
      .map((item, i) => {
        if (i < activeIndex) {
          return null;
        } else if (i == activeIndex) {
          return (
            <Animated.View
              {...panResponder.panHandlers}
              key={i}
              style={[
                rotateAndTranslate,
                {
                  height: SCREEN_HEIGHT,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: 'absolute',
                },
              ]}
            >
              <Animated.View
                style={{
                  opacity: likeOpacity,
                  transform: [{ rotate: '-30deg' }],
                  position: 'absolute',
                  top: 50,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: 'green',
                    color: 'green',
                    fontSize: 32,
                    fontWeight: '800',
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: dislikeOpacity,
                  transform: [{ rotate: '30deg' }],
                  position: 'absolute',
                  top: 50,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: 'red',
                    color: 'red',
                    fontSize: 32,
                    fontWeight: '800',
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>
              <QueryResult error={error} loading={loading} data={users}>
                <View>
                  <Swipe
                    target={users[activeIndex]}
                    onLike={onLike}
                    onDislike={onDislike}
                  />
                </View>
              </QueryResult>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={i}
              style={[
                {
                  opacity: nextCardOpacity,
                  transform: [{ scale: nextCardScale }],
                  height: SCREEN_HEIGHT,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: 'absolute',
                },
              ]}
            >
              <Animated.View
                style={{
                  opacity: 0,
                  transform: [{ rotate: '-30deg' }],
                  position: 'absolute',
                  top: 50,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: 'green',
                    color: 'green',
                    fontSize: 32,
                    fontWeight: '800',
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>

              <Animated.View
                style={{
                  opacity: 0,
                  transform: [{ rotate: '30deg' }],
                  position: 'absolute',
                  top: 50,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: 'red',
                    color: 'red',
                    fontSize: 32,
                    fontWeight: '800',
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>

              <QueryResult error={error} loading={loading} data={users}>
                <View>
                  <Swipe
                    target={users[activeIndex + 1]}
                    onLike={onLike}
                    onDislike={onDislike}
                  />
                </View>
              </QueryResult>
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  return (
    <View>
      <View>{renderUsers()}</View>
    </View>
  );
};

export default SwipePage;
