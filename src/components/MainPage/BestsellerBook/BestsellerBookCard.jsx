import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './bestsellerBookCard.styled';

const BestsellerBookCard = ({ book, rank, isUpComing }) => {
  const navigate = useNavigate();

  const goToBookDetailPage = (isbn) => {
    console.log(book); // 콘솔에 도서 정보 출력
    navigate(`/products/${isbn}`);
  };

  const getSubstringBeforeWord = (inputString, word) => {
    const index = inputString.indexOf(word);
    return index !== -1 ? inputString.substring(0, index) : inputString;
  };

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
