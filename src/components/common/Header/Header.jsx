import React from 'react';
import * as S from './header.styled';
import { Outlet, Link } from 'react-router-dom';
import CategorySelector from '../CategorySelect/CategorySelect';
import logo from '../../../assets/images/logo.png';

const Header = () => {
  return (
    <S.Navbar>
      <Link to='/'>
        <S.Logo src={logo} alt='로고' />
      </Link>
      <S.SearchContainer>
        <S.SearchInput type='text' placeholder='도서를 검색하세요' />
      </S.SearchContainer>
      <CategorySelector />
    </S.Navbar>
  );
};

export default Header;
