import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Buttons, ButtonArea, ContentTitle } from '../../../assets/style/globalStyle.styled';
import styled from 'styled-components';
// import {
//   useBookCategoryTotListQuery,
//   useBookCategory1ListQuery,
//   useBookCategory2ListQuery,
//   useBookCategory3ListQuery
// } from '../../../hooks/useBookList';
import {
  useBookCategoryTotListQuery,
  useBookCategory1ListQuery,
  useBookCategory2ListQuery,
  useBookCategory3ListQuery,
  useBookCategory4ListQuery,
  useBookCategory5ListQuery,
  useBookCategory6ListQuery,
  useBookCategory7ListQuery,
  useBookCategory8ListQuery
} from '../../../hooks/useBookList';
import ChoiceBookSlider from './ChoiceBookSlider';
import { Button } from 'react-bootstrap';
import Loading from '../../common/Loading/Loading';
import * as S from './ChoiceBook.styled';

const ChoiceBook = () => {
  ////////////////////////////// 2. 상품 리스트 API //ItemList.aspx //////////////////////////////
  // QueryType (*필수값)
  //   ㄴ Bestseller : 베스트셀러
  //   ㄴ ItemNewAll : 신간 전체 리스트
  //   ㄴ ItemNewSpecial : 주목할 만한 신간 리스트
  //   ㄴ ItemEditorChoice : 편집자 추천 리스트 (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
  //   ㄴ BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능)
  // start : 1이상, 양의 정수(기본값:1)           //검색결과 시작페이지
  // MaxResults : 1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  // CategoryId : 양의정수 - 분야의 고유 번호(기본값:0, 전체) (참고 : 알라딘 모든 분야 카테고리) 특정 분야로 검색결과를 제한함
  // 알라딘카테고리파일url : https://image.aladin.co.kr/img/files/aladin_Category_CID_20210927.xls
  // const [start, setStart] = useState('1');
  // const [maxResults, setMaxResults] = useState('15');
  // const [categoryId, setCategoryId] = useState('0');
  // //const [querytype, setQuerytype] = useState('ItemEditorChoice');
  // const [querytype, setQuerytype] = useState('BlogBest');
  // const {
  //   data: bookList,
  //   isLoading,
  //   isError,
  //   error,
  //   refetch
  // } = useBookListQuery({ querytype, start, maxResults, categoryId });

  // const [start, setStart] = useState('1');
  // const [maxResults, setMaxResults] = useState('50');
  // const [categoryId, setCategoryId] = useState('0'); //2173	경영전략/혁신
  // const [querytype, setQuerytype] = useState('BlogBest'); //베스트셀러
  // const {
  //   data: bookList,
  //   isLoading,
  //   isError,
  //   error,
  //   refetch
  // } = useBookListQuery({ querytype, start, maxResults, categoryId });

  // useEffect(() => {
  //   if (bookList) {
  //     console.log('bookList', bookList);
  //   }
  // }, [bookList]);

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1
  //   }
  // };
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1400 },
  //     items: 4
  //   },
  //   tablet: {
  //     breakpoint: { max: 1400, min: 1000 },
  //     items: 3
  //   },
  //   mobile: {
  //     breakpoint: { max: 1000, min: 0 },
  //     items: 2,
  //     slidesToSlide: 1
  //   }
  // };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1300, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };

  // const handleBookList = (filterCategory) => {
  //   //종합일경우는 BlogBest로 대체해야한다. ItemEditorChoice는 카테고리값이 필수이기때문
  //   if (filterCategory === '0') {
  //     setQuerytype('BlogBest');
  //   } else {
  //     setCategoryId('ItemEditorChoice');
  //   }
  //   setCategoryId(filterCategory);
  //   refetch();
  // };
  const [startTot] = useState('1');
  const [maxResultsTot] = useState('15');
  const [categoryIdTot] = useState('0');
  const [querytypeTot] = useState('BlogBest');
  const {
    data: detailTot,
    isLoading,
    isError,
    error
  } = useBookCategoryTotListQuery({ querytypeTot, startTot, maxResultsTot, categoryIdTot });
  ////////////////////////////////////////////////////////////////////////////////////////////
  const [start1] = useState('1');
  const [maxResults1] = useState('15');
  const [categoryId1] = useState('1');
  const [querytype1] = useState('ItemEditorChoice');
  const { data: detail1 } = useBookCategory1ListQuery({ querytype1, start1, maxResults1, categoryId1 });
  ////////////////////////////////////////////////////////////////////////////////////////////
  const [start2] = useState('1');
  const [maxResults2] = useState('15');
  const [categoryId2] = useState('170'); //경제경영
  const [querytype2] = useState('ItemEditorChoice');
  const { data: detail2 } = useBookCategory2ListQuery({ querytype2, start2, maxResults2, categoryId2 });
  ////////////////////////////////////////////////////////////////////////////////////////////
  const [start3] = useState('1');
  const [maxResults3] = useState('15');
  const [categoryId3] = useState('336'); //자기계발
  const [querytype3] = useState('ItemEditorChoice');
  const { data: detail3 } = useBookCategory3ListQuery({ querytype3, start3, maxResults3, categoryId3 });
  ////////////////////////////////////////////////////////////////////////////////////////////
  const [start4] = useState('1');
  const [maxResults4] = useState('15');
  const [categoryId4] = useState('656'); //인문/교양
  const [querytype4] = useState('ItemEditorChoice');
  const { data: detail4 } = useBookCategory4ListQuery({ querytype4, start4, maxResults4, categoryId4 });
  ////////////////////////////////////////////////////////////////////////////////////////////
  const [start5] = useState('1');
  const [maxResults5] = useState('15');
  const [categoryId5] = useState('1196'); //여행
  const [querytype5] = useState('ItemEditorChoice');
  const { data: detail5 } = useBookCategory5ListQuery({ querytype5, start5, maxResults5, categoryId5 });
  ////////////////////////////////////////////////////////////////////////////////////////////
  const [start6] = useState('1');
  const [maxResults6] = useState('15');
  const [categoryId6] = useState('2913'); //매거진
  const [querytype6] = useState('ItemEditorChoice');
  const { data: detail6 } = useBookCategory6ListQuery({ querytype6, start6, maxResults6, categoryId6 });
  ////////////////////////////////////////////////////////////////////////////////////////////
  const [start7] = useState('1');
  const [maxResults7] = useState('15');
  const [categoryId7] = useState('517'); //예술/문화
  const [querytype7] = useState('ItemEditorChoice');
  const { data: detail7 } = useBookCategory7ListQuery({ querytype7, start7, maxResults7, categoryId7 });
  ////////////////////////////////////////////////////////////////////////////////////////////
  const [start8] = useState('1');
  const [maxResults8] = useState('15');
  const [categoryId8] = useState('2551'); //만화
  const [querytype8] = useState('ItemEditorChoice');
  const { data: detail8 } = useBookCategory8ListQuery({ querytype8, start8, maxResults8, categoryId8 });

  const [selectedTab, setSelectedTab] = useState('detailTot');

  // const [isClicked, setIsClicked] = useState(false);
  // const [selectedButton, setSelectedButton] = useState('detailTot');

  const handleClickTab = (buttonId) => {
    setSelectedTab(buttonId);
    // setSelectedButton(buttonId);
  };

  const getButtonClassName = (buttonId) => {
    return selectedTab === buttonId ? 'clicked' : 'nonclick'; // 선택된 버튼에는 selected 클래스, 선택되지 않은 버튼에는 unselected 클래스를 적용
  };
  if (isLoading) {
    return <S.Title></S.Title>;
  }

  if (isError) {
    return <div>Error occurred while fetching data...</div>;
  }

  return (
    <div>
      <S.Title>
        <ContentTitle>추천</ContentTitle>
        <S.ButtonList>
          <S.CategoryButton
            id='detailTot'
            onClick={(event) => handleClickTab('detailTot')}
            className={getButtonClassName('detailTot')}>
            종합
          </S.CategoryButton>
          <S.CategoryButton
            id='detail1'
            onClick={(event) => handleClickTab('detail1')}
            className={getButtonClassName('detail1')}>
            소설
          </S.CategoryButton>
          <S.CategoryButton
            id='detail2'
            onClick={(event) => handleClickTab('detail2')}
            className={getButtonClassName('detail2')}>
            경제
          </S.CategoryButton>
          <S.CategoryButton
            id='detail3'
            onClick={(event) => handleClickTab('detail3')}
            className={getButtonClassName('detail3')}>
            자기계발
          </S.CategoryButton>
          <S.CategoryButton
            id='detail4'
            onClick={(event) => handleClickTab('detail4')}
            className={getButtonClassName('detail4')}>
            인문
          </S.CategoryButton>
          <S.CategoryButton
            id='detail5'
            onClick={(event) => handleClickTab('detail5')}
            className={getButtonClassName('detail5')}>
            여행
          </S.CategoryButton>
          <S.CategoryButton
            id='detail6'
            onClick={(event) => handleClickTab('detail6')}
            className={getButtonClassName('detail6')}>
            매거진
          </S.CategoryButton>
          <S.CategoryButton
            id='detail7'
            onClick={(event) => handleClickTab('detail7')}
            className={getButtonClassName('detail7')}>
            예술
          </S.CategoryButton>
          <S.CategoryButton
            id='detail8'
            onClick={(event) => handleClickTab('detail8')}
            className={getButtonClassName('detail8')}>
            만화
          </S.CategoryButton>
        </S.ButtonList>
        {selectedTab === 'detailTot' && (
          <ChoiceBookSlider title={'추천'} books={detailTot?.item} responsive={responsive} />
        )}
        {selectedTab === 'detail1' && <ChoiceBookSlider title={'추천'} books={detail1?.item} responsive={responsive} />}
        {selectedTab === 'detail2' && <ChoiceBookSlider title={'추천'} books={detail2?.item} responsive={responsive} />}
        {selectedTab === 'detail3' && <ChoiceBookSlider title={'추천'} books={detail3?.item} responsive={responsive} />}
        {selectedTab === 'detail4' && <ChoiceBookSlider title={'추천'} books={detail4?.item} responsive={responsive} />}
        {selectedTab === 'detail5' && <ChoiceBookSlider title={'추천'} books={detail5?.item} responsive={responsive} />}
        {selectedTab === 'detail6' && <ChoiceBookSlider title={'추천'} books={detail6?.item} responsive={responsive} />}
        {selectedTab === 'detail7' && <ChoiceBookSlider title={'추천'} books={detail7?.item} responsive={responsive} />}
        {selectedTab === 'detail8' && <ChoiceBookSlider title={'추천'} books={detail8?.item} responsive={responsive} />}
      </S.Title>
    </div>
  );
};

export default ChoiceBook;
