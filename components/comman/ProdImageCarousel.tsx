import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Navigation } from "swiper";
import type { SwiperOptions } from 'swiper/types';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/legacy/image';
import CommanBtn from './CommanBtn';

SwiperCore.use([Navigation]);

const ProdImageCarousel: React.FC = () => { 
    const swiperParams: SwiperOptions = {
        spaceBetween: 20,
        slidesPerView: 4,
        navigation: {
        prevEl: `.prodImage-swiper-button-prev`,
        nextEl: `.prodImage-swiper-button-next`,
        },
    }
  return (
    <>
        <div className="_img-car">
            <div className="_20iXm">
                <h3>BEST FOR THIS SUMMER</h3>
                <CommanBtn LinkTitle='View all' LinkUrl='#' />
            </div>
            <Swiper {...swiperParams}>
                <SwiperSlide>
                    <div className="_38x8">
                        <div className="_29xrk">
                            <Link href="#">
                                <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_38x8">
                        <div className="_29xrk">
                            <Link href="#">
                                <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_38x8">
                        <div className="_29xrk">
                            <Link href="#">
                                <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_38x8">
                        <div className="_29xrk">
                            <Link href="#">
                                <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_38x8">
                        <div className="_29xrk">
                            <Link href="#">
                                <Image src="/home/acs-img.avif" alt="" width={510} height={518} />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={`prodImage-swiper-button prodImage-swiper-button-prev`}>{<MdOutlineKeyboardArrowLeft />}</div>
            <div className={`prodImage-swiper-button prodImage-swiper-button-next`}>{<MdOutlineKeyboardArrowRight />}</div>
        </div>
        <style jsx>{`
        ._img-car {
            position: relative;
            padding: 15px 10px;
            background: #fff;
            margin: 15px 0;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,.18),0 1px 1px 0 rgba(0,0,0,.17);
          }
        ._20iXm {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
          }
        .prodImage-swiper-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, .8);
            color: #ff662a;
            font-size: 35px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 9;
            border-radius: 20px;
            display: block;
            border: 1px solid transparent;
          }
          .prodImage-swiper-button:hover {
            background: #fff;
            border: 1px solid #00518f;
          }
          .prodImage-swiper-button.swiper-button-disabled {
            display: none;
          }
          .prodImage-swiper-button-prev {
            left: 0;
            box-shadow: 2px 2px 12px rgba(0,0,0,.3);
          }
          .prodImage-swiper-button-next {
            right: 0;
            box-shadow: -2px 2px 12px rgba(0,0,0,.3);
          }
        `}</style>
    </>
  )
}

export default ProdImageCarousel;