import styled, { keyframes } from 'styled-components';
import { primaryColor, secondaryColor } from '../../assets/style/globalStyle.styled';

const ani = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const NotFound = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 40px 0 50px;
  text-align: center;

  .iconArea {
    color: #434343;
    font-size: 90px;

    svg {
      margin: 0 10px;
      font-size: 80px;
      animation: ${ani} 6s linear infinite;
    }

    b {
      font-size: 104px;
      font-weight: bolder;
    }
  }

  p {
    margin-top: 15px;
    background-color: rgba(67, 67, 67, 0.15);
    border-radius: 4px;
    padding: 15px 30px;
    color: #434343;
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
