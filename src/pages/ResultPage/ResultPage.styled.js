import styled from 'styled-components';

export const SearchCount = styled.div`
  margin-top: 1em;
  margin-left: 5em;
`;

export const SearchQuery = styled.span`
  color: rgb(137, 146, 39);
  font-weight: bold;
  font-size: large;
`;

export const SortArea = styled.div`
  padding: 0.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SortItem = styled.li`
  display: inline-block;
  margin-left: 1em;
  cursor: pointer;
  padding: 10px;
  & {
    &.active {
      color: rgb(137, 146, 39);
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0px;
  }
  @media (min-width: 769px) {
    // 모바일 화면 크기 이상일 때만 hover 효과 적용
    &:hover {
      border-radius: 24px;
      color: white;
      background-color: rgb(137, 146, 39);
    }
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 5px 0;
  height: 2px;
  background-color: #aaa;
  border: none;
`;
