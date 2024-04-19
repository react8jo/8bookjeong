import styled from 'styled-components';

export const ContentTitle = styled.h2`
  margin-bottom: 35px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.h3`
  margin: 40px 0 20px;
  font-size: 25px;
  font-weight: bold;

  &.line {
    margin-bottom: 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  &.sm {
    font-size: 18px;
    margin: 30px 0 10px;
  }
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

      &:nth-child(2) {
        width: 150px;
      }
      &:nth-child(3) {
        width: 150px;
      }
      &:nth-child(4) {
        width: 200px;
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;

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

        &:nth-child(2) {
          text-align: left;
          padding-left: 20px;
        }
        &:nth-child(4) {
          color: #8e8e8e;
        }

        img {
          width: 100%;
        }

        > .price {
          font-weight: bold;
        }
      }
    }
  }

  .bookInfo {
    height: 100%;

    .publisher {
      color: #8e8e8e;
      font-size: 13px;
    }
    .title {
      margin-top: 10px;
      font-size: 18px;
    }
    .count {
      margin-top: 15px;
      color: #8e8e8e;
      font-size: 13px;
    }
  }
`;

export const Total = styled.p`
  margin-top: 30px;
  text-align: right;

  span {
    display: inline-block;
    margin-left: 10px;
    color: #eb5757;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const ShippingForm = styled.table`
  width: 100%;
  table-layout: fixed;

  tbody {
    tr {
      td {
        padding: 8px 10px;
        vertical-align: middle;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;

        &:nth-child(4) {
          color: #8e8e8e;
        }

        img {
          width: 100%;
        }

        > .price {
          font-weight: bold;
        }
      }
    }
  }

  .bookInfo {
    height: 100%;

    .publisher {
      color: #8e8e8e;
      font-size: 13px;
    }
    .title {
      margin-top: 10px;
      font-size: 18px;
    }
    .count {
      margin-top: 15px;
      color: #8e8e8e;
      font-size: 13px;
    }
  }

  .fixed {
    width: 250px;
  }
  .buttonSet {
    input {
      display: inline-block;
      width: 250px;
    }
    button {
      margin-left: 8px;
    }
  }
  .phone {
    input {
      position: relative;
      display: inline-block;
      width: 115px;
    }

    span {
      display: inline-block;
      padding: 0 8px;
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

export const PaymentType = styled.div`
  display: flex;

  .form-check-input:checked {
    background-color: #899227;
    border-color: #899227;
  }
  .form-check-input {
    margin-top: 0;
  }

  .payInfo {
    padding-left: 30px;

    .info {
      overflow: hidden;
      border: 2px solid #899227;
      padding-bottom: 30px;
      border-radius: 10px;
      background-color: #f2f2f2;

      ul {
        background-color: #fff;
        padding: 30px 20px 0;

        li {
          display: flex;
          justify-content: space-between;
          padding-bottom: 13px;

          span:not(.unit):last-child {
            font-weight: bold;
          }
          .unit {
            display: inline-block;
            margin-left: 7px;
            color: #8e8e8e;
            font-size: 12px;
          }

          &.total {
            margin-top: 15px;
            padding: 25px 0;
            border-top: 1px solid #ddd;

            span:not(.unit):last-child {
              font-size: 23px;
            }
            span:last-child {
              color: #eb5757;
            }
          }
        }
      }
    }

    .check {
      padding: 20px 20px 0;
    }
  }
  .typeList {
    padding: 15px 10px 8px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
`;
