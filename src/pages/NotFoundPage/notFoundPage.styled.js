import styled, { keyframes } from 'styled-components';

const ani = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const NotFound = styled.div`
  height: calc(100% - 100px);
  padding: 40px 0 50px;
  text-align: center;

  .iconArea {
    color: #434343;
    font-size: 90px;

    svg {
      margin-right: 20px;
      font-size: 80px;
      animation: ${ani} 6s linear infinite;
    }
  }

  p {
    margin-top: 30px;
    color: #434343;
    font-size: 20px;
    font-weight: bold;
  }
`;
