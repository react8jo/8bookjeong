import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './CartPage.styled';

export default function CartPage() {
  return (
    <div>
      <S.ContentTitle>장바구니</S.ContentTitle>
      <div>
        <S.CartHeader>
          <ul>
            <li>
              <Form.Check type='checkbox' />
            </li>
            <li>상품정보</li>
            <li>수량</li>
            <li>상품금액</li>
          </ul>
        </S.CartHeader>
        <S.Table>
          <colgroup>
            <col width='50' />
            <col width='100' />
            <col width='*' />
            <col width='150' />
            <col width='200' />
            <col width='50' />
          </colgroup>
          <thead className='hidden'>
            <tr>
              <th>
                <Form.Check type='checkbox' />
              </th>
              <th scope='col' colspan='2'>
                상품정보
              </th>
              <th scope='col'>수량</th>
              <th scope='col'>상품금액</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check type='checkbox' id='bookImg' />
              </td>
              <td>
                <label htmlFor='bookImg'>
                  <img
                    src='https://image.aladin.co.kr/product/33749/10/cover200/k872930961_2.jpg'
                    alt='이상한 과자 가게 전천당 20'
                  />
                </label>
              </td>
              <td className='alignTop'>
                <div className='bookInfo'>
                  <p className='publisher'>길벗스쿨</p>
                  <p className='title'>이상한 과자 가게 전천당 20</p>
                  <p className='price'>
                    13,000 <span>원</span>
                  </p>
                  <p className='shipping'>택배배송 / 유료배송 (도서 1만5천원 이상 무료)</p>
                </div>
              </td>
              <td>
                <S.Counter>
                  <InputGroup>
                    <Button variant='outline-secondary'>-</Button>
                    <Form.Control type='number' placeholder='1' />
                    <Button variant='outline-secondary'>+</Button>
                  </InputGroup>
                </S.Counter>
              </td>
              <td>
                <p className='price'>
                  13,000 <span>원</span>
                </p>
                <S.Button type='button'>주문하기</S.Button>
              </td>
              <td className='alignTop'>
                <CloseButton />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check type='checkbox' id='bookImg2' />
              </td>
              <td>
                <label htmlFor='bookImg2'>
                  <img src='https://image.aladin.co.kr/product/33116/15/cover200/k062937128_3.jpg' alt='' />
                </label>
              </td>
              <td className='alignTop'>
                <div className='bookInfo'>
                  <p className='publisher'>북로망스</p>
                  <p className='title'>메리골드 마음 사진관</p>
                  <p className='price'>
                    17,000 <span>원</span>
                  </p>
                  <p className='shipping'>택배배송 / 무료배송</p>
                </div>
              </td>
              <td>
                <S.Counter>
                  <InputGroup>
                    <Button variant='outline-secondary'>-</Button>
                    <Form.Control type='number' placeholder='1' />
                    <Button variant='outline-secondary'>+</Button>
                  </InputGroup>
                </S.Counter>
              </td>
              <td>
                <p className='price'>
                  17,000 <span>원</span>
                </p>
                <S.Button type='button'>주문하기</S.Button>
              </td>
              <td className='alignTop'>
                <CloseButton />
              </td>
            </tr>
          </tbody>
        </S.Table>
      </div>
      <S.CartTotal>
        <div className='item'>
          <span className='title'>총 상품금액</span>
          <span className='price'>
            30,000 <span className='unit'>원</span>
          </span>
        </div>
        <div className='item'>
          <span className='title'>상품할인</span>
          <span className='price'>
            0 <span className='unit'>원</span>
          </span>
        </div>
        <div className='item'>
          <span className='title'>배송비</span>
          <span className='price'>
            0 <span className='unit'>원</span>
          </span>
        </div>
        <div className='item'>
          <span className='title'>결제 예정 금액</span>
          <span className='price'>
            30,000 <span className='unit'>원</span>
          </span>
        </div>
      </S.CartTotal>
      <S.ButtonArea>
        <S.Button type='button' className='lg'>
          주문하기
        </S.Button>
      </S.ButtonArea>
    </div>
  );
}
