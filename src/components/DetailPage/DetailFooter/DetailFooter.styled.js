import styled from 'styled-components';

export const ReturnExchangeTable = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
  padding-top: 80px;
  padding-bottom: 50px;

  table {
    width: 100%;
    border-collapse: collapse;
    border-left: none;
    border-right: none;

    th,
    td {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 12px;
      text-align: left;
      background-color: #f4f4f4;
      color: #333;
      font-size: 14px;
      line-height: 1.5;
    }

    th {
      font-weight: 600;
    }

    td {
      font-weight: normal;
      background-color: transparent;
    }
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: #899227;
  font-size: 22px;
`;
