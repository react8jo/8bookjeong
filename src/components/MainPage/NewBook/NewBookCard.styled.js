import styled from 'styled-components';

export const NewBookCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  cursor: pointer;
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
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  height: 4vw;
  font-size: 1.3vw;
  background: #29c552;
`;

export const BookTitle = styled.h3`
  margin-top: 8px;
  font-size: 1.2em;
  font-weight: bold;
`;

export const BookAuthor = styled.p`
  font-size: 0.9em;
  color: #666;
`;
