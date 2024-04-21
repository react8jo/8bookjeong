import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
`;
export default GlobalStyle;

export const ChoiceBookCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  // width: 100%;
  width: 300px;
  height: 180px;
  // margin-right: 30px;
  cursor: pointer;
  // @media (max-width: 768px) {
  //   width: 300px;
  //   height: auto;
  // }
  // @media (min-width: 768px) and (max-width: 1024px) {
  //   width: 300px;
  //   height: auto;
  // }
  // @media (min-width: 1024px) and (max-width: 3000px) {
  //   width: 400px;
  //   height: auto;
  // }
`;

// @media (max-width: 3000px) and (max-width: 1024px) {
//   width: 500px;
//   height: auto;
// }
// @media (max-width: 1024px) and (max-width: 768px) {
//   width: 300px;
//   height: auto;
// }
// @media (max-width: 768pxpx) and (max-width: 0px) {
//   width: 200px;
//   height: auto;
// }
// `;

// desktop: {
//   breakpoint: { max: 3000, min: 1024 },
//   items: 4
// },
// tablet: {
//   breakpoint: { max: 1024, min: 768 },
//   items: 2
// },
// mobile: {
//   breakpoint: { max: 768, min: 0 },
//   items: 2,
//   slidesToSlide: 1
// }
// };

export const BookTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  width: 180px;
  padding: 0 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left; /* 왼쪽 정렬 추가 */
  // @media (min-width: 1300px) and (max-width: 3000px) {
  //   width: 300px;
  //   text-overflow: ellipsis;
  // }
  // @media (min-width: 768px) and (max-width: 1300px) {
  //   width: 300px;
  // }
`;

export const BookAuthor = styled.div`
  font-size: 0.8vw;
  font-size: 13px;
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
  color: #999;
  width: 190px;
  padding: 0 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left; /* 왼쪽 정렬 추가 */
`;

export const ChoiceBookCardimg = styled.div`
  background-image: url(${(props) => props.$backgroundImage});
  width:80%;
  height:auto;
  aspect-ratio: 300 / 450;
  border:none;
  font-family:'Spoqa Han Sans Neo', sans-serif;  
  background-size:cover;
  transition:all 300ms;
  box-shadow: 0 3px 8px rgb(141, 138, 138);   
  /* margin: 0 10px; */
  @media(hover: hover) and (pointer: fine) {
    &:hover{
      cursor: pointer;
    }
  }  
}
`;
