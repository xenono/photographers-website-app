import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.color || '#000'};
`;

export default Paragraph;
