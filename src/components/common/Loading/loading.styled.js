import styled, { keyframes } from 'styled-components';

const ani = keyframes`
  50%,100% {clip-path: inset(0 -20% 0 0)}
`;
export const IsLoading = styled.span`
  display: inline-grid;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:before,
  &:after {
    content: '';
    grid-area: 1/1;
    height: 27px;
    aspect-ratio: 5;
    --c: #d6e6f5 90deg, #0000 0;
    background:
      conic-gradient(from 135deg at top, var(--c)),
      conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
    background-size: 20% 50%;
    background-repeat: repeat-x;
    -webkit-mask: repeating-linear-gradient(90deg, #d6e6f5 0 10%, #0000 0 20%);
    clip-path: inset(0 100% 0 0);
    animation: ${ani} 1.5s infinite steps(6);
  }

  &:after {
    -webkit-mask: repeating-linear-gradient(90deg, #0000 0 10%, #000 0 20%);
    animation-delay: -0.75s;
  }
`;
