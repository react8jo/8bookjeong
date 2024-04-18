import styled from 'styled-components';

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  padding: 0 100px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

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
  height: 2rem;
  margin-right: 1.5rem;

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
  border-radius: 0.25rem;
  background-color: #f2f2f2;
  color: #333;
  width: 210px;
  height: 30px;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
