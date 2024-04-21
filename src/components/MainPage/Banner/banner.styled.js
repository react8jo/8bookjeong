import styled from 'styled-components';
import { primaryColor } from '../../../assets/style/globalStyle.styled';
import hexToRgb from '../../../constants/color';

const primaryColorRgb = hexToRgb(primaryColor);

export const BannerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
  z-index: 100;

  @media (max-width: 768px) {
    margin: 0 -15px;
  }
`;

export const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ selected }) => (selected ? 'white' : `rgba(${primaryColorRgb})`)};
  border: none;
  background-color: ${({ selected }) => (selected ? `rgba(${primaryColorRgb})` : 'white')};
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 2px solid ${primaryColor};

  @media (max-width: 768px) {
    margin: 0 5px;
    padding: 10px 10px;
    font-size: 15px;
  }
`;

export const NewButton = styled(Button)``;

export const BestSeller = styled(Button)``;
