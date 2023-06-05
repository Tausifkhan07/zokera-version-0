import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Navigation, Pagination } from "swiper";
import type { SwiperOptions } from 'swiper/types';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import CommanBtn from '../comman/CommanBtn';

SwiperCore.use([Navigation, Grid, Pagination]);

const DeskNewsHomeSlider: React.FC = () => {
  const swiperParams: SwiperOptions = {
    // slidesPerView: 3,
    spaceBetween: 11,
    loop: false,
    pagination: false,
    breakpoints: {
      800: {
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      1000: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
    navigation: {
      prevEl: '.news-custom-swiper-button-prev',
      nextEl: '.news-custom-swiper-button-next',
    },
  };

  return (
    <>
    <style jsx>{`
    .news-custom-swiper-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background: #fff;
      color: #ff662a;
      font-size: 35px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 9;
      display: block;
      border-radius: 20px;
      border: 1px solid transparent;
    }
    .news-custom-swiper-button:hover {
      border: 1px solid #00518f;
    }
    .news-custom-swiper-button.swiper-button-disabled {
      display: none;
    }
    .news-custom-swiper-button-prev {
      left: 0;
      box-shadow: 2px 2px 12px rgba(0,0,0,.3);
    }
    .news-custom-swiper-button-next {
      right: 0;
      box-shadow: -2px 2px 12px rgba(0,0,0,.3);
    }
    .title-news-slider {
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 5px 0;
    }
    .title-news-slider .title {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: normal;
      color: #000;
      width: calc(100% - 110px);
      text-transform: uppercase;
    }
    .latest-news-box {
      position: relative;
      height: 122px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      overflow: hidden;
      transition: all 0.3s;
    }
    .latest-news-box::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: linear-gradient(to bottom,rgba(0,0,0,.1) 30%,rgba(0,0,0,.6) 70%);
      z-index: 1;
    }
    .latest-news-box .img-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: fill;
      z-index: -1
    }
    .latest-news-box .title {
      padding: 9px 4px;
      font-size: 15px;
      font-weight: 600;
      display: flex;
      align-items: flex-end;
      height: 100%;
      z-index: 2;
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      position: relative;
      transition: all 0.3s;
    }
    .latest-news-box:hover .img-box {
      transform: scale(1.2);
    }
    .latest-news-box:hover .title {
      color: #ff662a;
    }
    @media only screen and (max-width: 767px) {
      .news-home-banner {
        display: none;
      }
    }
    `}</style>
    <div style={{ position: 'relative' }} className='news-home-banner'>
    <div className="title-news-slider">
      <span className="title">Latest News</span>
      <CommanBtn LinkTitle="View all" LinkUrl="/hub" />
    </div>
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <figure className='latest-news-box'>            
              <div className='img-box'>
                <Image src='/home/latest-news.webp' alt='latest news' width={207} height={123} />
              </div>
              <figcaption className='title'>Latest Mobile Phone Which Should you Buy.</figcaption>             
          </figure>
        </Link>
      </SwiperSlide>
    </Swiper>
    <div className="news-custom-swiper-button news-custom-swiper-button-prev">{<MdOutlineKeyboardArrowLeft />}</div>
        <div className="news-custom-swiper-button news-custom-swiper-button-next">{<MdOutlineKeyboardArrowRight />}</div>
    </div>
    </>
  );
};

export default DeskNewsHomeSlider;
