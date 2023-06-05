import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import CommanBtn from './CommanBtn';

SwiperCore.use([Navigation]);


const CategorySlider: React.FC = () => {
    const buttonPropsDemo = 'img_prod_Slider'
    const swiperParams: SwiperOptions = {
        spaceBetween: 0,
        slidesPerView: 7,
        navigation: {
            prevEl: `.${buttonPropsDemo}-swiper-button-prev`,
            nextEl: `.${buttonPropsDemo}-swiper-button-next`,
        }
    }
  return (
    <>
         <style jsx>{`
        .${buttonPropsDemo}-swiper-button {
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
          .${buttonPropsDemo}-swiper-button:hover {
            background: #fff;
            border: 1px solid #00518f;
          }
          .${buttonPropsDemo}-swiper-button.swiper-button-disabled {
            display: none;
          }
          .${buttonPropsDemo}-swiper-button-prev {
            left: 0;
            box-shadow: 2px 2px 12px rgba(0,0,0,.3);
          }
          .${buttonPropsDemo}-swiper-button-next {
            right: 0;
            box-shadow: -2px 2px 12px rgba(0,0,0,.3);
          }
          ._catog_carou_sld2x8 {
            position: relative;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,.18),0 1px 1px 0 rgba(0,0,0,.17);
            padding: 15px 10px;
            border-radius: 12px;
          }
          ._catog_carou_sld2x8 ._inner_box-c {
            display: flex;
            justify-content: center;
            background: #fff;
            border-radius: 5px;
            padding: 15px 1px;
            transition: all 0.3s;
            margin: 2px;
          }
          ._catog_carou_sld2x8 ._inner_box-c:hover {
            box-shadow: 0 0 4px rgba(0,0,0,.21);
          }

         ._catog_carou_sld2x8 ._inner_box-c figure {
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: center;
          }
          ._catog_carou_sld2x8 ._inner_box-c figure figcaption {
            margin-top: 15px;
            font-size: 22px;
            letter-spacing: .5px;
            font-weight: 500;
          }
          ._catog_carou_sld2x8 ._tit_Lin_2x8 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 8px;
          }
        `}</style>
        <div className="_catog_carou_sld2x8">
            <div className="_tit_Lin_2x8">
                <h4>SHOP BY BRAND</h4>
                <CommanBtn LinkTitle='View All' LinkUrl='#' />
            </div>
            <Swiper {...swiperParams}>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="_inner_box-c">
                        <Link href="#">
                            <figure>
                                <img src="/home/himalya150x150.webp" alt="himalya" />
                                <figcaption>Himalya</figcaption>
                            </figure>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={`${buttonPropsDemo}-swiper-button ${buttonPropsDemo}-swiper-button-prev`}>{<MdOutlineKeyboardArrowLeft />}</div>
            <div className={`${buttonPropsDemo}-swiper-button ${buttonPropsDemo}-swiper-button-next`}>{<MdOutlineKeyboardArrowRight />}</div>
        </div>
    </>
  )
}

export default CategorySlider