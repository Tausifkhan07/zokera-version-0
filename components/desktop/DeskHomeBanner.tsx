import React from 'react';
import Image from 'next/legacy/image';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

interface BannerProps {
  id: number;
  image: string;
  alt: string;
}

interface DeskBannerProps {
  DeskBannerImg: BannerProps[];
}

SwiperCore.use([Navigation, Pagination, Autoplay]);

const DeskHomeBanner: React.FC<DeskBannerProps> = ({ DeskBannerImg }) => {
  const swiperOptions: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      clickable: true,
    },
    navigation: {
      prevEl: '.custom-swiper-button-prev',
      nextEl: '.custom-swiper-button-next',
    },
  };

  return (
    <>
      <style jsx>{`
       .custom-swiper-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 60px;
        background-color: rgba(255, 255, 255, .8);
        color: #ff662a;
        font-size: 35px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 9;
        transition: background .3s;
      }
      .custom-swiper-button:hover {
        background: #fff;
      }
      .custom-swiper-button-prev {
        left: 0;
        border-top-right-radius: 5px;
        box-shadow: 2px 0 10px rgba(0,0,0,.2);
        border-bottom-right-radius: 5px;
      }
      .custom-swiper-button-next {
        right: 0;
        box-shadow: -2px 0 10px rgba(0,0,0,.2);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      @media only screen and (max-width: 767px) {
        .desk-home-banner {
          display: none;
        }
      }
      `}</style>
    <div style={{ position: 'relative', paddingTop: '5px' }} className='desk-home-banner'>
        <Swiper {...swiperOptions}>
          {DeskBannerImg.map(({ id, image, alt }) => (
            <SwiperSlide key={id}>
              <Link href='#'>
                <Image src={image} alt={alt} width={828} height={368} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-button custom-swiper-button-prev">{<MdOutlineKeyboardArrowLeft />}</div>
        <div className="custom-swiper-button custom-swiper-button-next">{<MdOutlineKeyboardArrowRight />}</div>
    </div>
    </>
  );
};

export default DeskHomeBanner;
