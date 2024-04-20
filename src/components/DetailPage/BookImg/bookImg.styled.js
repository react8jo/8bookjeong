import styled from 'styled-components';

export const BookImage = styled.img`
  width: 300px;
  height: auto;
  // margin-right: 40px; // 데스크탑 뷰에서 사용
  margin-bottom: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`;
// BookImageContainer를 위한 스타일
export const BookImageContainer = styled.div`
  position: relative;
  margin-right: 40px;
  width: 300px; // BookImage와 동일한 너비 설정
  text-align: center; // 중앙 정렬
  margin-bottom: 20px; // 미리보기와 다른 요소들 간의 간격 조정

  @media (max-width: 760px) {
    margin-right: 0; // 모바일 뷰에서 오른쪽 마진 제거
    margin-left: auto; // 왼쪽 마진 자동 조정
    margin-right: auto; // 오른쪽 마진 자동 조정
    display: block; // 블록 레벨 요소로 설정
  }
`;

// PreviewText를 위한 스타일
export const PreviewText = styled.span`
  display: block; // 블록 레벨 요소로 만들어 전체 폭을 사용하게 함
  margin-top: 10px; // 이미지와의 간격
  margin-bottom: 30px;
  font-size: 16px;
  color: black; // 글자색을 검정색으로 설정
  cursor: pointer; // 호버 시 포인터 모양으로 변경
`;
