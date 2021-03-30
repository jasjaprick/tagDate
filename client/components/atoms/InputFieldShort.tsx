import React from 'react';
import { colors } from '../../helpers/styles';
import styled from 'styled-components/native';

// Styles
const TextField = styled.TextInput<ITheme>`
  border: 1px solid ${colors.grey};
  padding: 16px 8px;
  width: ${(props) => (props.fluid ? '100%' : '80%')};
  margin: 5px auto;
  border-radius: 10px;
  background: ${colors.white};
`;

interface IProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
  isPassword?: boolean;
  isFluid: boolean;
}

interface ITheme {
  fluid: boolean;
}

const InputFieldShort: React.FC<IProps> = ({
  placeholder,
  onChangeText,
  value,
  isPassword,
  isFluid,
}) => {
  if (isPassword)
    return (
      <TextField
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        secureTextEntry={true}
        fluid={isFluid}
      ></TextField>
    );
  return (
    <TextField
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      fluid={isFluid}
    ></TextField>
  );
};

export default InputFieldShort;
