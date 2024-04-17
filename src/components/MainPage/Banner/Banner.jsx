import React from 'react';
import * as S from './banner.styled';
import { useEffect } from 'react';
import { useNewBookListQuery } from '../../../hooks/useBookList';
import NewBookCarousel from './NewBookCarousel/NewBookCarousel';

export default function Banner() {
  const { data: newBookList, isLoading, isError } = useNewBookListQuery();

  useEffect(() => {
    if (newBookList) {
      console.log(newBookList.item);
    }
  }, [newBookList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return <S.BannerLayout>{newBookList && <NewBookCarousel items={newBookList.item} />}</S.BannerLayout>;
}
