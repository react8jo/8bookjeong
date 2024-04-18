import React from 'react';
import Banner from '../../components/MainPage/Banner/Banner';
import BestsellerBook from '../../components/MainPage/BestsellerBook/BestsellerBook';
import ChoiceBook from '../../components/MainPage/ChoiceBook/ChoiceBook';
import NewBook from '../../components/MainPage/NewBook/NewBook';

export default function MainPage() {
  return (
    <>
      {/* <Banner /> */}
      <BestsellerBook />
      <ChoiceBook />
      <NewBook />
    </>
    // =======
    // import * as S from './mainPage.styled';
    // export default function MainPage() {
    //   return (
    //     <S.MainPageLayout>
    //       <Banner />
    //       {/* 임시로 넣음 */}
    //       <div>
    //         메인 페이지입니다.
    //         <br />
    //         책책책책
    //       </div>
    //     </S.MainPageLayout>
    // >>>>>>> dev
  );
}
