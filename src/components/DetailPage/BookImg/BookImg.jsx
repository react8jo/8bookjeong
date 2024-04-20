import React from 'react';
import * as S from './bookImg.styled';

function BookImg({ cover, title }) {
  return (
    <S.BookImageContainer>
      <S.BookImage src={cover} alt={`책의 표지: ${title}`} />
      <S.PreviewText>📖 미리보기</S.PreviewText>
    </S.BookImageContainer>
  );
}

export default BookImg;
