import React, { useEffect, useState } from 'react';
// import './BestsellerBookCard.style.css';
import { useNavigate } from 'react-router-dom';
import * as S from './bestsellerBookCard.styled';

const BestsellerBookCard = ({ book, rank, isUpComing }) => {
  // useEffect(() => {
  //   console.log('Book props in BestsellerBookCard:', book);
  // }, [book]);
  const navigate = useNavigate();

  const goToBookDetailPage = (isbn) => {
    console.log(book); // 콘솔에 도서 정보 출력
    navigate(`/products/${isbn}`);
  };

  function getSubstringBeforeWord(inputString, word) {
    let index = inputString.indexOf(word);
    if (index !== -1) {
      return inputString.substring(0, index);
    } else {
      // 단어를 찾지 못한 경우 전체 문자열 반환
      return inputString;
    }
  }

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(getSubstringBeforeWord(book.title, ' -'));
      setAuthor(getSubstringBeforeWord(book.author, '(지은이)'));
    }
  }, [book]);

  return (
    <S.BestsellerBookCard>
      <S.BestsellerBookCardimg $backgroundImage={book.cover} onClick={() => goToBookDetailPage(book.isbn)}>
        {rank && <S.Ranking>{rank}</S.Ranking>}
      </S.BestsellerBookCardimg>
      <S.BookTitle>{title}</S.BookTitle>
      <S.BookAuthor>{author}</S.BookAuthor>
    </S.BestsellerBookCard>
  );
};

export default BestsellerBookCard;
