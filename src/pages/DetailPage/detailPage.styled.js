import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #003366;
`;

export const BookImage = styled.img`
  width: 300px;
  height: auto;
  margin-right: 20px;
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  color: #003366;
`;

export const BookMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #003366;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #003366;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #002244;
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 20px 0;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 5px;
  color: #003366;
  font-size: 24px;
`;

export const Content = styled.p`
  margin: 5px 0 20px 0;
  color: #003366;
  font-size: 18px;
`;
