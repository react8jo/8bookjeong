import React, { useState, useEffect } from 'react';
import * as S from './blogBestSellerCarousel.styled';

export default function BlogBestSellerCarousel({ items }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 2) % items.length);
    }, 800000);
    return () => {
      clearInterval(interval);
    };
  }, [items]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 2 + items.length) % items.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 2) % items.length);
  };

  return (
    <S.CarouselContainer>
      <S.CarouselSlider style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
        {items.map((book, index) => (
          <S.CarouselSlide key={index}>
            <S.SlideImage>
              <S.SlideImageContent backgroundImage={book.cover} />
            </S.SlideImage>
            <S.SlideContent>
              <S.SlideTitle>{book.title}</S.SlideTitle>
              <S.SlideDescription>
                <S.SlideInfo>
                  <div>{book.author}</div>
                  <div>{book.pubDate}</div>
                </S.SlideInfo>
              </S.SlideDescription>
            </S.SlideContent>
          </S.CarouselSlide>
        ))}
      </S.CarouselSlider>
      <S.SlideIndex>
        {Math.floor(currentSlide / 2) + 1} / {Math.ceil(items.length / 2)}
      </S.SlideIndex>
      <S.SlideControls>
        <S.ControlButton onClick={goToPrevSlide}>&lt;</S.ControlButton>
        <S.ControlButton onClick={goToNextSlide}>&gt;</S.ControlButton>
      </S.SlideControls>
      <S.SlideIndicators>
        {Array.from({ length: Math.ceil(items.length / 2) }).map((_, index) => (
          <S.IndicatorButton
            key={index}
            onClick={() => goToSlide(index * 2)}
            active={index === Math.floor(currentSlide / 2)}
          />
        ))}
      </S.SlideIndicators>
    </S.CarouselContainer>
  );
}
