import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
`;
export default GlobalStyle;

export const ChoiceBookSlider = styled.section`
  // padding: 3% 0;
  font-family: 'Anton', sans-serif;
  font-size: clamp(100px, 7vw, 140px);
`;

export const CarouselContainer = styled.div`
  padding: 125px 0;
  overflow: hidden;
`;
