import styled, { createGlobalStyle } from 'styled-components';

export const NewBookCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  cursor: pointer;
`;

export const NewBookCardImg = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  position: relative;
  width: 50%;
  height: auto;
  aspect-ratio: 300 / 450;
  border: none;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  background-size: cover;
  transition: all 300ms;
  box-shadow: 0 3px 8px rgb(141, 138, 138);
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
    }
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
  margin-bottom: 30px;
`;

export const NewBookCardimg = styled.div`
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
