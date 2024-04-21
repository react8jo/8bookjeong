import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
`;
export default GlobalStyle;

export const BookTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  width: 140px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BookAuthor = styled.div`
  font-size: 0.8vw;
  font-size: 12px;
  color: #999;
  width: 130px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 30px;
`;

export const NewBookCardImg = styled.div`
  background-image: url(${(props) => props.$backgroundImage});
  position: relative;
  width: 50%;
  height: auto;
  aspect-ratio: 300 / 450;
  border: none;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  background-size: cover;
  transition: all 300ms;
  box-shadow: 0 3px 8px rgb(141, 138, 138);
  cursor: pointer;
  @ media(hover: hover) and (pointer: fine) {
    cursor: pointer;
}
`;

export const NewBookTag = styled.h4`
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 1;
  color: #fff;
  // color: #6C523D;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  height: 4vw;
  // width: 30%;
  // height: 30%;
  font-size: 1.3vw;
  background: rgb(255, 119, 55);
  // background: #29c552;
  // background: #F0EDD9;
  // @media (max-width: 3000px) {
  //   width: 4vw;
  //   height: 4vw;
  //   font-size: 1.3vw;
  // }

  //처음부터는 slide responsive에 맞춰서수정했으면 됐을듯하다
  @media (max-width: 464px) {
    width: 11vw;
    height: 11vw;
    font-size: 3vw;
    top: -10px;
    left: -10px;
  }
  @media (min-width: 465px) and (max-width: 800px) {
    width: 8vw;
    height: 8vw;
    font-size: 2.2vw;
    top: -10px;
    left: -10px;
  }
  @media (min-width: 801px) and (max-width: 1000px) {
    width: 6.5vw;
    height: 6.5vw;
    font-size: 2vw;
    top: -10px;
    left: -10px;
  }
  @media (min-width: 1001px) and (max-width: 1300px) {
    width: 5vw;
    height: 5vw;
    font-size: 1.5vw;
    top: -10px;
    left: -10px;
  }
  @media (min-width: 1301px) and (max-width: 1500px) {
    width: 5vw;
    height: 5vw;
    font-size: 1.5vw;
    left: -10px;
  }
  @media (min-width: 1501px) and (max-width: 1800px) {
    width: 4vw;
    height: 4vw;
    font-size: 1.4vw;
    left: -10px;
  }
  @media (min-width: 1801px) and (max-width: 2000px) {
    width: 3.5vw;
    height: 3.5vw;
    font-size: 1.2vw;
    left: -10px;
  }
  @media (min-width: 2001px) and (max-width: 3000px) {
    width: 3vw;
    height: 3vw;
    font-size: 1vw;
    left: -10px;
  }
`;

// @media (min-width: 2000px) and(max-width: 3000px) {
//   width: 4vw;
//   height: 4vw;
//   font-size: 2.2vw;
// }
// @media (min-width: 1024px) and(max-width: 2000px) {
//   width: 4vw;
//   height: 4vw;
//   font-size: 2.2vw;
// }
// @media (min-width: 768px) and(max-width: 1024px) {
//   width: 5vw;
//   height: 5vw;
//   // font-size: 0.1vw;
// }
