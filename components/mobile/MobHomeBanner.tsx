import Image from 'next/legacy/image';
import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

interface BannerProps {
  id: number;
  image: string;
  alt: string;
}

interface MobHomeBannerProps {
   MobBannerImg: BannerProps[];
}

SwiperCore.use([Pagination, Autoplay]);

const MobHomeBanner: React.FC<MobHomeBannerProps> = ({ MobBannerImg }) => {
  const swiperOptions: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <>
    <style jsx>{`
    @media only screen and (min-width: 768px) {
      .mob-home-banner {
        display: none;
      }
    }
    `}</style>
    <div className="mob-home-banner">
    <Swiper {...swiperOptions}>
        {MobBannerImg.map(({ id, image, alt }) => (
        <SwiperSlide key={id}>
            <Image src={image} alt={alt} layout='responsive' width={828} height={368} />
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
    </>
  );
};

export default MobHomeBanner;
