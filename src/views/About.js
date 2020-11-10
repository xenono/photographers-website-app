import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import Paragraph from 'components/Paragraph/Paragraph';
import Header from 'components/Header/Header';
import AuthorImage from 'assets/author.jpg';

const AbsoluteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  //position: absolute;
  right: 0;
  top: 0;
  background: url(${AuthorImage});
  background-position: top;
  background-size: cover;

`;

const StyledParagraph = styled(Paragraph)`
  font-size: 2.5rem;
`;

const ContentWrapper = styled.div`
  padding: 3em 3em 3em 18%;
`;

const StyledHeader = styled(Header)`
  width: 100%;
  text-align: left;
  margin: 0;
`;

const Contact = () => (
  <MainTemplate>
    <AbsoluteGrid>
      <ContentWrapper>
        <StyledHeader fontSize="5.5rem" color="black">
          About me
        </StyledHeader>
        <StyledParagraph>
          School was where I first discovered photography. My real passion for photography, however,
          was sparked whilst travelling in India at eighteen and I have been a keen traveller and
          photographer ever since.
        </StyledParagraph>
        <StyledParagraph>
          I studied Art History at SOAS and Fine Art Sculpture at Chelsea and Wimbledon Art Schools.
          At art school I used photography frequently in my work, not only as a form of
          documentation but the photograph itself became the final piece of my artwork. After art
          school I worked with Interior Designers creating a variety of artwork for show houses in
          Belgravia, Mayfair and Knightsbridge.
        </StyledParagraph>
        <StyledParagraph>
          I am now based in London and work throughout the UK and abroad. I am also a wife to
          Dominic and a mother to 2 sons, Louis & Oscar, as well as Rolo, a working cocker
          spaniel.Since becoming a mother to 2 boys, I have rarely put my camera down. Capturing
          those precious moments as the boys have grown holds enormous value to me and my most
          treasured possessions are my photographs.
        </StyledParagraph>
      </ContentWrapper>

      <Image />
    </AbsoluteGrid>
  </MainTemplate>
);

export default Contact;
