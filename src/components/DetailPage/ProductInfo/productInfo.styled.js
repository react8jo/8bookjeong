import styled from 'styled-components';

export const ProductInfoTable = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 30px;

  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #bbb;
    border-bottom: 2px solid #bbb;

    th,
    td {
      padding: 8px;
      text-align: left;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #ccc;
    }

    th {
      background-color: #f8f8f8;
      // font-weight: 600;
    }

    td {
      background-color: transparent;
    }
  }
`;
