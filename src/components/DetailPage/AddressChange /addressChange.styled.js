import styled from 'styled-components';

export const AddressChange = styled.button`
  background-color: #f0f0f0;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #e1e1e1;
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

export const PaymentBenefitsContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PaymentBenefitsTitle = styled.h4`
  margin-bottom: 10px;
  color: #333;
`;

export const PaymentBenefitsDescription = styled.div`
  margin-bottom: 10px;
  color: #666;
`;
