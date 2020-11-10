import styled from 'styled-components';

const Header = styled.h1`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || '#fff'};
  margin: 10px 0;
  /* text-align: center; */
`;

export default Header;
