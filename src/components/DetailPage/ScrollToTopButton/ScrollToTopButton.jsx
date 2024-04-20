import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 30px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  color: #4b3620;
  background-color: white;
  border: 2px solid #4b3620;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #4b3620;
    color: white;
  }

  @media (min-width: 800px) {
    right: 70px;
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
