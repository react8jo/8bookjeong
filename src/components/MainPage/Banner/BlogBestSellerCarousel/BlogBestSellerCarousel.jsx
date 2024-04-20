import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './blogBestSellerCarousel.styled';

export default function BlogBestSellerCarousel({ items }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const colors = [
    'rgb(255, 255, 204)',
    'rgb(229, 255, 204)',
    'rgb(187, 221, 255)',
    'rgb(255, 229, 204)',
    'rgb(213, 255, 170)',
    'rgb(187, 255, 221)',
    'rgb(255, 187, 221)',
    'rgb(255, 204, 204)',
    'rgb(221, 255, 187)',
    'rgb(204, 255, 229)',
    'rgb(255, 187, 187)',
    'rgb(255, 221, 187)',
    'rgb(221, 187, 255)',
    'rgb(255, 204, 229)',
    'rgb(255, 213, 170)',
    'rgb(255, 255, 170)',
    'rgb(204, 229, 255)',
    'rgb(255, 170, 170)',
    'rgb(255, 255, 187)',
    'rgb(229, 204, 255)'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [items]);

  if (!items) {
    return 'no';
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };

  const goToBookDetailPage = (isbn) => {
    navigate(`/products/${isbn}`);
  };

  const slidesPerView = window.innerWidth >= 768 ? 2 : 1;

  return (
    <S.CarouselContainer>
      <S.CarouselSlider style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}>
        {items.map((book, index) => (
          <S.CarouselSlide
            key={index}
            $backgroundColor={colors[index % colors.length]}
            onClick={() => goToBookDetailPage(book.isbn)}
            $slidesPerView={slidesPerView}>
            <S.SlideImage>
              <S.SlideImageContent $backgroundImage={book.cover} />
            </S.SlideImage>
            <S.SlideContent>
              <S.SlideTitle>{book.title}</S.SlideTitle>
              <S.SlideDescription>
                <S.SlideInfo>
                  <div>{book.author}</div>
                  <div>{book.publisher}</div>
                </S.SlideInfo>
              </S.SlideDescription>
            </S.SlideContent>
          </S.CarouselSlide>
        ))}
      </S.CarouselSlider>
      <S.SlideIndex>
        {Math.floor(currentSlide / slidesPerView) + 1} / {Math.ceil(items.length / slidesPerView)}
      </S.SlideIndex>
      <S.SlideControls>
        <S.ControlButton onClick={goToPrevSlide}>&lt;</S.ControlButton>
        <S.ControlButton onClick={goToNextSlide}>&gt;</S.ControlButton>
      </S.SlideControls>
      <S.SlideIndicators>
        {Array.from({ length: Math.ceil(items.length / slidesPerView) }).map((_, index) => (
          <S.IndicatorButton
            key={index}
            onClick={() => goToSlide(index * slidesPerView)}
            $active={index === Math.floor(currentSlide / slidesPerView)}
          />
        ))}
      </S.SlideIndicators>
    </S.CarouselContainer>
  );
}
