import styled from 'styled-components';
import { secondaryColor } from '../../assets/style/globalStyle.styled';

export const BookDetail = styled.div`
  font-size: small;
  color: gray;
`;

export const BookDetailInfo = styled.div`
  margin-bottom: 5px;
`;

export const BookSub = styled.div`
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const BookSubInfo = styled.div`
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: small;
  }
`;

export const BookPrice = styled.span`
  font-size: small;
  color: gray;
  text-decoration: line-through;
  @media (max-width: 768px) {
    font-size: x-small;
  }
`;

export const BookSale = styled.span`
  font-weight: bold;
  margin-right: 5px;
  @media (max-width: 768px) {
    font-size: small;
  }
`;
export const BookSalePercent = styled.span`
  font-size: large;
  color: ${secondaryColor};
  font-weight: bold;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: small;
  }
`;

export const TextEllipsis = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  width: 200px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: larger;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: medium;
  }
`;

export const BookCard = styled.div`
  display: flex;
`;

export const BookImg = styled.div`
  width: 200px;
  object-fit: cover;
`;

export const BookInfo = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BookContainer = styled.div`
  margin: 1em;
`;

export const BookTag = styled.div`
  margin-top: 1em;
  font-size: small;
  color: gray;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BookTagInfo = styled.div`
  margin-bottom: 5px;
`;

export const BookImgLayer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const BookCover = styled.img`
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.04);
    cursor: pointer;
  }
`;

export const BookSecondInfo = styled.div``;

export const BookThirdInfo = styled.div``;
