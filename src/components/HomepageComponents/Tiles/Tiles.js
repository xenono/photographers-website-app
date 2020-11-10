import React from 'react';
import Header from 'components/Header/Header';
import Dish from 'assets/Dish.jpg';
import Suit from 'assets/SuitMan.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const DishWrapper = styled.div`
  background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuitWrapper = styled.div`
  background-color: #b7b7b7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DishPhoto = styled.div`
  background: url(${Dish});
  background-size: cover;
  background-position: center;
`;

const SuitPhoto = styled.div`
  background: url(${Suit});
  background-size: cover;
  background-position: center;
`;

const Tiles = () => (
  <Wrapper>
    <DishWrapper>
      <Header fontSize="5rem" fontWeight="600">
        <div>ilustrative</div> <div>product</div> <div>photo</div>
      </Header>
    </DishWrapper>
    <DishPhoto />
    <SuitPhoto />
    <SuitWrapper>
      <Header fontSize="5rem" fontWeight="600" color="#000">
        <div>business</div> <div>photoshoot</div>
      </Header>
    </SuitWrapper>
  </Wrapper>
);

export default Tiles;
