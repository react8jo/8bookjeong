import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChoiceBookCard from './ChoiceBookCard';
import * as S from './ChoiceBookSlider.styled';

const ChoiceBookSlider = ({ title, books, responsive }) => {
  // console.log('books', books);

  return (
    <S.ChoiceBookSlider>
      {books && (
        <Carousel
          infinite={false}
          // autoPlay={true}
          // autoplaySpeed='5000'
          // centerMode={true}
          itemClass='movie-slider p-1'
          containerClass='carousel-container'
          responsive={responsive}
          dotListClass='custom-dot-list-style'>
          <div>
            <ChoiceBookCard key={books[0]?.isbn} book={books[0]} />
            <ChoiceBookCard key={books[1]?.isbn} book={books[1]} />
            <ChoiceBookCard key={books[2]?.isbn} book={books[2]} />
          </div>
          <div>
            <ChoiceBookCard key={books[3]?.isbn} book={books[3]} />
            <ChoiceBookCard key={books[4]?.isbn} book={books[4]} />
            <ChoiceBookCard key={books[5]?.isbn} book={books[5]} />
          </div>
          <div>
            <ChoiceBookCard key={books[6]?.isbn} book={books[6]} />
            <ChoiceBookCard key={books[7]?.isbn} book={books[7]} />
            <ChoiceBookCard key={books[8]?.isbn} book={books[8]} />
          </div>
          <div>
            <ChoiceBookCard key={books[9]?.isbn} book={books[9]} />
            <ChoiceBookCard key={books[10]?.isbn} book={books[10]} />
            <ChoiceBookCard key={books[11]?.isbn} book={books[11]} />
          </div>
          <div>
            <ChoiceBookCard key={books[12]?.isbn} book={books[12]} />
            <ChoiceBookCard key={books[13]?.isbn} book={books[13]} />
            <ChoiceBookCard key={books[14]?.isbn} book={books[14]} />
          </div>
        </Carousel>
      )}
    </S.ChoiceBookSlider>
  );
};

export default ChoiceBookSlider;
