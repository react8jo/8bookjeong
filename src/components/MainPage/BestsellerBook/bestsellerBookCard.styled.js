import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
`;
export default GlobalStyle;

export const BestsellerBookCard = styled.div`
  margin-right: 30px;
  cursor: pointer;
`;

export const BookTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  width: 180px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BookAuthor = styled.div`
  font-size: 0.8vw;
  font-size: 12px;
  color: #999;
  width: 190px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BestsellerBookCardimg = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 300 / 450;
  border: none;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  background-size: cover;
  transition: all 300ms;
  box-shadow: 0 3px 8px rgb(141, 138, 138);
  @ media(hover: hover) and (pointer: fine) {
    cursor: pointer;
}
`;

export const Ranking = styled.h4`
  position: absolute;
  bottom: 0px;
  left: -20px;
  z-index: 1;
  font-family: 'Anton', sans-serif;
  font-size: 100%;
  line-height: 1;
  color: white;
  text-shadow: 0 3px 6px rgb(0, 0, 0);
`;
