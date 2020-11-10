import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Paragraph from 'components/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
`;
const ValueBox = styled(Paragraph)`
  width: 200%;
  font-size: 2.2rem;
  border: 1px solid black;
  box-shadow: 2px 3px 8px #000;
  padding: 10px;
`;

const StyledHeader = styled(Header)`
  width: 35%;
  text-align: center;
`;

const ProjectDetailsHeaderItem = ({ title, value }) => (
  <Wrapper>
    <StyledHeader color="black" fontSize="2.7rem" fontWeight="normal">
      {title}
    </StyledHeader>
    <ValueBox>{value}</ValueBox>
  </Wrapper>
);

export default ProjectDetailsHeaderItem;
