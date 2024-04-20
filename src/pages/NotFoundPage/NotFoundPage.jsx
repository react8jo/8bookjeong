import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import * as S from './notFoundPage.styled';
import ContentArea from '../../components/common/Content/ContentArea';

export default function NotFoundPage() {
  return (
    <ContentArea>
      <S.NotFound>
        <span className='iconArea'>
          <b>4</b>
          <FontAwesomeIcon icon={faGear} />
          <b>4</b>
        </span>
        <p>페이지를 찾을 수 없습니다.</p>
      </S.NotFound>
    </ContentArea>
  );
}
