import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../../assets/style/globalStyle.styled';

export const Navbar = styled.nav`
  position: relative;
  box-sizing: border-box;

  .layoutFlex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 75px 20px 0;
  }

  &.primaryColor {
    background-color: rgba(75, 54, 32, 0.12);
  }

  @media (max-width: 1279px) {
    .layoutFlex {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100vw;
    background-color: inherit;

    .layoutFlex {
      flex-direction: column;
      padding: 15px 15px 10px;
      background-color: rgba(255, 255, 255, 0.9);
    }

    &.primaryColor {
      background-color: inherit;

      .layoutFlex {
        background-color: rgba(217, 212, 208, 0.9);
      }
    }
  }
`;

export const LogoArea = styled.h1`
  margin-left: -20px;

  a {
    display: inline-block;

    .hidden {
      visibility: hidden;
      position: absolute;
      left: -999px;
      height: 0;
      width: 0;
    }
  }

  @media (max-width: 1279px) {
    margin-left: 0;
  }
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;

  @media (max-width: 768px) {
    width: 9rem;
  }
`;

export const SearchContainer = styled.form`
  position: relative;
  height: 40px;

  @media (max-width: 768px) {
    width: 100%;
    height: 0;
    transition: 0.5s;
    opacity: 0;
    font-size: 0;

    input {
      height: 0;
      padding: 0;
      border-color: transparent;
    }
    svg {
      opacity: 0;
    }

    &.active {
      height: 40px;
      margin-top: 1rem;
      opacity: 1;
      font-size: 16px;

      input {
        height: 100%;
        padding: 4px 40px 4px 45px;
        border-color: inherit;
      }

      svg {
        opacity: 1;
      }
    }
  }
`;

export const SearchInput = styled.input`
  border: 1px solid ${primaryColor};
  outline: none;
  border-radius: 24px;
  color: #333;
  width: 450px;
  min-width: 320px;
  height: 100%;
  padding: 4px 40px 4px 45px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.span`
  color: ${primaryColor};
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-size: 16px;
`;

export const DeleteIcon = styled.span`
  color: ${primaryColor};
  position: absolute;
  top: 50%;
  right: 10px;
  padding: 10px 7px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 16px;
`;

export const SearchToggle = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    left: 15px;
    top: 29px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border-color: transparent;
    background-color: ${primaryColor};
    color: #fff;
    font-size: 20px;
  }
`;
