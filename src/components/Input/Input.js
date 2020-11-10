import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Label = styled.label`
  width: 100%;
  font-size: 2.6rem;
  color: white;
  text-transform: capitalize;
   ${({color}) => color && css `
      color: ${color};
   `}
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 2.4rem;
  padding: 0.5em;
  border: ${(props) => props.border || 'none'};
  background-color: #fff;
  margin-top: 0.5em;
`;

const Input = ({ label, placeholder, type, ...rest }) => (
  <Wrapper>
    <Label {...rest} >{label}</Label>
    <StyledInput {...rest} placeholder={placeholder} type={type} />
  </Wrapper>
);

export default Input;
