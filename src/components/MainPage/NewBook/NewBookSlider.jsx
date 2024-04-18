import React from 'react';
import './NewBookSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NewBookCard from './NewBookCard';

const NewBookSlider = ({ title, books, responsive }) => {
  console.log('books', books);

  return (
    <section className='NewBookSlider'>
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
            <NewBookCard key={books[0]?.isbn} book={books[0]} />
            <NewBookCard key={books[1]?.isbn} book={books[1]} />
          </div>
          <div>
            <NewBookCard key={books[2]?.isbn} book={books[2]} />
            <NewBookCard key={books[3]?.isbn} book={books[3]} />
          </div>
          <div>
            <NewBookCard key={books[4]?.isbn} book={books[4]} />
            <NewBookCard key={books[5]?.isbn} book={books[5]} />
          </div>
          <div>
            <NewBookCard key={books[6]?.isbn} book={books[6]} />
            <NewBookCard key={books[7]?.isbn} book={books[7]} />
          </div>
          <div>
            <NewBookCard key={books[8]?.isbn} book={books[8]} />
            <NewBookCard key={books[9]?.isbn} book={books[9]} />
          </div>
        </Carousel>
      )}
    </section>
  );
};

export default NewBookSlider;
