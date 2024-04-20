import { createGlobalStyle, styled } from 'styled-components';
import reset from 'styled-reset';

export const primaryColor = '#4b3620';
export const secondaryColor = '#ff7737';
export const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export const Buttons = styled.button`
  background-color: ${primaryColor};
  padding: 10px 15px;
  border: 0;
  border-radius: 4px;
  color: #fff;

  &.sm {
    padding: 5px 7px;
    font-size: 13px;
  }
  &.lg {
    padding: 15px 20px;
    font-size: 22px;
  }
  &.secondaryColor {
    background-color: ${secondaryColor};

    &:hover {
      background-color: #ef550c;
    }
  }

  &:hover {
    background-color: #846342;
  }
`;

export const ButtonArea = styled.div`
  margin-top: 35px;
  text-align: center;

  &.left {
    text-align: left;
  }
  &.right {
    text-align: right;
  }

  button {
    margin-right: 7px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ContentTitle = styled.h2`
  margin: 45px 0 35px;
  font-size: 30px;
  font-weight: bold;

  &.center {
    text-align: center;
  }

  &:first-child {
    margin-top: 0;
  }
  &.primaryColor {
    color: ${primaryColor};
  }
  &.secondaryColor {
    color: ${secondaryColor};
  }
`;

export const SectionTitle = styled.h3`
  margin: 40px 0 20px;
  font-size: 25px;
  font-weight: bold;

  &.line {
    margin-bottom: 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  &.center {
    text-align: center;
  }
  &.primaryColor {
    color: ${primaryColor};
  }
  &.secondaryColor {
    color: ${secondaryColor};
  }
`;

export const SubTitle = styled.h4`
  margin: 30px 0 10px;
  font-size: 18px;
  font-weight: bold;

  &.line {
    margin-bottom: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  &.center {
    text-align: center;
  }
  &.primaryColor {
    color: ${primaryColor};
  }
  &.secondaryColor {
    color: ${secondaryColor};
  }
`;

export const ContentInner = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;

  &.layoutFlex {
    display: flex;
  }

  @media (min-width: 769px) and (max-width: 1279px) {
    padding: 0 20px;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 15px;
  }
`;
