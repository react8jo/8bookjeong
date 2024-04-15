import React from 'react';
import * as S from './banner.styled';

export default function Banner() {
  return (
    <S.BannerLayout>
      <S.Title>배너제목</S.Title>
      <S.Content>내용입니다</S.Content>
    </S.BannerLayout>
  );
}
