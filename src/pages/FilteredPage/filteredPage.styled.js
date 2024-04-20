import styled from 'styled-components';

// 내용 전체 컨테이너
export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 95vw;
`;

// 내용 전체 컨테이너
export const ContainerForCenter = styled.div`
  display: flex;
`;

// 카테고리
export const Categories = styled.div`
  width: 170px; // 사이드바 너비
  margin-top: 30px;
  padding-right: 30px;
  padding-top: 10px;
  font-size: 1.2rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

// 단일 카테고리
export const Category = styled.div`
  font-size: 14px;
  color: #595959;
  margin-top: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;

// 단일도서 리스트
export const BookList = styled.div`
  flex: 1; // 남은 공간을 모두 차지

  @media (max-width: 1024px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    width: 375px;
    padding: 5px;
  }
`;
