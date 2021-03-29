import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, boxShadow } from '../../helpers/styles';
import styled from 'styled-components/native';

// Styles
const Button = styled.TouchableOpacity`
  background-color: ${colors.violet}
  padding: 10px 40px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  box-shadow: ${boxShadow}
`;

const ButtonText = styled.Text`
  color: ${colors.white};
`;

function PrimaryButton({ title, action }) {
  return (
    <Button onPress={action}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
}

export default PrimaryButton;
