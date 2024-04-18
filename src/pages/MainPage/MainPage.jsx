import React from 'react';
import Banner from '../../components/MainPage/Banner/Banner';
import * as S from './mainPage.styled';
import ResultPage from '../ResultPage/ResultPage';

export default function MainPage() {
  return (
    <S.MainPageLayout>
      <Banner />
      {/* 임시로 넣음 */}
      <div>
        메인 페이지입니다.
        <br />
        책책책책
      </div>
    </S.MainPageLayout>
  );
}
