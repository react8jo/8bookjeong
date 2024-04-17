import React from 'react';
import './BestsellerBookSlider.style.css';
//import Container from '@mui/material/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BestsellerBookCard from './BestsellerBookCard';

const BestsellerBookSlider = ({ title, books, responsive, isRank }) => {
  return (
    <section className='BestsellerBookSlider'>
      {/* <Container maxWidth='xl'>
        <h3>{title}</h3>
      </Container> */}
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        // autoPlay={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
        dotListClass='custom-dot-list-style'>
        {books?.map((book, index) => (
          <BestsellerBookCard key={book.title} book={book} rank={isRank && index + 1} />
        ))}
      </Carousel>
    </section>
  );
};

export default BestsellerBookSlider;
