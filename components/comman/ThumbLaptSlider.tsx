import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Controller } from 'swiper';
import type { SwiperOptions } from 'swiper';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

SwiperCore.use([Navigation, Thumbs, Controller]);

interface SwiperSliderProps {
  images: string[];
}
type SwiperController = {
  goTo(index: number): void;
};

const ThumbLaptSlider: React.FC<SwiperSliderProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | undefined>(undefined);
  const swiperRef = useRef<SwiperCore | any>(null);

  const handleThumbClick = (index: number) => {
    if (thumbsSwiper && thumbsSwiper.controller) {
      const control = thumbsSwiper.controller as SwiperController;
      if (control && control.goTo) { // Check if the `goTo` method is available
        control.goTo(index);
      }
    }
  };

  const swiperParams: SwiperOptions = {
    spaceBetween: 12,
    slidesPerView: 1,
    thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }
  };

  const thumbParams: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
      prevEl: `.thumb-swiper-button-prev`,
      nextEl: `.thumb-swiper-button-next`,
    },
  };

  return (
    <>
      <style jsx>{`
    .laptop-thum-sider {
      padding: 12px;
    }
    .laptop-thum-sider ._img-slide {
      width: 100%;
      height: 385px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .laptop-thum-sider ._img-slide ._img {
      width: 100%;
      height: 380px;
      object-fit: contain;
    }
    .laptop-thum-sider ._thumb-slide {
      width: 100px;
      height: 100px;
      padding: 10px 6px;
    }
    .laptop-thum-sider ._thumb-slide ._thumb_img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 3px;
      border: 1px solid rgba(0,0,0,.1);
      border-radius: 4px;
    }
    .laptop-thum-sider .swiper-slide-active ._thumb_img {
      border-color: #00518f;
    }
    .laptop-thum-sider .thumb-arrow-bt {
      position: relative;
    }
    .thumb-arrow-bt .thumb-swiper-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 9;
      width: 20px;
      height: 20px;
      background: #00518f;
      color: #fff;
      line-height: 25px;
      font-size: 18px;
      border-radius: 22px;
      display: block;
    }
    .thumb-arrow-bt .thumb-swiper-button-prev {
      left: 0;
    }
    .thumb-arrow-bt .thumb-swiper-button-next {
      right: 0;
    }
    .thumb-arrow-bt .thumb-swiper-button-prev.swiper-button-disabled, .thumb-arrow-bt .thumb-swiper-button-next.swiper-button-disabled {
      display:none;
    }
    @media only screen and (max-width: 768px) {
      .laptop-thum-sider {
        padding: 0;
      }
    }
    `}</style>

      <div className='laptop-thum-sider'>
        <Swiper {...swiperParams} ref={swiperRef}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="_img-slide">
                <img className='_img' src={image} alt={`Slide ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="thumb-arrow-bt">
          <Swiper {...thumbParams} onSwiper={setThumbsSwiper}>
            {images.map((image, index) => (
              <SwiperSlide key={index} onClick={() => handleThumbClick(index)}>
                <div className="_thumb-slide">
                  <img className='_thumb_img' src={image} alt={`Thumb ${index}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`thumb-swiper-button thumb-swiper-button-prev`}>{<MdOutlineKeyboardArrowLeft />}</div>
          <div className={`thumb-swiper-button thumb-swiper-button-next`}>{<MdOutlineKeyboardArrowRight />}</div>
        </div>
      </div>
    </>
  );
};

export default ThumbLaptSlider;
