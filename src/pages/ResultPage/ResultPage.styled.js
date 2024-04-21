import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../assets/style/globalStyle.styled';

export const SearchCount = styled.div`
  margin-top: 1em;
  margin-left: 2em;
  font-weight: bold;

  @media (max-width: 768px) {
    margin: 0 0 20px 5px;
  }
`;

export const SearchQuery = styled.span`
  color: ${secondaryColor};
  font-weight: bold;
  font-size: large;
`;

export const SortArea = styled.div`
  margin-top: 0.5em;
  padding: 0.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SortItem = styled.li`
  display: inline-block;
  // margin-left: 1em;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: bold;
  border: 2px solid ${primaryColor};
  border-radius: 32px;

  margin-bottom: 0.3rem;
  margin-right: 0.3rem;
  font-size: 14px;

  & {
    &.active {
      color: ${primaryColor};
      font-weight: bold;
    }
    &.nonclick {
      color: ${primaryColor};
      background-color: white;
    }
    &.clicked {
      color: white;
      background-color: ${primaryColor};
    }
  }
  // @media (max-width: 768px) {
  //   margin-top: 0.5em;
  //   margin-bottom: 0.5em;
  //   padding: 0px;
  //   border: none;
  // }
  // @media (min-width: 769px) {
  //   // 모바일 화면 크기 이상일 때만 hover 효과 적용
  //   &:hover {
  //     border-radius: 24px;
  //     color: white;
  //     background-color: ${primaryColor};
  //   }
  // }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 5px 0;
  height: 2px;
  background-color: #aaa;
  border: none;
`;

export const PaginationArea = styled.div`
  margin: 2em;
  display: flex;
  justify-content: center;
`;

export const ContentsLoding = styled.div`
  height: 2250px;
`;
