import styled from 'styled-components';

export const AdBannerLayout = styled.div`
  background-color: #333;
  width: 100%;
  height: 10rem;
`;

export const BannerItem = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 10rem;
  padding: 1rem 2rem;
  position: relative;
`;
export const Ad = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: white;
  font-size: 10px;
  border: 1px solid white;
  box-sizing: border-box;
  padding: 2px;
  text-align: center;
`;

export const BannerCover = styled.img`
  width: 180px;
  height: auto;
  overflow: hidden;
  transform: rotate(40deg);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 140px;
  }
`;

export const BannerContent = styled.div`
  max-width: 45%;
  color: white;
  text-align: center;
`;

export const BannerTitle = styled.h3`
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const BannerDescription = styled.p`
  margin: 0;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
