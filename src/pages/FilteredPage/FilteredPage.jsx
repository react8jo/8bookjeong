import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookSearchQuery } from '../../hooks/useBookSearch';
import BookCard from '../../components/FilteredPage/BookCard';
import Loading from '../../components/common/Loading/Loading';
import Nodata from '../../components/common/Nodata/Nodata';
import ReactPaginate from 'react-paginate';
import AdBanner from '../../components/MainPage/AdBanner/AdBanner';

import * as S from './filteredPage.styled';
import './Pagination.css';

const FilteredPage = () => {
  const [query] = useState('이'); //검색어 (문자열) (필수값)
  const [maxResults] = useState(10); //1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  const [start, setStart] = useState(1);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const categories = [
    { id: 0, name: '종합' },
    { id: 1, name: '소설/시' },
    { id: 170, name: '경제경영' },
    { id: 336, name: '자기계발' },
    { id: 1196, name: '여행' },
    { id: 51300, name: '만화' },

    { id: 88864, name: '예술/문화' },
    { id: 89482, name: '한국 과학소설' },
    { id: 2172, name: '기업 경영' },
    { id: 70229, name: '기획' },
    { id: 110284, name: '북유럽여행' },
    { id: 4668, name: '교양만화' },

    { id: 90456, name: '인테리어' },
    { id: 89481, name: '외국 과학소설' },
    { id: 172, name: '재테크/투자' },
    { id: 336, name: '성공' },
    { id: 63688, name: '스페인여행' },
    { id: 3747, name: '가족만화' },

    { id: 4673, name: '인문/교양' },
    { id: 50930, name: '과학소설(SF)' },
    { id: 8587, name: '화폐/금융/재정' },
    { id: 70212, name: '리더쉽' },
    { id: 63849, name: '독일여행' },
    { id: 4671, name: '실용만화' },

    { id: 2951, name: '인간관계' },
    { id: 50922, name: '독일소설' },
    { id: 261, name: '마케팅/세일즈' },
    { id: 70221, name: '시간관리' },
    { id: 50840, name: '세계일주여행' },
    { id: 4670, name: '역사만화' }
  ];

  const {
    data: filteredBooks,
    isLoading,
    isError
  } = useBookSearchQuery({
    query,
    maxResults,
    categoryId,
    start // 페이지 상태 추가
  });
  console.log(filteredBooks);

  // 전체 페이지 수 계산
  const totalPages = filteredBooks ? Math.ceil(filteredBooks.totalResults / filteredBooks.itemsPerPage) : 0;

  const handleCategorySelectSide = (categoryId) => {
    navigate(`/books/${categoryId}`);
  };

  // 다음 페이지 이동
  const handlePageClick = (page) => {
    setStart(page.selected + 1);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Nodata />;

  return (
    <>
      <AdBanner />
      <S.Container>
        <S.ContainerForCenter>
          <S.Categories>
            {categories.map((category, index) => (
              <S.Category key={index} onClick={() => handleCategorySelectSide(category.id)}>
                {category.name}
              </S.Category>
            ))}
          </S.Categories>
          <S.BookList>
            <BookCard books={filteredBooks.item || []} />
          </S.BookList>
        </S.ContainerForCenter>
      </S.Container>
      <ReactPaginate
        previousLabel='<'
        nextLabel='>'
        breakLabel='...'
        pageCount={totalPages}
        onPageChange={handlePageClick}
        forcePage={start - 1}
        containerClassName='filter-pagination'
        // containerClassName='pagination'
        pageClassName='filter-page-item'
        pageLinkClassName='filter-page-link'
        activeClassName='filter-active'
        previousClassName='filter-previous filter-page-item'
        nextClassName='filter-next filter-page-item'
        disabledClassName='filter-disabled'
        breakLinkClassName='filter-page-link'
        previousLinkClassName='filter-page-link'
        nextLinkClassName='filter-page-link'
      />
    </>
  );
};

export default FilteredPage;
