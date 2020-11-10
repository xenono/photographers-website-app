import React from 'react';
import styled from 'styled-components';
import MatthewWithCamera from 'assets/matthew-with-camera.jpg';

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media(max-width: 600px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
const HeroPhoto = styled.div`
  background: url(${MatthewWithCamera}) center;
  background-size: cover;
  
  @media (max-width: 600px){
    background-size: cover;
    background-position-y: 25%;
  }
  
`;

const SpanWrapper = styled.div`
  color: white;
  width: 80%;
  text-align: center;
`;

const Span = styled.span`
  font-size: 100px;
  display: block;
  margin: 0 auto;
  @media (max-width: 1244px){
    font-size: 90px;
  }
  @media (max-width: 1000px){
    font-size: 70px;
  }
  @media (max-width: 730px){
    font-size: 55px;
  }
  @media (max-width: 600px){
    font-size: 45px;
  }
`;
const Hero = () => (
  <Wrapper>
    <FlexColumn>
      <SpanWrapper>
        <Span>I</Span>
        <Span>WAS</Span>
        <Span>BORN</Span>
        <Span>WITH</Span>
        <Span>CAMERA</Span>
      </SpanWrapper>
    </FlexColumn>
    <HeroPhoto />
  </Wrapper>
);

export default Hero;
