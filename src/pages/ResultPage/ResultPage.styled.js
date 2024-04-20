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
  border-bottom: 1px solid rgb(189, 189, 189);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SortItem = styled.li`
  display: inline-block;
  margin-left: 1em;
  cursor: pointer;
  & {
    &.active {
      color: rgb(137, 146, 39);
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;
