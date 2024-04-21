import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  padding: 20px 0 45px;
  min-height: calc(100vh - 278px);

  @media (max-width: 768px) {
    width: 100%;
    padding: 120px 0 45px;
  }
`;
