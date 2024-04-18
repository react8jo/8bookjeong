import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookSearchQuery } from '../../hooks/useBookSearch';
// import ReactPaginate from 'react-paginate';
import BookCard from '../../components/FilteredPage/BookCard';
import Loading from '../../components/common/Loading/Loading';
import Nodata from '../../components/common/Nodata/Nodata';
import Banner from '../../components/MainPage/Banner/Banner';
import Footer from '../../components/common/Footer/Footer';

import * as S from './filteredPage.styled';

const FilteredPage = () => {
  const [query] = useState('미래'); //검색어 (문자열) (필수값)
  const [maxResults] = useState('100'); //1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  const { categoryId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const navigate = useNavigate();

  const categories = [
    { id: 0, name: '모든 카테고리' },
    { id: 170, name: '경제경영' },
    { id: 172, name: '재테크/투자' },
    { id: 261, name: '마케팅/세일즈' },
    { id: 1230, name: '가정/요리/뷰티' },
    { id: 2173, name: '경영전략/혁신' },
    { id: 3949, name: '유럽/서구만화' },
    { id: 50999, name: '교육학' },
    { id: 51024, name: '물리학' },
    { id: 51220, name: '정치인' },
    { id: 51300, name: '한국시론' }
  ];

  const { data: filteredBooks, isLoading, isError } = useBookSearchQuery({ query, maxResults, categoryId });

  useEffect(() => {
    if (filteredBooks) {
      console.log('Book Data : ', filteredBooks);
    }
  }, [filteredBooks]);

  const handleCategorySelectSide = (categoryId) => {
    navigate(`/books/${categoryId}`);
  };

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError)
    return (
      <div>
        <Nodata />
      </div>
    );

  return (
    <>
      <Banner />
      <S.Container>
        <S.ContainerForCenter>
          <S.Categories>
            {categories.map((category) => (
              <S.Category key={category.id} onClick={() => handleCategorySelectSide(category.id)}>
                {category.name}
              </S.Category>
            ))}
          </S.Categories>
          <S.BookList>
            <BookCard books={filteredBooks.item || []} />
          </S.BookList>
        </S.ContainerForCenter>
      </S.Container>
      {/* <ReactPaginate
        nextLabel='next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        marginPagesDisplayed={2}
        pageCount={data.total_pages}
        previousLabel='previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
        //현재 페이지
        //하지만 리액트 페이지네이션은 0부터 시작함
        //따라서 -1을 해줘야함
        forcePage={page - 1}
      /> */}
      <Footer />
    </>
  );
};

export default FilteredPage;
