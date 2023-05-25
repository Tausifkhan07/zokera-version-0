import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Controller } from 'swiper';
import type { SwiperOptions } from 'swiper';

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
    spaceBetween: 20,
    slidesPerView: 1,
    thumbs: {
      swiper: thumbsSwiper,
      swiperRef: swiperRef,
    },
  };

  const thumbParams: SwiperOptions = {
    spaceBetween: 20,
    slidesPerView: 1,
  };

  return (
    <div>
      <Swiper {...swiperParams}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper {...thumbParams} onSwiper={setThumbsSwiper}>
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => handleThumbClick(index)}>
            <img src={image} alt={`Thumb ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbLaptSlider;
