import React, { useState } from 'react';
import * as S from './footer.styled';
import Icon from '../../../assets/images/icon-github.png';

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.FooterLayout>
      <S.FooterContent>
        <S.CompanyInfo>
          <S.CompanyText>상호: 팔북정</S.CompanyText>
          <S.GithubLink href='https://github.com/react8jo/react-team' target='_blank' rel='noopener noreferrer'>
            <S.GithubIcon src={Icon} alt='Github Icon' />
          </S.GithubLink>
        </S.CompanyInfo>
        <S.ToggleButton onClick={handleToggle}>{isExpanded ? '추가 정보 닫기' : '추가 정보 펼쳐보기'}</S.ToggleButton>
        {isExpanded && (
          <S.AdditionalInfo>
            <p>이 포트폴리오는 React와 styled-components를 사용하여 제작되었습니다.</p>
            <p>질문이나 피드백은 이메일로 연락 부탁드립니다.</p>
          </S.AdditionalInfo>
        )}
        <S.ButtonList>
          <S.ButtonItem>
            <S.ButtonLink href='#'>개인정보처리방침</S.ButtonLink>
          </S.ButtonItem>
          <S.ButtonItem>
            <S.ButtonLink href='#'>계인정보취급방침</S.ButtonLink>
          </S.ButtonItem>
          <S.ButtonItem>
            <S.ButtonLink href='#'>청소년보호정책</S.ButtonLink>
          </S.ButtonItem>
          <S.ButtonItem>
            <S.ButtonLink href='#'>고객센터</S.ButtonLink>
          </S.ButtonItem>
        </S.ButtonList>
      </S.FooterContent>
      <S.Copyright>Copyright © 2024 팔북정 All Rights Reserved.</S.Copyright>
    </S.FooterLayout>
  );
}
