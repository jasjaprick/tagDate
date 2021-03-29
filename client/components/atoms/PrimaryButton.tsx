import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, boxShadow } from '../../helpers/styles';
import styled from 'styled-components/native';

// Styles
const Button = styled.TouchableOpacity`
  background-color: ${colors.violet}
  padding: 15px 40px;
  width: 80%;
  border-radius: 10px
  margin: 20px auto;
  display: flex;
  align-items: center;
  box-shadow: ${boxShadow};
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
