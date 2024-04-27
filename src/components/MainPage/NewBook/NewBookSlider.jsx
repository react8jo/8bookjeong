import React from 'react';
import './NewBookSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NewBookCard from './NewBookCard';
import * as S from './NewBookSlider.styled';

const NewBookSlider = ({ title, books, responsive }) => {
  // console.log('books', books);
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
      <S.ControlButtonL onClick={() => onClick()} $justifyContent={'flex-start'}>
        &lt;
      </S.ControlButtonL>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
      <S.ControlButtonR onClick={() => onClick()} $justifyContent={'flex-end'}>
        &gt;
      </S.ControlButtonR>
    );
  };
  return (
    <S.NewBookSlider>
      {/* <section> */}
      {books && (
        <Carousel
          infinite={false}
          // autoPlay={true}
          // autoplaySpeed='5000'
          // centerMode={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          itemClass='movie-slider p-1'
          containerClass='carousel-container'
          responsive={responsive}
          dotListClass='custom-dot-list-style'>
          <S.NewBookCardDiv>
            <NewBookCard key={books[0]?.isbn} book={books[0]} />
            <NewBookCard key={books[1]?.isbn} book={books[1]} />
          </S.NewBookCardDiv>
          <S.NewBookCardDiv>
            <NewBookCard key={books[2]?.isbn} book={books[2]} />
            <NewBookCard key={books[3]?.isbn} book={books[3]} />
          </S.NewBookCardDiv>
          <S.NewBookCardDiv>
            <NewBookCard key={books[4]?.isbn} book={books[4]} />
            <NewBookCard key={books[5]?.isbn} book={books[5]} />
          </S.NewBookCardDiv>
          <S.NewBookCardDiv>
            <NewBookCard key={books[6]?.isbn} book={books[6]} />
            <NewBookCard key={books[7]?.isbn} book={books[7]} />
          </S.NewBookCardDiv>
          <S.NewBookCardDiv>
            <NewBookCard key={books[8]?.isbn} book={books[8]} />
            <NewBookCard key={books[9]?.isbn} book={books[9]} />
          </S.NewBookCardDiv>
        </Carousel>
      )}
      {/* </section> */}
    </S.NewBookSlider>
  );
};

export default NewBookSlider;
