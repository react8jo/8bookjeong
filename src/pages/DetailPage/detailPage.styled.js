import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const BookImage = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
`;

export const BookInfo = styled.div`
  flex: 1;
`;

export const BookMeta = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Line = styled.hr`
  width: 100%;
  margin: 20px 0;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 5px;
`;

export const Content = styled.p`
  margin: 5px 0 20px 0;
`;
