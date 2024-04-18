import React from 'react';
import * as S from './appLayout.styled';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/common/Footer/Footer';

const AppLayout = () => {
  return (
    <S.AppLayout>
      <S.Navbar>
        <Link to='/'>
          <S.Logo src='https://via.placeholder.com/150x50?text=Logo' alt='로고' />
        </Link>
        <S.SearchContainer>
          <S.SearchInput type='text' placeholder='도서를 검색하세요' />
        </S.SearchContainer>
      </S.Navbar>
      <Outlet />
      <Footer />
    </S.AppLayout>
  );
};

export default AppLayout;
