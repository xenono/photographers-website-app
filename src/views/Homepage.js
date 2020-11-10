import React, { useRef } from 'react';
import styled from 'styled-components';
import HeroPhoto from 'assets/Hero.jpg';
import Hero from 'components/HomepageComponents/Hero/Hero';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import WeedingSection from 'components/HomepageComponents/WeedingSection/WeedingSection';
import Tiles from 'components/HomepageComponents/Tiles/Tiles';
import ProjectForm from 'components/HomepageComponents/ProjectForm/ProjectForm';

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url(${HeroPhoto}) no-repeat;
  background-size: cover;
`;

const StyledHeader = styled(Header)`
  position: absolute;
  max-width: 30vw;
  text-align: center;
  top: 35%;
  left: 2%;
`;

const StyledRefForm = styled.div`
  position:absolute;
  width: 100%;
  height: 100vh;
  bottom: 12vh;
`;

const Homepage = () => {
  const projectFormRef = useRef(null)

  return (
  <Wrapper>
    <HeroWrapper>
      <Navigation white="true" />
      <StyledHeader fontSize="7rem" fontWeight="700">
        Professional Photo Session
      </StyledHeader>
    </HeroWrapper>
    <Hero />
    <WeedingSection projectFormRef = {projectFormRef} />
    <Tiles />
    <StyledRefForm ref={projectFormRef} id="scroll"/>
    <ProjectForm  />
    <Footer />
  </Wrapper>
)};

export default Homepage;
