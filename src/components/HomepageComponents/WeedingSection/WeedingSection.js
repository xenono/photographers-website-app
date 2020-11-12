import React from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import WeedingBG from 'assets/weeding.jpg';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import PropTypes from "prop-types"


const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background: url(${WeedingBG}) center;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 12%;
`;

const Span = styled.span`
  display: block;
`;

const WeedingSection = ({ projectFormRef }) => {

  const handleClick = () => {
    gsap.to(window, { duration: 2, scrollTo: projectFormRef.current.offsetTop });
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <Header fontSize="7.2rem" color="#000">
          <Span>weeding</Span> session
        </Header>
        <Button onClick={() => handleClick(projectFormRef)}>estimate</Button>
      </ContentWrapper>
    </Wrapper>
  );
};

// WeedingSection.propTypes = {
  // projectFormRef: PropTypes.shape({ root: PropTypes.string.isRequired })
// }

export default WeedingSection;
