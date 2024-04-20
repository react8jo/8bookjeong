import React, { useState } from 'react';
import * as S from './banner.styled';
// import { useNewSpecialBookListQuery } from '../../../hooks/useBookList';
// import { useBookBlogBestQuery } from '../../../hooks/useBookList';
import { useNewSpecialBookListQuery, useBookBlogBestQuery } from '../../../hooks/useBookList';

import NewBookCarousel from './NewBookCarousel/NewBookCarousel';
import BlogBestSellerCarousel from './BlogBestSellerCarousel/BlogBestSellerCarousel';

import Loading from '../../common/Loading/Loading';

export default function Banner() {
  // const { data: newBookList, isLoading, isError } = useNewSpecialBookListQuery();
  // const { data: bookBlogBestList } = useBookBlogBestQuery();
  //api호출수정
  const [startNew] = useState('1');
  const [maxResultsNew] = useState('10');
  const [categoryIdNew] = useState('0');
  const [querytypeNew] = useState('ItemNewSpecial');
  const {
    data: newBookList,
    isLoading,
    isError,
    error
  } = useNewSpecialBookListQuery({ querytypeNew, startNew, maxResultsNew, categoryIdNew });

  const [startBlog] = useState('1');
  const [maxResultsBlog] = useState('20');
  const [categoryIdBlog] = useState('0');
  const [querytypeBlog] = useState('BlogBest');
  const { data: bookBlogBestList } = useBookBlogBestQuery({ querytypeBlog, startBlog, maxResultsBlog, categoryIdBlog });

  const [bannerType, setBannerType] = useState('best');

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
        <S.BestSeller onClick={showBest}>블로그 베스트셀러</S.BestSeller>
        <S.NewButton onClick={showNew}>주목할만한 신간</S.NewButton>
      </S.ButtonList>
      {bannerType === 'best' && bookBlogBestList && <BlogBestSellerCarousel items={bookBlogBestList.item} />}
      {bannerType === 'new' && newBookList && <NewBookCarousel items={newBookList.item} />}
    </S.BannerLayout>
  );
}
