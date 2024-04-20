import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  }, [isPostcodeOpen, setAddress, togglePostcode]); // 의존성 배열 업데이트

  return (
    <>
      <button onClick={togglePostcode}>지역 변경{'▾'}</button>
      <div
        ref={elementRef}
        style={{
          display: isPostcodeOpen ? 'block' : 'none',
          position: 'absolute',
          width: '20%',
          height: '400px',
          zIndex: 1
        }}>
        {/* 여기에 Postcode 위젯이 표시되거나 숨겨집니다. */}
      </div>
    </>
  );
};

export default AddressChange;
