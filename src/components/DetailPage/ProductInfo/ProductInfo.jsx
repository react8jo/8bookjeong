import React from 'react';
import * as S from './productInfo.styled';

const ProductInfo = ({ book }) => {
  return (
    <S.ProductInfoTable>
      <table>
        <tbody>
          <tr>
            <th>발행일</th>
            <td>{book.item[0].pubDate}</td>
          </tr>
          <tr>
            <th>쪽수</th>
            <td>{book.item[0].subInfo.itemPage}</td>
          </tr>
          <tr>
            <th>ISBN13</th>
            <td>{book.item[0].isbn13}</td>
          </tr>
          <tr>
            <th>ISBN10</th>
            <td>{book.item[0].isbn}</td>
          </tr>
        </tbody>
      </table>
    </S.ProductInfoTable>
  );
};

export default ProductInfo;
