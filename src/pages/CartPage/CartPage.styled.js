import styled from 'styled-components';
//137,146,39
export const Counter = styled.div`
  input {
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
export const ContentTitle = styled.h2`
  margin-bottom: 35px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
export const CartHeader = styled.div`
  ul {
    display: table;
    width: 100%;
    margin-bottom: 20px;
    padding: 0;
    border-radius: 4px;
    background-color: #f2f2f2;

    li {
      display: table-cell;
      padding: 15px 10px;
      vertical-align: middle;
      text-align: center;

      &:first-child {
        width: 50px;
      }
      &:nth-child(3) {
        width: 150px;
      }
      &:nth-child(4) {
        width: 250px;
      }
    }
  }
`;
export const CartList = styled.div`
  .header ul,
  .body ul {
    display: table;
    width: 100%;
    margin: 0;

    li {
      display: table-cell;
      padding: 15px 10px;
      vertical-align: middle;
      text-align: center;

      &:first-child {
        width: 50px;
      }
      &:nth-child(2) {
        vertical-align: top;
        text-align: left;
      }
      &:nth-child(3) {
        width: 150px;
      }
      &:nth-child(4) {
        width: 200px;
      }
      &:nth-child(5) {
        width: 50px;
      }
    }
  }

  .header {
    margin-bottom: 20px;
    border-radius: 2px;
    background-color: #f2f2f2;
  }

  .body {
    li {
      border: 1px solid #eee;
    }
  }
  .bookInfo {
    display: flex;
  }
`;
export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border: 1px solid #ddd;
  border-radius: 5px;

  thead {
    th {
      padding: 10px;
      background-color: #f2f2f2;

      &:first-child {
        border-radius: 2px 0 0 2px;
      }
      &:last-child {
        border-radius: 0 2px 2px 0;
      }
    }

    &.hidden {
      visibility: collapse;

      th {
        padding: 0;
        height: 0;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 15px 10px;
        vertical-align: middle;
        text-align: center;
        border-bottom: 1px solid #ddd;

        &.alignTop {
          position: relative;
          vertical-align: top;
          text-align: left;
        }

        img {
          width: 100%;
        }

        > .price {
          color: #eb5757;
          font-weight: bold;
          margin-bottom: 15px;
        }
      }
    }
  }

  .bookInfo {
    height: 100%;
    padding-bottom: 20px;

    .publisher {
      color: #8e8e8e;
      font-size: 12px;
    }
    .title {
      margin-top: 10px;
      font-size: 18px;
    }

    .price {
      margin-top: 15px;
    }
    .shipping {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: #8e8e8e;
      font-size: 12px;
    }
  }
`;

export const Button = styled.button`
  background-color: #899227;
  padding: 10px 15px;
  border: 0;
  border-radius: 4px;
  color: #fff;

  &.sm {
    padding: 5px 7px;
    font-size: 13px;
  }
  &.lg {
    padding: 15px 20px;
    font-size: 22px;
  }
`;

export const ButtonArea = styled.div`
  margin-top: 35px;
  text-align: center;

  &.left {
    text-align: left;
  }
  &.right {
    text-align: right;
  }

  button {
    margin-right: 7px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const CartTotal = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 40px 20px;
  border-radius: 10px;
  background-color: #f2f2f2;

  .item {
    position: relative;
    width: 25%;
    text-align: center;

    .title {
      display: block;
      margin-bottom: 15px;
      font-size: 14px;
      font-weight: bold;
    }
    .price {
      font-size: 25px;
      font-weight: bold;

      .unit {
        font-size: 14px;
      }
    }

    &:nth-child(1)::after,
    &:nth-child(2)::after {
      display: block;
      position: absolute;
      top: 50%;
      right: -15px;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      line-height: 22px;
      border-radius: 50%;
      background-color: #fff;
      color: #c4c4c4;
      font-size: 30px;
    }
    &:nth-child(1)::after {
      content: '-';
    }
    &:nth-child(2)::after {
      content: '+';
    }
    &:last-child {
      .price {
        color: #eb5757;
      }
    }
  }
`;
