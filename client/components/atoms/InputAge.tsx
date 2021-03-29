import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { colors } from '../../helpers/styles';

interface IPropsAge {
  title: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
}

const InputAge: React.FC<IPropsAge> = ({
  placeholder,
  title,
  onChangeText,
  value,
}: IPropsAge) => {
  return (
    <View style={styles.containerAge}>
      <View>
        <Text style={styles.fontAge}>{title}</Text>
      </View>
      <TextInput
        style={styles.inputAge}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputAge: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 8,
    marginLeft: 5,
    width: '35%',
    fontSize: 20,
    color: colors.grey,
  },
  placeHolder: { fontSize: 20, color: colors.grey },
  fontAge: {
    color: colors.violet,
    marginLeft: 5,
  },
  containerAge: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default InputAge;
