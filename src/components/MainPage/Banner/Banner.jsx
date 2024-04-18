import React, { useState } from 'react';
import * as S from './banner.styled';

import { useNewSpecialBookListQuery } from '../../../hooks/useBookList';
import { useBookBlogBestQuery } from '../../../hooks/useBookList';

import NewBookCarousel from './NewBookCarousel/NewBookCarousel';
import BlogBestSellerCarousel from './BlogBestSellerCarousel/BlogBestSellerCarousel';

import Loading from '../../common/Loading/Loading';

export default function Banner() {
  const { data: newBookList, isLoading, isError } = useNewSpecialBookListQuery();
  const { data: bookBlogBestList } = useBookBlogBestQuery();
  const [bannerType, setBannerType] = useState('new');

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const showNew = () => {
    setBannerType('new');
  };

  const showBest = () => {
    setBannerType('best');
  };

  return (
    <S.BannerLayout>
      <S.ButtonList>
        <S.NewButton onClick={showNew}>주목할만한 신간</S.NewButton>
        <S.BestSeller onClick={showBest}>블로그 베스트셀러</S.BestSeller>
      </S.ButtonList>
      {bannerType === 'new' && newBookList && <NewBookCarousel items={newBookList.item} />}
      {bannerType === 'best' && bookBlogBestList && <BlogBestSellerCarousel items={bookBlogBestList.item} />}
    </S.BannerLayout>
  );
}
