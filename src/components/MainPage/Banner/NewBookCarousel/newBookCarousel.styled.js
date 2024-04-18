import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 400px;
  cursor: pointer;
`;

export const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

export const SlideImage = styled.div`
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  padding: 0 4rem;
`;

export const SlideContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  left: 0;
  padding: 3rem 4rem;
  height: 100%;
  background: linear-gradient(270deg, ${(props) => props.backgroundColor}, rgba(0, 0, 0, 0.8));
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 50%;
`;

export const SlideTitle = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`;

export const SlideImageContent = styled.div`
  width: 200px;
  height: 300px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: 6rem;
`;
export const SlideDescription = styled.div`
  margin-top: 0.5rem;
`;

export const SlideIndex = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 0.8rem;
  background-color: rgb(255, 255, 255, 0.4);
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideInfo = styled.div`
  font-size: 0.8rem;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
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
