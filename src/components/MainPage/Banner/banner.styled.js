import styled from 'styled-components';

export const BannerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NewButton = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #1e7e34;
  }
`;

export const BestSeller = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #b02a37;
  }
`;
