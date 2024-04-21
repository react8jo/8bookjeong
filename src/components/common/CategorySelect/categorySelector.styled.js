import styled from 'styled-components';
import { primaryColor } from '../../../assets/style/globalStyle.styled';
// 스타일드 컴포넌트
export const HamburgerButton = styled.button`
  background: none;
  border: 1px solid ${primaryColor};
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 100;
  color: ${primaryColor};
  transform: translateY(-50%);

  @media (max-width: 1279px) {
    right: 15px;
  }

  @media (max-width: 768px) {
    top: 34px;
    transform: inherit;
    width: 35px;
    height: 35px;
  }
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
  right: 100px;
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
    width: calc(100% - 30px);
    right: inherit;
    background-color: #4b3620;
    font-size: 12px;
    border-radius: 4px;
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
    position: relative;
    color: #fff;
    font-size: 12px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    padding: 8px;
    word-break: keep-all;
    line-height: 1.2rem;

    &:nth-child(4n + 1) {
      padding-left: 0;
      &::before {
        display: none;
      }
    }

    &:nth-last-child(1),
    &:nth-last-child(2) {
      border-color: transparent;
    }
    // &::before {
    //   content: '';
    //   position: absolute;
    //   left: 0;
    //   top: 15px;
    //   width: 1px;
    //   height: 7px;
    //   background-color: rgba(255, 255, 255, 0.4);
    // }
  }
`;
