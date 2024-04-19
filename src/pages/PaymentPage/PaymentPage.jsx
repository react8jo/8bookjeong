import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './PaymentPage.styled';

export default function PaymentPage() {
  return (
    <div>
      <S.ContentTitle>주문/결제하기</S.ContentTitle>
      <S.CartHeader>
        <ul>
          <li>상품정보</li>
          <li>할인</li>
          <li>배송비</li>
          <li>주문금액</li>
        </ul>
      </S.CartHeader>
      <S.Table>
        <colgroup>
          <col width='100' />
          <col width='*' />
          <col width='150' />
          <col width='150' />
          <col width='200' />
        </colgroup>
        <thead className='hidden'>
          <tr>
            <th scope='col' colspan='2'>
              상품정보
            </th>
            <th scope='col'>할인</th>
            <th scope='col'>배송비</th>
            <th scope='col'>주문금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor='bookImg'>
                <img
                  src='https://image.aladin.co.kr/product/33749/10/cover200/k872930961_2.jpg'
                  alt='이상한 과자 가게 전천당 20'
                />
              </label>
            </td>
            <td>
              <div className='bookInfo'>
                <p className='publisher'>길벗스쿨</p>
                <p className='title'>이상한 과자 가게 전천당 20</p>
                <p className='count'>수량 : 1개</p>
              </div>
            </td>
            <td>-</td>
            <td>무료배송</td>
            <td>
              <p className='price'>
                13,000 <span>원</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='bookImg2'>
                <img src='https://image.aladin.co.kr/product/33116/15/cover200/k062937128_3.jpg' alt='' />
              </label>
            </td>
            <td>
              <div className='bookInfo'>
                <p className='publisher'>북로망스</p>
                <p className='title'>메리골드 마음 사진관</p>
                <p className='count'>수량 : 1개</p>
              </div>
            </td>
            <td>-</td>
            <td>무료배송</td>
            <td>
              <p className='price'>
                17,000 <span>원</span>
              </p>
            </td>
          </tr>
        </tbody>
      </S.Table>
      <S.Total>
        총 주문금액 <span>30,000원</span>
      </S.Total>
      <S.SubTitle>배송정보</S.SubTitle>
      <S.SubTitle className='sm'>주문자 정보</S.SubTitle>
      <S.ShippingForm>
        <colgroup>
          <col width='100' />
          <col width='*' />
        </colgroup>
        <tbody>
          <tr>
            <td>이름</td>
            <td>
              <Form.Control type='text' placeholder='김개똥' className='fixed' />
            </td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>
              <span className='phone'>
                <Form.Control type='text' placeholder='010' />
                <span>-</span>
                <Form.Control type='text' placeholder='1111' />
                <span>-</span>
                <Form.Control type='text' placeholder='2222' />
              </span>
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <Form.Control type='email' placeholder='name@example.com' className='fixed' />
            </td>
          </tr>
        </tbody>
      </S.ShippingForm>
      <S.SubTitle className='sm'>배송지 정보</S.SubTitle>
      <S.ShippingForm>
        <colgroup>
          <col width='100' />
          <col width='*' />
        </colgroup>
        <tbody>
          <tr>
            <td>수령인</td>
            <td>
              <Form.Control type='text' placeholder='이수령' className='fixed' />
            </td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>
              <span className='phone'>
                <Form.Control type='text' placeholder='010' />
                <span>-</span>
                <Form.Control type='text' placeholder='1111' />
                <span>-</span>
                <Form.Control type='text' placeholder='2222' />
              </span>
            </td>
          </tr>
          <tr>
            <td>배송주소</td>
            <td>
              <span className='buttonSet'>
                <Form.Control type='text' placeholder='04524' />
                <S.Button>우편번호 조회</S.Button>
              </span>
              <Form.Control type='text' placeholder='서울특별시 중구 세종대로 110' className='mt-2' />
              <Form.Control type='text' placeholder='1층' className='mt-2' />
            </td>
          </tr>
          <tr>
            <td>배송메세지</td>
            <td>
              <Form.Control type='text' placeholder='파손주의 물품입니다.' />
            </td>
          </tr>
        </tbody>
      </S.ShippingForm>
      <S.PaymentType>
        <div className='payType'>
          <S.SubTitle>결제수단</S.SubTitle>
          <div className='typeList'>
            <Form.Check inline label='신용/체크카드' name='type' type='radio' id='type01' />
            <Form.Check inline label='무통장 입금' name='type' type='radio' id='type02' />
            <Form.Check inline label='휴대폰 결제' name='type' type='radio' id='type03' />
            <Form.Check inline label='네이버페이' name='type' type='radio' id='type04' />
            <Form.Check inline label='카카오페이' name='type' type='radio' id='type05' />
          </div>
        </div>
        <div className='payInfo'>
          <S.SubTitle>최종결제 정보</S.SubTitle>
          <div className='info'>
            <ul>
              <li>
                <span>상품금액</span>
                <span>
                  30,000<span className='unit'>원</span>
                </span>
              </li>
              <li>
                <span>할인금액</span>
                <span>
                  0<span className='unit'>원</span>
                </span>
              </li>
              <li>
                <span>배송비</span>
                <span>
                  0<span className='unit'>원</span>
                </span>
              </li>
              <li className='total'>
                <span>결제금액</span>
                <span>
                  30,000<span className='unit'>원</span>
                </span>
              </li>
            </ul>
            <div className='check'>
              <Form.Check
                label='주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.'
                name='orderCheck'
                type='checkbox'
                id='orderCheck'
              />
              <S.ButtonArea>
                <S.Button className='lg'>결제하기</S.Button>
              </S.ButtonArea>
            </div>
          </div>
        </div>
      </S.PaymentType>
    </div>
  );
}
