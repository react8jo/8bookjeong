import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  background-color: #f0f0f0; // 옅은 회색
`;

export const Tab = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333; // 짙은 회색
  background-color: ${(props) => (props.isActive ? '#333' : 'transparent')};
  color: ${(props) => (props.isActive ? 'white' : '#333')};
  cursor: pointer;
`;
