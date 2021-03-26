import React from 'react';
import { View, Text} from 'react-native';


interface IProps {
  loading: any,
  error: any,
  data: any,
  children: any
}

const QueryResult: React.FC<IProps> = ({loading, error, data, children}) => {
  if (error) {
    return (
      <View>
        <Text>ERROR: {error.message}</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (!data) {
    return (
      <View>
        <Text>Nothing to show</Text>
      </View>
    );
  }
  if(data) {
    return children;
  }
};

export default QueryResult;