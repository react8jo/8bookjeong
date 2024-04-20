// AdBanner.jsx
import React from 'react';
import * as S from './adBanner.styled';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import prideAndPrejudice from '../../../assets/images/cover-prideandprejudice.jpeg';
import harryPotter from '../../../assets/images/cover-hp.jpeg';
import nineteenEightyFour from '../../../assets/images/cover-1984.jpeg';
import { useNavigate } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};

const adBanners = [
  {
    title: '오만과편견',
    description: '"서로 다른 둘의 오해와 편견을 넘어선 사랑 이야기"',
    imageUrl: prideAndPrejudice,
    backgroundColor: '#a61e4d',
    link: '/products/8937460882'
  },
  {
    title: '해리포터',
    description: '"죽음을 먹는 자들과 맞서 싸우는 한 소년의 이야기"',
    imageUrl: harryPotter,
    backgroundColor: '#653516',
    link: '/products/8983922575'
  },
  {
    title: '1984',
    description: '"반인권적 사회를 고발한 디스토피아 소설."',
    imageUrl: nineteenEightyFour,
    backgroundColor: '#1d50a1',
    link: '/products/8932040575'
  }
];

export default function AdBanner() {
  const navigate = useNavigate();

  const handleBannerClick = (link) => {
    navigate(link);
  };

  return (
    <S.AdBannerLayout>
      <Carousel
        responsive={responsive}
        infinite
        removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
        autoPlay={true}
        autoPlaySpeed={10000}>
        {adBanners.map((ad, index) => (
          <S.BannerItem key={index} backgroundColor={ad.backgroundColor} onClick={() => handleBannerClick(ad.link)}>
            <S.BannerContent>
              <S.BannerDescription>{ad.description}</S.BannerDescription>
              <S.BannerTitle>{ad.title}</S.BannerTitle>
            </S.BannerContent>
            <S.BannerCover src={ad.imageUrl} alt={ad.title} />
            <S.Ad>AD</S.Ad>
          </S.BannerItem>
        ))}
      </Carousel>
    </S.AdBannerLayout>
  );
}
