import styled from 'styled-components';

// 위젯 컨테이너 스타일 정의
export const PostcodeWidget = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  width: 20%;
  height: 400px;
  z-index: 1;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid #ccc;
  top: 100%;
  left: 0;

  // 모바일 뷰에서 위치 조정
  @media (max-width: 768px) {
    width: 100%;
    left: auto;
    right: 0;
  }
`;
