import styled from 'styled-components';

// 스타일드 컴포넌트
export const HamburgerButton = styled.button`
  background: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  font-size: 30px;
  position: fixed;
  top: 20px;
  right: 40px;
  z-index: 100;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, auto);
  padding: 15px;
  background: white;
  border: 1px solid #ccc;
  position: fixed;
  top: 70px;
  right: 40px;
  margin: auto;
  width: 100%;
  max-width: 960px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 101;
`;

export const CategoryItem = styled.div`
  padding: 5px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  color: #595959;

  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;
