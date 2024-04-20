import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Popup from '../../components/common/Popup/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './PaymentPage.styled';
import { Buttons, ButtonArea, SubTitle, ContentTitle, SectionTitle } from '../../assets/style/globalStyle.styled';

export default function PaymentPage() {
  const [modalShow, setModalShow] = useState(false);

  const handlePopup = () => {
    setModalShow(true);
  };

  return (
    <>
      <div>
        <ContentTitle className='center'>주문/결제하기</ContentTitle>
        <S.CartHeader>
          <ul>
            <li>상품정보</li>
            <li>할인</li>
            <li>배송비</li>
            <li>주문금액</li>
          </ul>
        </S.CartHeader>

        <S.CartList>
          <ul className='body'>
            <li>
              <div className='imgArea'>
                <div>
                  <label htmlFor='bookImg'>
                    <img
                      src='https://image.aladin.co.kr/product/33749/10/cover200/k872930961_2.jpg'
                      alt='이상한 과자 가게 전천당 20'
                    />
                  </label>
                </div>
              </div>
              <div className='InfoArea'>
                <div className='bookInfo'>
                  <p className='publisher'>길벗스쿨</p>
                  <p className='title'>이상한 과자 가게 전천당 20</p>
                  <p className='count'>수량 : 1개</p>
                </div>
                <div>
                  <span className='m'>할인</span>
                  <span>-</span>
                </div>
                <div>
                  <span className='m'>배송비</span>
                  <span>무료배송</span>
                </div>
                <div>
                  <span className='m'>상품 금액</span>
                  <span className='price'>
                    13,000 <span>원</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className='imgArea'>
                <div>
                  <label htmlFor='bookImg2'>
                    <img src='https://image.aladin.co.kr/product/33116/15/cover200/k062937128_3.jpg' alt='' />
                  </label>
                </div>
              </div>
              <div className='InfoArea'>
                <div className='bookInfo'>
                  <p className='publisher'>북로망스</p>
                  <p className='title'>메리골드 마음 사진관</p>
                  <p className='count'>수량 : 1개</p>
                </div>
                <div>
                  <span className='m'>할인</span>
                  <span>-</span>
                </div>
                <div>
                  <span className='m'>배송비</span>
                  <span>무료배송</span>
                </div>
                <div>
                  <span className='m'>상품 금액</span>
                  <span className='price'>
                    17,000 <span>원</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </S.CartList>
        <S.Total>
          총 주문금액 <span>30,000원</span>
        </S.Total>
        <SectionTitle>배송정보</SectionTitle>
        <SubTitle>주문자 정보</SubTitle>
        <S.shippingInfo>
          <ul>
            <li>
              <span className='cell'>이름</span>
              <span className='cell'>
                <Form.Control type='text' placeholder='김개똥' className='fixed' />
              </span>
            </li>
            <li>
              <span className='cell'>휴대폰</span>
              <span className='cell'>
                <span className='phone'>
                  <Form.Control type='text' placeholder='010' />
                  <span>-</span>
                  <Form.Control type='text' placeholder='1111' />
                  <span>-</span>
                  <Form.Control type='text' placeholder='2222' />
                </span>
              </span>
            </li>
            <li>
              <span className='cell'>이메일</span>
              <span className='cell'>
                <Form.Control type='email' placeholder='name@example.com' className='fixed' />
              </span>
            </li>
          </ul>
        </S.shippingInfo>
        <SubTitle>배송지 정보</SubTitle>
        <S.shippingInfo>
          <ul>
            <li>
              <span className='cell'>수령인</span>
              <span className='cell'>
                <Form.Control type='text' placeholder='이수령' className='fixed' />
              </span>
            </li>
            <li>
              <span className='cell'>휴대폰</span>
              <span className='cell'>
                <span className='phone'>
                  <Form.Control type='text' placeholder='010' />
                  <span>-</span>
                  <Form.Control type='text' placeholder='1111' />
                  <span>-</span>
                  <Form.Control type='text' placeholder='2222' />
                </span>
              </span>
            </li>
            <li>
              <span className='cell'>배송주소</span>
              <span className='cell'>
                <span className='buttonSet'>
                  <Form.Control type='text' placeholder='04524' />
                  <Buttons>우편번호 조회</Buttons>
                </span>
                <Form.Control type='text' placeholder='서울특별시 중구 세종대로 110' className='mt-2' />
                <Form.Control type='text' placeholder='1층' className='mt-2' />
              </span>
            </li>
            <li>
              <span className='cell'>배송메세지</span>
              <span className='cell'>
                <Form.Control type='text' placeholder='파손주의 물품입니다.' />
              </span>
            </li>
          </ul>
        </S.shippingInfo>
        <S.PaymentType>
          <div className='payType'>
            <SectionTitle>결제수단</SectionTitle>
            <div className='typeList'>
              <Form.Check inline label='신용/체크카드' name='type' type='radio' id='type01' />
              <Form.Check inline label='무통장 입금' name='type' type='radio' id='type02' />
              <Form.Check inline label='휴대폰 결제' name='type' type='radio' id='type03' />
              <Form.Check inline label='네이버페이' name='type' type='radio' id='type04' />
              <Form.Check inline label='카카오페이' name='type' type='radio' id='type05' />
            </div>
          </div>
          <div className='payInfo'>
            <SectionTitle>최종결제 정보</SectionTitle>
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
                <ButtonArea>
                  <Buttons className='lg secondaryColor' onClick={() => handlePopup()}>
                    결제하기
                  </Buttons>
                </ButtonArea>
              </div>
            </div>
          </div>
        </S.PaymentType>
      </div>
      <Popup show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
