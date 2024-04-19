import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookSearchQuery } from '../../hooks/useBookSearch';
import ReactPaginate from 'react-paginate';
import BookCard from '../../components/FilteredPage/BookCard';
import Loading from '../../components/common/Loading/Loading';
import Nodata from '../../components/common/Nodata/Nodata';

import * as S from './filteredPage.styled';

const FilteredPage = () => {
  const [query] = useState('이'); //검색어 (문자열) (필수값)
  const [maxResults] = useState('100'); //1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [page, setPage] = useState(1);
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

    { id: 104315, name: '인지 심리학' },
    { id: 89481, name: '외국 과학소설' },
    { id: 172, name: '재테크/투자' },
    { id: 336, name: '성공' },
    { id: 64679, name: '미국여행' },
    { id: 3747, name: '가족만화' },

    { id: 4673, name: '인문/교양' },
    { id: 50930, name: '과학소설(SF)' },
    { id: 8587, name: '화폐/금융/재정' },
    { id: 70212, name: '리더쉽' },
    { id: 63849, name: '독일여행' },
    { id: 4671, name: '실용만화' },

    { id: 57804, name: '생명과학' },
    { id: 50922, name: '독일소설' },
    { id: 261, name: '마케팅/세일즈' },
    { id: 70221, name: '시간관리' },
    // { id: 2951, name: '인간관계' },
    { id: 50840, name: '세계일주여행' },
    { id: 4670, name: '역사만화' }
  ];

  //api호출수정//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////// 1. 상품 검색 API 테스트 //ItemSearch.aspx /////////////////
  // import { useBookSearchQuery } from "../../../../hooks/useBookSearch";
  // // Query : 검색어 (문자열) (*필수값)
  // // start : 1이상, 양의 정수 (기본값:1)           //검색결과 시작페이지
  // // MaxResults : 1이상 100이하 양의정수 (기본값10) //검색결과 한페이지당 최대 출력개수
  // // Sort
  // //   ㄴ Accuracy(기본값): 관련도
  // //   ㄴ PublishTime : 출간일
  // //   ㄴ Title : 제목
  // //   ㄴ SalesPoint : 판매량
  // //   ㄴ CustomerRating 고객평점
  // //   ㄴ MyReviewCount :마이리뷰갯수
  // // categoryId : //양의정수 - 분야의 고유 번호(기본값:0, 전체) (참고 : 알라딘 모든 분야 카테고리)
  // const [query, setQuery] = useState("미래");        //검색어 (문자열) (필수값)
  // const [start, setStart] = useState("1");           //검색결과 시작페이지 (1이상 양의정수) (선택값)
  // const [maxResults, setMaxResults] = useState("5"); //1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  // const [sort, setSort] = useState("Accuracy");
  // const [categoryId, setCategoryId] = useState("0");  //양의정수 - 분야의 고유 번호(기본값:0, 전체) //2173	경영전략/혁신
  // const {data,isLoading,isError,error} = useBookSearchQuery({query, start, maxResults, sort, categoryId});
  const [sort] = useState('Accuracy'); //1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  const {
    data: filteredBooks,
    isLoading,
    isError
  } = useBookSearchQuery({ query, start: page, maxResults, sort, categoryId });
  //api호출수정//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (filteredBooks) {
      console.log('Book Data : ', filteredBooks);
    }
  }, [filteredBooks]);

  const handleCategorySelectSide = (categoryId) => {
    navigate(`/books/${categoryId}`);
  };

  const handlePageClick = (page) => {
    setPage(page.selected + 1);
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
      <ReactPaginate
        nextLabel='next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        marginPagesDisplayed={2}
        pageCount={filteredBooks.total_pages}
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
      />
    </>
  );
};

export default FilteredPage;
