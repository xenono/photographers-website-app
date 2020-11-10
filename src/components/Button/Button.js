import styled from 'styled-components';

const Button = styled.button`
  display: block;
  border: none;
  color: #fff;
  background-color: #000;
  width: 200px;
  height: 60px;
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0 auto;
  &:hover {
    background-color: #fff;
    color: black;
    cursor: pointer;
    transition: all 0.3s 0s;
    border: 1px solid black;
  }
  @media (max-width: 1125px){
    width: 150px;
  }
  @media (max-width: 900px){
    width: 125px;
  }
  @media (max-width: 750px){
    width: 100px;
    height: 50px;
  }
  @media (max-width: 750px){
    width: 100px;
    height: 35px;
  }
`;

export default Button;
