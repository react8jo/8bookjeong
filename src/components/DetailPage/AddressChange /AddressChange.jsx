import React, { useEffect } from 'react';

const AddressChange = ({ setAddress }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openPostcode = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: function (data) {
          let fullAddress = data.address;
          const extraAddress = data.extraAddress ? ` (${data.extraAddress})` : '';
          if (data.userSelectedType === 'R') {
            fullAddress += extraAddress;
          }
          setAddress(fullAddress);
        }
      });
      postcode.open();
    });
  };

  return <button onClick={openPostcode}>지역 변경{'▿'}</button>;
};

export default AddressChange;
