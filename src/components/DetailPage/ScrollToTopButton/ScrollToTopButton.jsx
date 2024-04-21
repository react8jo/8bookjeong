import React from 'react';
import * as S from './ScrollToTopButton.styled';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <S.Button onClick={scrollToTop}>Top ⬆</S.Button>;
};

export default ScrollToTopButton;
