import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import MainTemplate from 'templates/MainTemplate';

const Wrapper = styled.div`
  width: 83%;
  margin: 0 auto 0 auto;
`;

const Grid = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Square = styled.div`
  width: 100%;
  height: 550px;
  background-color: #c4c4c4;
`;

const StyledHeader = styled(Header)`
  margin-top 20px;
`;

const Gallery = () => (
  <MainTemplate>
    <Wrapper>
      <StyledHeader fontSize="5.5rem" color="#000">
        Gallery
      </StyledHeader>
      <Grid>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </Grid>
    </Wrapper>
  </MainTemplate>
);

export default Gallery;
