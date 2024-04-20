import styled from 'styled-components';
import { primaryColor } from '../../../assets/style/globalStyle.styled';

export const Title = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 0rem;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const TitleName = styled.h3`
  margin-left: 1.5rem;
`;

export const ButtonList = styled.div`
  display: flex;
  justify-content: left;
  // margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${primaryColor};
  border: none;
  background-color: white;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const CategoryButton = styled(Button)`
  &:hover {
    color: white;
    background-color: ${primaryColor};
  }
`;
