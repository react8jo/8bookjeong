import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../assets/style/globalStyle.styled';

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const shippingInfo = styled.div`
  border-top: 1px solid #ddd;

  li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;

    .cell {
      padding: 8px 10px;

      &:nth-child(1) {
        flex-shrink: 0;
        width: 100px;
      }
      &:nth-child(2) {
        flex-grow: 1;
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
  }

  @media screen and (max-width: 768px) {
    border-top: 0;

    li {
      flex-direction: column;
      align-items: flex-start;
      border: 0;

      .cell {
        padding: 8px 0;
        width: 100%;

        .phone {
          input {
            width: 28.9%;
          }
        }
      }

      .fixed {
        width: 100%;
      }
      .buttonSet {
        input {
          width: calc(100% - 140px);
        }
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
  }

  .body {
    li {
      position: relative;
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid #ddd;

      .imgArea {
        position: relative;
        width: 100px;

        img {
          width: 100%;
        }
      }

      .InfoArea {
        display: flex;
        flex-grow: 1;
        padding-left: 20px;
        align-items: center;

        > div:nth-child(2),
        > div:nth-child(3),
        > div:nth-child(4) {
          padding: 0 10px;
          text-align: center;
        }

        > div:nth-child(2) {
          width: 150px;
        }
        > div:nth-child(3) {
          width: 150px;
          color: #8e8e8e;
        }
        > div:nth-child(4) {
          width: 200px;

          .price {
            font-weight: bold;
          }
        }

        .bookInfo {
          flex-grow: 1;
          position: relative;

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
      }

      .m {
        display: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .body {
      li {
        padding: 25px 0 15px;
        margin-bottom: 10px;

        flex-direction: column;

        .imgArea {
          width: auto;
          padding: 0;
          text-align: center;

          input[type='checkbox'] {
            top: -15px;
            left: 0;
            transform: inherit;
          }
        }
        .InfoArea {
          flex-direction: column;
          padding-left: 0;

          > div:nth-child(2),
          > div:nth-child(3),
          > div:nth-child(4) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 1rem 0;
            width: 100%;
            background-color: #eee;
          }
          > div:nth-child(2) {
            border-radius: 4px 4px 0 0;
          }
          > div:nth-child(4) {
            padding-bottom: 20px;
            border-radius: 0 0 4px 4px;
          }
          .bookInfo {
            padding: 20px 1rem 0;
            width: 100%;
            padding-bottom: 15px;
          }
        }

        .m {
          display: inline-block;
          color: #8e8e8e;
          font-size: 12px;
          margin-right: 10px;
        }
      }
    }
  }
`;

export const Total = styled.p`
  margin-top: 30px;
  text-align: right;

  span {
    display: inline-block;
    margin-left: 10px;
    color: ${secondaryColor};
    font-size: 25px;
    font-weight: bold;
  }
`;

export const PaymentType = styled.div`
  display: flex;

  .form-check-input:checked {
    background-color: ${primaryColor};
    border-color: ${primaryColor};
  }
  .form-check-input {
    margin-top: 0;
  }

  .payInfo {
    padding-left: 30px;

    .info {
      overflow: hidden;
      border: 2px solid ${secondaryColor};
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
              color: ${secondaryColor};
            }
          }
        }
      }
    }

    .check {
      padding: 20px 20px 0;
    }
  }

  .payType {
    flex-grow: 1;
    .typeList {
      padding: 15px 10px 8px;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .payType {
      .typeList {
        margin-top: -8px;
        padding-top: 10px;
        .form-check {
          width: 50%;
          margin: 8px 0 0;
        }
      }
    }

    .payInfo {
      padding-left: 0;
    }
    .check {
      button {
        width: 100%;
      }
    }
  }
`;
