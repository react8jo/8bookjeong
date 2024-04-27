import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
`;
export default GlobalStyle;

export const BestsellerBookSlider = styled.section`
  // padding: 3% 0;
  font-family: 'Anton', sans-serif;
  font-size: clamp(100px, 7vw, 140px);

  @media (max-width: 768px) {
    margin: 0 -15px;
  }
`;

export const CarouselContainer = styled.div`
  padding: 25px 0;
  overflow: hidden;
`;

export const ControlButtonR = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  //
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50%;
  color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
export const ControlButtonL = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 90%;
  //
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50%;
  color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    right: 85%;
  }
`;
