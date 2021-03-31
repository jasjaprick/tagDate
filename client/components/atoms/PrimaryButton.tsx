import React from 'react';
import { colors, boxShadow } from '../../helpers/styles';
import styled from 'styled-components/native';

interface ITheme {
  primary: boolean
}

// Styles
const Button = styled.TouchableOpacity<ITheme>`
  background-color: ${props => props.primary ? colors.violet : 'transparent'};
  padding: 16px 40px;
  width: 80%;
  border-radius: 10px;
  border: 2px solid ${colors.violet};
  margin: 20px auto;
  display: flex;
  align-items: center;
  box-shadow: ${boxShadow};
`;

const ButtonText = styled.Text<ITheme>`
  color: ${props => props.primary ? colors.white : colors.violet};
`;

// Props interface
interface IProps {
  title: string,
  action: any,
  isPrimary: boolean
}


const PrimaryButton: React.FC<IProps> = ({ isPrimary, title, action }) => {
  return (
    <Button primary={isPrimary} onPress={action}>
      <ButtonText primary={isPrimary}>{title}</ButtonText>
    </Button>
  );
};

export default PrimaryButton;
