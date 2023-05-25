import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Pagination } from "swiper";
import type { SwiperOptions } from 'swiper/types';
import Link from 'next/link';
import Image from 'next/image';

SwiperCore.use([Grid, Pagination]);

const MobNewsHomeSlider: React.FC = () => {
  const swiperParams: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 11,
    loop: false,
    pagination: false,
    grid: {
      rows: 2,
      fill: "row",
    },
  };

  return (
    <>
    <style jsx>{`
    .title-news-slider {
      width: 100%;
      height: 30px;
      background: #fff;
      line-height: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 5px 0;
      margin-bottom: 10px;
    }
    .title-news-slider .title {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: .1px;
      color: #212121;
    }
    .title-news-slider .news-view-all-btn {
      font-size: 14px;
      font-weight: 600;
      background: #ff662a;
      display: block;
      padding: 7px 10px;
      color: #fff;
      border-radius: 2px;
      box-shadow: 0 0 10px rgba(0,0,0,.1);
      letter-spacing: .1px;
      margin-top: 2px;
    }
    .latest-news-box {
      position: relative;
      height: 123px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      overflow: hidden;
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
    }
    @media only screen and (min-width: 768px) {
      .mob-news-home-slider {
        display: none;
      }
    }
    `}</style>
    <div className="mob-news-home-slider">
    <div className="title-news-slider">
      <span className="title">Latest News</span>
      <span className="news-view-all-btn"><Link href='/hub'>View All</Link></span>
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
    </Swiper>
    </div>
    </>
  );
};

export default MobNewsHomeSlider;
