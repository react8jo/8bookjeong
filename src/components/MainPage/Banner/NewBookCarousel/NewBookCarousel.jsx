import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './newBookCarousel.styled';

export default function NewBookCarousel({ items = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const colors = [
    'rgb(20, 30, 80)',
    'rgb(90, 65, 85)',
    'rgb(90, 110, 120)',
    'rgb(120, 60, 80)',
    'rgb(50, 70, 110)',
    'rgb(110, 50, 45)',
    'rgb(80, 75, 120)',
    'rgb(120, 90, 0)',
    'rgb(40, 70, 30)',
    'rgb(120, 60, 60)'
  ];

  useEffect(() => {
    if (items.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [items]);

  const goToSlide = (slideIndex) => setCurrentSlide(slideIndex);
  const goToPrevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  const goToNextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  const goToBookDetailPage = (isbn) => navigate(`/products/${isbn}`);

  return (
    <S.CarouselContainer>
      <S.CarouselSlider style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {items.map((book, index) => (
          <S.CarouselSlide key={index} onClick={() => goToBookDetailPage(book.isbn)}>
            <S.SlideImage backgroundColor={colors[index % colors.length]}>
              <S.SlideImageContent backgroundImage={book.cover} />
              <S.SlideContent backgroundColor={colors[index % colors.length]}>
                <S.SlideTitle>{book.title}</S.SlideTitle>
                <S.SlideDescription>
                  <S.SlideInfo>
                    <div className='category'>{book.categoryName}</div>
                    <div>{book.author}</div>
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
          <S.IndicatorButton key={index} onClick={() => goToSlide(index)} $={index === currentSlide} />
        ))}
      </S.SlideIndicators>
    </S.CarouselContainer>
  );
}
