import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: fit-content;
  cursor: pointer;
`;

export const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 auto;
  width: ${(props) => `calc(100% / ${props.$slidesPerView})`};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.$backgroundColor};
`;

export const SlideImage = styled.div`
  width: 200px;
  height: 300px;

  margin: 20px 0;
`;

export const SlideImageContent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const SlideContent = styled.div`
  text-align: center;
  margin-bottom: 20px;
  max-width: 100%;
`;

export const SlideTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const SlideDescription = styled.div`
  margin-top: 0.5rem;
`;

export const SlideInfo = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;
  padding: 10px;
  color: #444;
`;

export const SlideIndex = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: rgb(0, 0, 0, 0.4);
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideControls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const ControlButton = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  border: none;
  font-size: 27px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const SlideIndicators = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IndicatorButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.2)')};
  margin: 0 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
