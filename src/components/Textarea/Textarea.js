import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 4em;
`;

const Label = styled.label`
  width: 100%;
  font-size: 2.6rem;
  color: ${(props) => props.color || "white"};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 225px;
  font-size: 2.4rem;
  padding: 0.5em;
  border: ${(props) => props.border || 'none'};
  background-color: #fff;
  margin-top: 0.5em;
`;

const Textarea = ({ label, placeholder, type, ...rest }) => (
  <Wrapper>
    <Label {...rest} >{label}</Label>
    <StyledTextarea {...rest} placeholder={placeholder} />
  </Wrapper>
);

export default Textarea;
