import React, { useState } from 'react';
import * as S from './footer.styled';

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.FooterLayout>
      <S.FooterContent>
        <S.CompanyInfo>
          <p>상호: 밀리의 서재</p>
          <p>대표: 서영택</p>
          <p>사업자 등록번호: 423-88-00370</p>
          <p>통신판매업 신고번호: 2016-서울강남-02139</p>
          <p>주소: 서울특별시 강남구 테헤란로 4길 14곳 (역삼동 강남타워 5층)</p>
          <p>개인정보보호 책임자: privacy@millie.town</p>
          <p>고객센터: help@millie.town</p>
        </S.CompanyInfo>
        <S.ToggleButton onClick={handleToggle}>
          {isExpanded ? '사업자 정보 닫기' : '사업자 정보 펼쳐보기'}
        </S.ToggleButton>
        {isExpanded && (
          <S.AdditionalInfo>
            <p>호스팅 서비스 제공자: 아마존웹서비스</p>
            <p>통신판매중개자: 밀리의 서재</p>
            <p>유료 콘텐츠 결제 관련 문의: help@millie.town</p>
          </S.AdditionalInfo>
        )}
        <S.ButtonList>
          <li>
            <S.ButtonLink href='#'>개인정보처리방침</S.ButtonLink>
          </li>
          <li>
            <S.ButtonLink href='#'>계인정보취급방침</S.ButtonLink>
          </li>
          <li>
            <S.ButtonLink href='#'>청소년보호정책</S.ButtonLink>
          </li>
          <li>
            <S.ButtonLink href='#'>고객센터</S.ButtonLink>
          </li>
          <li>
            <S.ButtonLink href='#'>B2B문의</S.ButtonLink>
          </li>
          <li>
            <S.ButtonLink href='#'>콘텐츠 제휴문의</S.ButtonLink>
          </li>
          <li>
            <S.ButtonLink href='#'>뷰어 다운로드</S.ButtonLink>
          </li>
          <li>
            <S.ButtonLink href='#'>회사소개</S.ButtonLink>
          </li>
        </S.ButtonList>
      </S.FooterContent>
      <S.Copyright>Copyright © 2024 팔북정 All Rights Reserved.</S.Copyright>
    </S.FooterLayout>
  );
}
