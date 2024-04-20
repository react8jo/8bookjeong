import styled from 'styled-components';
import { primaryColor } from '../../../assets/style/globalStyle.styled';
// 스타일드 컴포넌트
export const HamburgerButton = styled.button`
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 50px;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 1px 4px;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  top: 30px;
  right: 50px;
  z-index: 100;
  color: primaryColor;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, auto);
  padding: 15px;
  background: white;
  border: 1px solid #ccc;
  position: absolute;
  top: 90px;
  right: 50px;
  margin: auto;
  width: 100%;
  max-width: 960px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 101;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    width: 70%;
    font-size: 12px;
  }
`;

export const CategoryItem = styled.div`
  padding: 8px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  color: #595959;

  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
