import React from 'react';
import * as S from './nodata.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const Nodata = ({ text = '데이터가 없습니다.', addImg = false }) => {
  return (
    <S.NodataArea>
      {addImg && <FontAwesomeIcon icon={faBan} />}
      <p>{text}</p>
    </S.NodataArea>
  );
};

export default Nodata;
