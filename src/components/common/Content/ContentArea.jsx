import React from 'react';
import * as S from './ContentArea.styled';

export default function ContentArea({ children }) {
  return <S.Content>{children}</S.Content>;
}
