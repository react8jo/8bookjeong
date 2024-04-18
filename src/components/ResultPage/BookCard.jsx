import React from 'react';
import './BookCard.style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const BookCard = ({ book }) => {
  return (
    <Container>
      <div className='bookCard'>
        <div className='bookImg'>
          <img
            alt='bookImg'
            src={
              book.cover === 'https://image.aladin.co.kr/img/noimg_b.gif'
                ? 'https://pho24smyrna.net/wp-content/plugins/clover-online-orders/public/img/noImg.png'
                : book.cover
            }
            style={{ height: '100%' }}
          />
        </div>
        <div className='bootInfo'>
          <div className='textEllipsis'>{book.title}</div>
          <div className='bookDetailInfo'>
            <div>{book.author}</div>
            <div>카테고리</div>
            <div>
              {book.pubDate} / {book.publisher}
            </div>
          </div>
          <div>
            <div className='bookDetailInfo'>가격 {book.priceStandard}</div>
            <div>
              {Array.from({ length: 5 }, (_, index) => {
                if (index < Math.floor(book.customerReviewRank / 2)) {
                  return <FontAwesomeIcon className='starIcon' key={index} icon={solidStar} />;
                } else if (index === Math.floor(book.customerReviewRank / 2) && book.customerReviewRank % 2 === 1) {
                  return <FontAwesomeIcon className='starIcon' key={index} icon={faStarHalfStroke} />;
                } else {
                  return <FontAwesomeIcon className='starIcon' key={index} icon={faStar} />;
                }
              })}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};

export default BookCard;
