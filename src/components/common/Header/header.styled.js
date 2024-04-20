import styled from 'styled-components';
import { primaryColor } from '../../../assets/style/globalStyle.styled';

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    padding-bottom: 1rem;
  }
`;

export const Logo = styled.img`
  width: 8rem;
  height: auto;
  margin: 0 1.5rem 0 1rem;

  @media (max-width: 768px) {
    width: 9rem;
  }
`;

export const SearchContainer = styled.form`
  position: relative;
  display: flex;
  height: 40px;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid primaryColor;
  outline: none;
  border-radius: 24px;
  color: #333;
  width: 350px;
  height: 40px;
  margin-right: 8px;
  padding: 0.3em 3em 0.3em 3em;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.span`
  color: primaryColor;
  position: relative;
  left: 30px;
`;

export const DeleteIcon = styled.span`
  color: primaryColor;
  position: relative;
  right: 35px;
`;
