import styled from 'styled-components';
import { primaryColor } from '../../../assets/style/globalStyle.styled';
import hexToRgb from '../../../constants/color';

const primaryColorRgb = hexToRgb(primaryColor);

export const BannerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1rem;
  background-color: #fff;
`;

export const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

// export const Button = styled.button`
//   padding: 10px 20px;
//   margin: 0 10px;
//   font-size: 16px;
//   font-weight: bold;
//   color: ${primaryColor};
//   border: 1px solid ${primaryColor};
//   border-bottom: ${({ selected }) => (selected ? `2px solid ${primaryColor}` : `1px solid ${primaryColor}`)};
//   background-color: ${({ selected }) => (selected ? `rgba(${primaryColorRgb}, 0.1)` : 'white')};
//   border-radius: 0;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// `;

export const NewButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${primaryColor};
  border: 1px solid ${primaryColor};
  border-bottom: ${({ selected }) => (selected ? `2px solid ${primaryColor}` : `1px solid ${primaryColor}`)};
  background-color: ${({ selected }) => (selected ? `rgba(${primaryColorRgb}, 0.1)` : 'white')};
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: fit-content;
  z-index: 10;
`;

export const BestSeller = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${primaryColor};
  border: 1px solid ${primaryColor};
  border-bottom: ${({ selected }) => (selected ? `2px solid ${primaryColor}` : `1px solid ${primaryColor}`)};
  background-color: ${({ selected }) => (selected ? `rgba(${primaryColorRgb}, 0.1)` : 'white')};
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;
`;
