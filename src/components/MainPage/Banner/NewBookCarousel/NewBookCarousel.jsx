import React, { useState, useEffect } from 'react';
import * as S from './newBookCarousel.styled';

export default function NewBookCarousel({ items }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const colors = [
    'rgb(106, 176, 76)',
    'rgb(38,51,160)',
    'rgb(253, 121, 168)',
    'rgb(112, 141, 228)',
    'rgb(245,99,91)',
    'rgb(162, 155, 254)',
    'rgb(255, 187, 0)',
    'rgb(191,136,175)',
    'rgb(190,220,238)',
    'rgb(255, 118, 117)'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [items]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };
  return (
    <S.CarouselContainer>
      <S.CarouselSlider style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {items.map((book, index) => (
          <S.CarouselSlide key={index}>
            <S.SlideImage backgroundColor={colors[index % colors.length]}>
              <S.SlideImageContent backgroundImage={book.cover} />
              <S.SlideContent backgroundColor={colors[index % colors.length]}>
                <S.SlideTitle>{book.title}</S.SlideTitle>
                <S.SlideDescription>
                  <S.SlideInfo>
                    <div>{book.categoryName}</div>
                    <div> {book.author}</div>
                  </S.SlideInfo>
                </S.SlideDescription>
              </S.SlideContent>
              <S.SlideIndex>
                {currentSlide + 1} / {items.length}
              </S.SlideIndex>
            </S.SlideImage>
          </S.CarouselSlide>
        ))}
      </S.CarouselSlider>
      <S.SlideControls>
        <S.ControlButton onClick={goToPrevSlide}>&lt;</S.ControlButton>
        <S.ControlButton onClick={goToNextSlide}>&gt;</S.ControlButton>
      </S.SlideControls>
      <S.SlideIndicators>
        {items.map((_, index) => (
          <S.IndicatorButton key={index} onClick={() => goToSlide(index)} active={index === currentSlide} />
        ))}
      </S.SlideIndicators>
    </S.CarouselContainer>
  );
}
