import React from 'react';
import './BookCard.style.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const BookCard = ({ book }) => {
  const [imgStyle, setImgStyle] = useState({});

  const img = new Image();
  img.src = book.cover;
  img.onload = () => {
    const divAspect = 200 / 350;
    const imgAspect = img.height / img.width;

    if (imgAspect <= divAspect) {
      const imgWidthActual = (window.innerHeight * img.width) / img.height;
      const imgWidthToBe = (window.innerHeight * 200) / 350;
      const marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2);
      setImgStyle({
        width: 'auto',
        height: '100%',
        marginLeft: `${marginLeft}px`
      });
    } else {
      setImgStyle({
        width: '100%',
        height: 'auto',
        marginLeft: '0'
      });
    }
  };
  return (
    <Container>
      <div className='bookCard'>
        <div style={{ width: '300px', height: '400px', overflow: 'hidden' }}>
          <img src={book.cover} alt='Image' style={imgStyle} />
        </div>
        <div className='bootInfo'>
          <div className='textEllipsis'>{book.title}</div>
          <div className='bookDetailInfo'>
            <div>{book.author}</div>
            <div>
              {book.pubDate} / {book.publisher}
            </div>
          </div>
          <div className='bookSubInfo'>
            <div>
              <span className='bookSalePercent'>10%</span>
              <span className='bookSale'>{Number(book.priceStandard * 0.9).toLocaleString()}원</span>
              <span className='bookPrice'>{Number(book.priceStandard).toLocaleString()}원</span>
            </div>
            <div>
              <FontAwesomeIcon className='starIcon' icon={faStar} /> {book.customerReviewRank}.0
            </div>
          </div>
          <div className='bookAdd'>
            <button>찜하기</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookCard;
