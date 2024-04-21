import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../assets/style/globalStyle.styled';

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

  .form-check-input:checked {
    background-color: ${primaryColor};
    border-color: ${primaryColor};
  }

  @media screen and (max-width: 768px) {
    display: none;
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
      margin-top: 10px;
      padding: 15px 50px 15px 0;
      border: 1px solid #ddd;
      border-radius: 5px;

      .imgArea {
        position: relative;
        padding-left: 50px;
        width: 150px;

        input[type='checkbox'] {
          position: absolute;
          left: 17px;
          top: 50%;
          transform: translateY(-50%);
        }

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
        > div:nth-child(3) {
          padding: 0 10px;
          text-align: center;
        }

        > div:nth-child(2) {
          width: 150px;
        }
        > div:nth-child(3) {
          width: 200px;

          .price {
            color: ${secondaryColor};
            font-weight: bold;
            margin-bottom: 15px;
          }
        }
        .bookInfo {
          flex-grow: 1;
          position: relative;
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
            bottom: 0;
            left: 0;
            color: #8e8e8e;
            font-size: 12px;
          }
        }
      }

      .btn-close {
        position: absolute;
        right: 15px;
        top: 20px;
      }
      .m {
        display: none;
      }
      .form-check-input:checked {
        background-color: ${primaryColor};
        border-color: ${primaryColor};
      }
    }
  }

  @media screen and (max-width: 768px) {
    .body {
      li {
        padding: 25px 15px 20px;
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
          padding-top: 20px;
          padding-left: 0;

          > div:nth-child(2),
          > div:nth-child(3) {
            padding: 15px 0 0;
            width: 100%;
          }
          > div:nth-child(3) {
            padding-top: 20px;
            .price {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              font-size: 18px;

              .m {
                display: inline-block;
                color: #8e8e8e;
                font-size: 12px;
                margin-right: 10px;
              }
            }
            button {
              width: 100%;
            }
          }
          .bookInfo {
            width: 100%;
          }
        }

        .btn-close {
          right: 10px;
          top: 10px;
        }
      }
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
      line-height: 28px;
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
        color: ${secondaryColor};
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px 25px;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 7px;

      &:nth-child(2)::after,
      &:nth-child(1)::after {
        display: none;
      }

      &:nth-child(2),
      &:nth-child(3) {
        .price {
          position: relative;

          &::before {
            margin-right: 7px;
          }
        }
      }

      &:nth-child(2) {
        .price::before {
          content: '-';
        }
      }
      &:nth-child(3) {
        .price::before {
          content: '+';
        }
      }
      &:last-child {
        margin-top: 10px;
        padding-top: 15px;
        border-top: 1px solid #ddd;
      }

      .title {
        margin-bottom: 0;
      }
    }
  }
`;
