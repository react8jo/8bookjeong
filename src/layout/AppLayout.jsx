import React from 'react';
import * as S from './appLayout.styled';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/common/Footer/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/result?q=${keyword}`);
  };

  const activeEnter = (e) => {
    console.log('activeEnter');
    if (e.key === 'Enter') {
      searchByKeyword(e);
    }
  };

  const deleteKeyword = () => {
    console.log('deleteKeyword');
    setKeyword('');
  };

  return (
    <S.AppLayout>
      <S.Navbar>
        <Link to='/'>
          <S.Logo src='https://via.placeholder.com/150x50?text=Logo' alt='로고' />
        </Link>
        <S.SearchContainer>
          <S.SearchIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </S.SearchIcon>
          <S.SearchInput
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={(e) => activeEnter(e)}
            type='text'
            placeholder='도서/작가를 검색하세요'
            value={keyword}
          />
          <S.DeleteIcon onClick={() => deleteKeyword()}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </S.DeleteIcon>
        </S.SearchContainer>
      </S.Navbar>
      <Outlet />
      <Footer />
    </S.AppLayout>
  );
};

export default AppLayout;
