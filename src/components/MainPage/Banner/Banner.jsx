import React from 'react';
import * as S from './banner.styled';
import { useEffect } from 'react';
import { useNewSpecialBookListQuery } from '../../../hooks/useBookList';
import { useBookBlogBestQuery } from '../../../hooks/useBookList';
import NewBookCarousel from './NewBookCarousel/NewBookCarousel';
import BlogBestSellerCarousel from './BlogBestSellerCarousel/BlogBestSellerCarousel';

export default function Banner() {
  const { data: newBookList, isLoading, isError } = useNewSpecialBookListQuery();
  const { data: BookBlogBestList } = useBookBlogBestQuery();
  useEffect(() => {
    console.log(BookBlogBestList);
  }, [BookBlogBestList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <S.BannerLayout>
      <S.ButtonList>
        <S.NewButton>주목할만한 신간</S.NewButton>
        <S.BestSeller>블로그 베스트셀러</S.BestSeller>
      </S.ButtonList>
      {newBookList && <NewBookCarousel items={newBookList.item} />}
      {BookBlogBestList && <BlogBestSellerCarousel items={BookBlogBestList.item} />}
    </S.BannerLayout>
  );
}
