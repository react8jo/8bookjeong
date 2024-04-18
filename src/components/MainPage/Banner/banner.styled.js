import styled from 'styled-components';

export const BannerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;

export const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: darkgray;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const NewButton = styled(Button)`
  &:hover,
  &:active {
    background-color: gray;
  }
`;

export const BestSeller = styled(NewButton)``;
