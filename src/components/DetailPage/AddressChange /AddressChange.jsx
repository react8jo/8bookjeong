import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트로 위젯 스타일 정의
const PostcodeWidget = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  width: 20%;
  height: 400px;
  z-index: 1;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  top: 100%;
  left: 0;

  // 모바일 뷰에서 위치 조정
  @media (max-width: 768px) {
    width: 100%; // 모바일에서는 너비를 100%로 조정
    left: auto; // 왼쪽 정렬 무시
    right: 0; // 오른쪽 끝에 위치
  }
`;

const AddressChange = ({ setAddress }) => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const togglePostcode = useCallback(() => {
    setIsPostcodeOpen(!isPostcodeOpen);
  }, [isPostcodeOpen]);

  useEffect(() => {
    if (isPostcodeOpen) {
      window.daum.postcode.load(() => {
        new window.daum.Postcode({
          oncomplete: function (data) {
            let fullAddress = data.address;
            const extraAddress = data.extraAddress ? ` (${data.extraAddress})` : '';
            if (data.userSelectedType === 'R') {
              fullAddress += extraAddress;
            }
            setAddress(fullAddress);
            togglePostcode();
          },
          width: '100%',
          height: '100%'
        }).embed(elementRef.current);
      });
    } else {
      elementRef.current.innerHTML = ''; // 포스트코드 위젯을 제거
    }
  }, [isPostcodeOpen, setAddress, togglePostcode]);

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={togglePostcode} style={{ position: 'relative' }}>
        지역 변경{'▾'}
      </button>
      <PostcodeWidget isOpen={isPostcodeOpen} ref={elementRef}>
        {/* Postcode 위젯 */}
      </PostcodeWidget>
    </div>
  );
};

export default AddressChange;
