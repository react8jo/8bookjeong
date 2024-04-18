import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import * as S from './notFoundPage.styled';

export default function NotFoundPage() {
  return (
    <S.NotFound>
      <span className='iconArea'>
        <FontAwesomeIcon icon={faGear} />
        <b>404</b>
      </span>
      <p>페이지를 찾을 수 없습니다.</p>
    </S.NotFound>
  );
}
