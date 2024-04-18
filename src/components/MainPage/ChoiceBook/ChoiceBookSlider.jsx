import React from 'react';
import './ChoiceBookSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChoiceBookCard from './ChoiceBookCard';
import { Button } from 'react-bootstrap';

const ChoiceBookSlider = ({ title, books, responsive }) => {
  console.log('books', books);

  return (
    <section className='ChoiceBookSlider'>
      {/* <Container maxWidth='xl'>
        <h3>{title}</h3>
      </Container> */}
      {/* <h3>{title}</h3> */}

      {/* <h3>추천</h3>
      <Button variant='success'>종합</Button>
      <Button variant='success'>소설/시</Button>
      <Button variant='success'>경제/경영</Button>
      <Button variant='success'>자기계발</Button>
      <Button variant='success'>인문/교양</Button>
      <Button variant='success'>여행</Button>
      <Button variant='success'>매거진</Button>
      <Button variant='success'>예술/문화</Button>
      <Button variant='success'>만화</Button> */}

      {books && (
        <Carousel
          infinite={false}
          // autoPlay={true}
          // autoplaySpeed='5000'
          // vertical={true} // 세로 캐러셀
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
    </section>
  );
};

export default ChoiceBookSlider;
