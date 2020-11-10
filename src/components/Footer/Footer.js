import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';

const Wrapper = styled.div`
  height: 5vh;
  padding-left: 10px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 880px){
    height: 3vh;
  }
`;

const Footer = () => (
  <Wrapper>
    <Paragraph color="white">@Copyrights Adrian Urbańczyk</Paragraph>
  </Wrapper>
);

export default Footer;
