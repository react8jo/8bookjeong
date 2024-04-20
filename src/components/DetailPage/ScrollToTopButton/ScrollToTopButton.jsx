import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 30px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  color: #4b3620; // 글자색을 배경색과 동일하게 설정
  background-color: white; // 배경을 흰색으로 설정
  border: 2px solid #4b3620; // 테두리 색상을 배경색과 동일하게 설정
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition:
    background-color 0.3s,
    color 0.3s; // 부드러운 색상 전환 효과 추가

  &:hover {
    background-color: #4b3620; // 호버 시 배경색 유지
    color: white; // 호버 시 글자색을 흰색으로 변경
  }

  @media (min-width: 800px) {
    right: 70px; // 화면 너비가 800픽셀 이상일 때 오른쪽 여백 조정
    bottom: 70px;
  }
`;

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <Button onClick={scrollToTop}>Top ⬆</Button>;
};

export default ScrollToTopButton;
