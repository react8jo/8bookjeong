import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column; // 상세 페이지 전체를 세로로 나열
  align-items: center;
  padding: 20px;
  color: #008000; // 텍스트 색상을 초록색으로 설정
`;

export const BookImage = styled.img`
  width: 300px; // 이미지 크기를 200px에서 300px로 조정
  height: auto;
  margin-right: 20px;
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: row; // 이미지와 정보를 행으로 정렬
  align-items: flex-start; // 상단 정렬
  width: 100%;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column; // 텍스트를 세로로 정렬
  align-items: flex-start; // 왼쪽 정렬
  flex: 1;
  color: #008000;
`;

export const BookMeta = styled.div`
  display: flex;
  flex-direction: column; // 정보를 세로로 나열
  justify-content: space-between;
  color: #008000;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #008000; // 녹색 배경
  color: white; // 흰색 텍스트
  border: none; // 테두리 제거
  padding: 10px 20px; // 패딩 조정
  font-size: 16px; // 글씨 크기 증가
  cursor: pointer; // 클릭 가능 표시
  transition: background-color 0.3s;

  &:hover {
    background-color: #006400; // 호버 시 진한 녹색으로 변경
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 20px 0;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 5px;
  color: #008000; // 제목의 텍스트 색상을 초록색으로 설정
  font-size: 24px; // 제목 글씨 크기 증가
`;

export const Content = styled.p`
  margin: 5px 0 20px 0;
  color: #008000; // 내용의 텍스트 색상을 초록색으로 설정
  font-size: 18px; // 내용 글씨 크기 증가
`;
