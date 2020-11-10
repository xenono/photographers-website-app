import React, {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 10vh;
  margin-right: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 900px){
    //display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  text-align: center;
  align-self: center;
  ${({ white }) =>
    white &&
    css`
      color: #fff;
    `}

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 900px){
    width: 100px;
    ${({homepage}) => !homepage && css`
      color: #000;
      padding: 5px 2.5px;
      border-bottom: 1px solid black;
      :last-child {
        border-bottom: none;
      }
      &:hover{
      color: #c4c4c4;
      }
      
    `}
  }
`;

const NavList = styled.div`
  display: flex;
  justify-content: space-evenly;
  grid-column-start: 2;
  grid-column-end: 7;
  @media (max-width: 900px){
    position: fixed;
    height: 0;
    z-index: 999;
    right: 1.5%;
    top: 9%;
    //display: ${({ isNavExpand }) => isNavExpand ? "flex" : "none"};
    justify-content: space-evenly;
    align-items: center; 
    flex-direction: column;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    
  }
`;

const MobileBurgerWrapper = styled.div`
  display: none;
  @media(max-width: 900px){
    position: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
    right: 1.5%;
    top: 1.5%;
    width: 40px;
    height: 40px;
    background-color:#fff;
    border-radius: 10px;
    z-index: 999;
}
  
`

const MobileBurger = styled.div`
  display:none; 
  @media(max-width: 900px){
    display: block;
    width: 60%;
    height: 2px;
    background-color:#000;
    :before,:after{
      position: absolute;
      content: "";
      width: 60%;
      height: 2px;
      background-color:#000;
      border-radius: 15px;
    }
    :before{
      top: 30%;
    }
    :after {
      bottom: 30%;
    }
  }
  
`;

const Navigation = ({ white, admin }) => {
  const navRef = useRef(null)
  const tl = gsap.timeline()
  const [toggleMobile,setMobile] = useState(false);
  const [isNavExpand,expandNav] = useState(false)

  useEffect(()=>{
    if(toggleMobile !== true && window.innerWidth <= 900){
      setMobile(true)
    }
    if(isNavExpand === true){
      tl.fromTo(navRef.current,
        {height: 0},
        {height: "180px",duration: .6})
      tl.to([...navRef.current.childNodes],
        {stagger:0.1,duration: 0.2},
        "-=.5")
    }
  },[tl,isNavExpand,toggleMobile])

  return (
    <Wrapper>
      {toggleMobile ? (admin ? (
          <StyledLink white={white} to="/">
            Matthew Admin
          </StyledLink>
        ) : (
          <>
            <StyledLink white={white} homepage="true" to="/">
              Matthew
            </StyledLink>
            {toggleMobile &&
            <MobileBurgerWrapper onClick={() => expandNav(!isNavExpand)}>
              <MobileBurger />
            </MobileBurgerWrapper>}
            {isNavExpand && <NavList isNavExpand = {isNavExpand} ref={navRef}>
              <StyledLink white={white} to="/">
                home
              </StyledLink>
              <StyledLink white={white} to="/gallery">
                gallery
              </StyledLink>
              <StyledLink white={white} to="/contact">
                contact
              </StyledLink>
              <StyledLink white={white} to="/about">
                about me
              </StyledLink>
              <StyledLink white={white} to="/admin">
                admin
              </StyledLink>
            </NavList>}
          </>
        )) : (admin ? (
          <StyledLink white={white}  to="/">
            Matthew Admin
          </StyledLink>
        ) : (
          <>
            <StyledLink white={white} homepage="true" to="/">
              Matthew
            </StyledLink>
            <NavList>
              <StyledLink white={white} to="/">
                home
              </StyledLink>
              <StyledLink white={white} to="/gallery">
                gallery
              </StyledLink>
              <StyledLink white={white} to="/contact">
                contact
              </StyledLink>
              <StyledLink white={white} to="/about">
                about me
              </StyledLink>
              <StyledLink white={white} to="/admin">
                admin
              </StyledLink>
            </NavList>
          </>
        ))}
    </Wrapper>
  );
};

Navigation.propTypes = {
  white: PropTypes.string,
  admin: PropTypes.string,
}
export default Navigation;
