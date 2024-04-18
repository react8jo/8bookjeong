import React from 'react';
import './BookCard.style.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
            <div>{book.searchCategoryName}</div>
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
