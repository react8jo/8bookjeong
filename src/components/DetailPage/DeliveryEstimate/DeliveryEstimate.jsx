import React from 'react';

const DeliveryEstimate = ({ address }) => {
  const regionsFast = ['서울', '경기', '충청남도', '충청북도', '강원특별자치도', '인천광역시'];
  const regionsRegular = ['경북', '경남', '부산', '대구', '전남', '전북', '광주', '제주특별자치도'];

  let deliveryText = '';

  if (regionsFast.some((region) => address.includes(region))) {
    deliveryText = '하루 배송 - 24시까지 주문하면 내일 도착 예정';
  } else if (regionsRegular.some((region) => address.includes(region))) {
    deliveryText = '일반 배송 - 오늘 출고 예정';
  } else {
    deliveryText = '배송 정보가 없습니다.';
  }

  return (
    <div>
      <p
        style={{
          backgroundColor: '#FFF7EF',
          padding: '10px',
          borderRadius: '5px'
        }}>
        {deliveryText}
      </p>
    </div>
  );
};

export default DeliveryEstimate;
