import React from 'react';
import * as S from './banner.styled';
import { useEffect } from 'react';
import { useNewBookListQuery } from '../../../hooks/useBookList';

export default function Banner() {
  const { data: newBookList, isLoading, isError } = useNewBookListQuery();

  useEffect(() => {
    if (newBookList) {
      console.log(newBookList);
    }
  }, [newBookList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <S.BannerLayout>
      <div>Data loaded successfully!</div>
      <S.Title>배너제목</S.Title>
      <S.Content>내용입니다</S.Content>
    </S.BannerLayout>
  );
}
