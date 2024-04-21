import React from 'react';
import * as S from './header.styled';
import { Outlet, Link } from 'react-router-dom';
import CategorySelector from '../CategorySelect/CategorySelect';
import logo from '../../../logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ContentInner } from '../../../assets/style/globalStyle.styled';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const [searchActive, setSearchActive] = useState(false);

  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/result/?query=${keyword}&start=1&sort=Accuracy&maxResults=10`);
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      searchByKeyword(e);
    }
  };

  const deleteKeyword = () => {
    setKeyword('');
  };

  const handleSearchActive = () => {
    searchActive === false ? setSearchActive(true) : setSearchActive(false);
  };
  const handleCartLick = () => {
    navigate(`/cart`);
  };

  return (
    <S.Navbar>
      <ContentInner className='layoutFlex'>
        <S.SearchToggle onClick={() => handleSearchActive()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchToggle>
        <S.LogoArea>
          <Link onClick={() => deleteKeyword()} to='/'>
            <S.Logo src={logo} alt='로고' />
            <span className='hidden'>팔북정</span>
          </Link>
        </S.LogoArea>
        <S.SearchContainer className={`${searchActive !== false ? 'active' : ''}`}>
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
        <S.CartButton type='button' onClick={() => handleCartLick()}>
          <FontAwesomeIcon icon={faCartShopping} />
        </S.CartButton>
        <CategorySelector />
      </ContentInner>
    </S.Navbar>
  );
};

export default Header;
