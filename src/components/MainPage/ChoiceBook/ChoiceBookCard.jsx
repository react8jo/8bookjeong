import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ChoiceBookCard.styled';

// const ChoiceBookCard = ({ book, rank, isUpComing }) => {
const ChoiceBookCard = ({ book }) => {
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
      setTitle(getSubstringBeforeWord(book?.title, ' -'));
      setAuthor(getSubstringBeforeWord(book?.author, '(지은이)'));
    }
  }, [book]);

  return (
    <S.ChoiceBookCard>
      <S.ChoiceBookCardimg
        $backgroundImage={book?.cover}
        onClick={() => goToBookDetailPage(book.isbn)}></S.ChoiceBookCardimg>
      <div>
        <S.BookTitle>{title}</S.BookTitle>
        <S.BookAuthor>{title}</S.BookAuthor>
      </div>
    </S.ChoiceBookCard>
  );
};

export default ChoiceBookCard;
