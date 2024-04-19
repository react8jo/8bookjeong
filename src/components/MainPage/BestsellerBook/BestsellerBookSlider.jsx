import React from 'react';
// import './BestsellerBookSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BestsellerBookCard from './BestsellerBookCard';
import * as S from './bestsellerBookSlider.styled';

const BestsellerBookSlider = ({ title, books, responsive, isRank }) => {
  return (
    <S.BestsellerBookSlider>
      <Carousel
        infinite={true}
        // autoPlay={true}
        // autoplaySpeed='5000'
        // vertical={true} // 세로 캐러셀
        // arrows={false}
        // renderArrowsWhenDisabled={false}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
        dotListClass='custom-dot-list-style'>
        {books?.map((book, index) => (
          <BestsellerBookCard key={book.isbn} book={book} rank={isRank && index + 1} />
        ))}
      </Carousel>
    </S.BestsellerBookSlider>
  );
};

export default BestsellerBookSlider;
