import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 auto;
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const SlideImage = styled.div`
  width: 200px;
  height: 300px;
  margin-right: 20px;
`;

export const SlideImageContent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const SlideContent = styled.div`
  text-align: left;
`;

export const SlideTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SlideDescription = styled.div`
  margin-top: 0.5rem;
`;

export const SlideInfo = styled.div`
  font-size: 1rem;
  color: #777;
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
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
`;

export const SlideIndicators = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const IndicatorButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  margin: 0 4px;
  border: none;
  cursor: pointer;
`;
