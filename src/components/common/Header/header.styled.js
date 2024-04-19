import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const Logo = styled.img`
  width: 8rem;
  height: 2rem;
  margin: 0 1.5rem 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const SearchContainer = styled.form`
  position: relative;
  display: flex;
  height: 30px;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding-left: 1rem;
  border-radius: 5rem;
  background-color: #ffffff;
  border: solid 3px rgb(137, 146, 39);
  color: #333;
  width: 270px;
  height: 30px;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
