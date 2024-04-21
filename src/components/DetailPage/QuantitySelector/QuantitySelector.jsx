import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  color: #333;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid #ccc;
  color: #333;
`;

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      alert('1개 이상 구매 가능합니다.'); // 수량이 1개일 때 경고 메시지 표시
    }
  };

  return (
    <Container>
      <Button onClick={handleDecrement}>-</Button>
      <QuantityInput type='number' value={quantity} readOnly />
      <Button onClick={handleIncrement}>+</Button>
    </Container>
  );
};

export default QuantitySelector;
