import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Navigation } from "swiper";
import type { SwiperOptions } from 'swiper/types';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/legacy/image';
import CommanBtn from '../comman/CommanBtn';

SwiperCore.use([Navigation]);

interface ProductCarouselProps {
  BtnProps: string;
}

const DeskProductCarousel: React.FC<ProductCarouselProps> = ({ BtnProps }) => {
  const swiperParams: SwiperOptions = {
    breakpoints: {
        800: {
          slidesPerView: 2.6,
          spaceBetween: 20,
        }, 
        900: {
          slidesPerView: 2.8,
          spaceBetween: 20,
        }, 
        1000: {
          slidesPerView: 3.3,
          spaceBetween: 20,
        }, 
        1100: {
          slidesPerView: 3.8,
          spaceBetween: 30,
        }, 
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        }, 
      },
    navigation: {
      prevEl: `.${BtnProps}-swiper-button-prev`,
      nextEl: `.${BtnProps}-swiper-button-next`,
    },
  };

  return (
    <>
    <style jsx>{`
    .${BtnProps}-swiper-button {
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
      opacity: 1;
      visibility: visible;
      transition: background .3s;
    }
    .${BtnProps}-swiper-button:hover {
      background: #fff;
    }
    .${BtnProps}-swiper-button.swiper-button-disabled {
      opacity: 0;
      visibility: hidden;
    }
    .${BtnProps}-swiper-button-prev {
      left: 0;
      border-top-right-radius: 5px;
      box-shadow: 2px 0 10px rgba(0,0,0,.2);
      border-bottom-right-radius: 5px;
    }
    .${BtnProps}-swiper-button-next {
      right: 0;
      box-shadow: -2px 0 10px rgba(0,0,0,.2);
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .pro-item-inner-box {
      background: #fff;
      padding: 8px 12px;
      box-shadow: 0 2px 5px rgba(0,0,0,.2);
      border-radius: 2px;
      overflow: hidden;
    }
    .pro-item-inner-box .inner-item .img-box {
      height: 150px;
      padding: 0;
      overflow: hidden;
      text-align: center;
      line-height: 150px;
      width: 100%;
      transition: scale 0.3s;
    }
    .pro-item-inner-box .inner-item .img-box:hover {
      transform: scale(1.05);
    }
    .pro-item-inner-box .inner-item .img-inn {
      text-align: center;
      height: 100%;
    }
    .pro-item-inner-box .inner-item .img-inn img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .pro-item-inner-box .info .title {
      height: 45px;
      overflow: hidden;
      font-size: 15px;
      font-weight: 500;
      color: #333;
    } 
    .pro-item-inner-box .info .title:hover {
      color: #00518f;
    }
    .pro-item-inner-box .info .price-offer {
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin: 5px 0 13px;
      
    } 
    .pro-item-inner-box .info .price-offer .mrp {
      font-weight: 400;
      font-size: 15px;
      padding: 3px 5px;
      text-decoration: line-through;
      color: #848383;
    }
    .pro-item-inner-box .info .price-offer .offer {
      color: #03753c;
      background: #e5f7ee;
      padding: 3px 5px;
      border-radius: 3px;
      font-size: 16px;
      font-weight: 600;
    }
    .pro-item-inner-box .info .provider-price li {
      display: flex;
      justify-content: space-between;
      margin: 7px 0 2px;
      align-items: center;
      height: 37px;
      transition: background 0.3s;
    }
    .pro-item-inner-box .info .provider-price li:hover {
      background: #dddddd63;
    }
    .pro-item-inner-box .info .provider-price li .pro-price {
      color: #ff662a;
      font-size: 15px;
      font-weight: 600;
    }
    .pro-item-inner-box .info .provider-price li img {
      max-width: 90px;
    }
    .pro-item-inner-box .info .view-offer {
      text-align: center;
      background: #00518f;
      color: #fff;
      border-radius: 3px;
      padding: 6px;
      margin: 8px 0;
      font-size: 15px;
      font-weight: 400;
      cursor: pointer;
    }
    .header-title-prod {
      display: flex;
      justify-content: space-between;
      padding: 13px 5px 8px;
    }
    .header-title-prod .title {
      font-size: 16px;
      font-weight: 600;
      color: #000;
      text-transform: uppercase;
      letter-spacing: normal;
      width: calc(100% - 90px);
    }
    .header-title-prod .view-all-btn {
      display: inline-block;
      line-height: 15px;
      color: #ff662a;
      font-size: 14px;
      padding: 4px 10px;
      font-weight: 600;
      text-decoration: none;
    }
    .header-title-prod .view-all-btn:hover {
      text-decoration: underline;
    }
    @media only screen and (max-width: 767px) {
      .desk-product-carousel {
        display: none;
      }
    }
    `}</style>
    <div style={{ position: 'relative', }} className='desk-product-carousel'>
    <div className="header-title-prod">
      <span className="title">Up Comming Products</span>
      <CommanBtn LinkTitle="View all" LinkUrl="#" />
    </div>
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <div className="pro-item-inner-box">
          <div className="inner-item">
            <Link href='#'>
              <div className="img-box">
                <div className="img-inn">
                  {/* <Image src={'/home/laptop.jpg'} layout='responsive' alt='laptop image' width={200} height={150} /> */}
                  <img src='/home/laptop.jpg' alt='product' />
                </div>
              </div>
            </Link>
            <div className="info">
              <Link href='#'>
                <div className="title">
                ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020
                </div>
              </Link>
              <div className="price-offer">
                <span className="mrp">₹33990</span>
                <span className="offer">25% Off</span>
              </div>
              <ul className="provider-price">
                <li>
                  <span className="pro-price">₹28990</span>
                  <Link href="#">
                    <img src="/home/flipkart-logo.png" alt="flipkar" />
                  </Link>
                </li>
                <li>
                  <span className="pro-price">₹29990</span>
                  <Link href="#">
                    <img src="/home/amazon-logo.png" alt="amazon" />
                  </Link>
                </li>
              </ul>
              <div className="view-offer">
                <Link href="#">View Offer</Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pro-item-inner-box">
          <div className="inner-item">
            <Link href='#'>
              <div className="img-box">
                <div className="img-inn">
                  {/* <Image src={'/home/laptop.jpg'} layout='responsive' alt='laptop image' width={200} height={150} /> */}
                  <img src='/home/laptop.jpg' alt='product' />
                </div>
              </div>
            </Link>
            <div className="info">
              <Link href='#'>
                <div className="title">
                ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020
                </div>
              </Link>
              <div className="price-offer">
                <span className="mrp">₹33990</span>
                <span className="offer">25% Off</span>
              </div>
              <ul className="provider-price">
                <li>
                  <span className="pro-price">₹28990</span>
                  <Link href="#">
                    <img src="/home/flipkart-logo.png" alt="flipkar" />
                  </Link>
                </li>
                <li>
                  <span className="pro-price">₹29990</span>
                  <Link href="#">
                    <img src="/home/amazon-logo.png" alt="amazon" />
                  </Link>
                </li>
              </ul>
              <div className="view-offer">
                <Link href="#">View Offer</Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pro-item-inner-box">
          <div className="inner-item">
            <Link href='#'>
              <div className="img-box">
                <div className="img-inn">
                  {/* <Image src={'/home/laptop.jpg'} layout='responsive' alt='laptop image' width={200} height={150} /> */}
                  <img src='/home/laptop.jpg' alt='product' />
                </div>
              </div>
            </Link>
            <div className="info">
              <Link href='#'>
                <div className="title">
                ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020
                </div>
              </Link>
              <div className="price-offer">
                <span className="mrp">₹33990</span>
                <span className="offer">25% Off</span>
              </div>
              <ul className="provider-price">
                <li>
                  <span className="pro-price">₹28990</span>
                  <Link href="#">
                    <img src="/home/flipkart-logo.png" alt="flipkar" />
                  </Link>
                </li>
                <li>
                  <span className="pro-price">₹29990</span>
                  <Link href="#">
                    <img src="/home/amazon-logo.png" alt="amazon" />
                  </Link>
                </li>
              </ul>
              <div className="view-offer">
                <Link href="#">View Offer</Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pro-item-inner-box">
          <div className="inner-item">
            <Link href='#'>
              <div className="img-box">
                <div className="img-inn">
                  {/* <Image src={'/home/laptop.jpg'} layout='responsive' alt='laptop image' width={200} height={150} /> */}
                  <img src='/home/laptop.jpg' alt='product' />
                </div>
              </div>
            </Link>
            <div className="info">
              <Link href='#'>
                <div className="title">
                ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020
                </div>
              </Link>
              <div className="price-offer">
                <span className="mrp">₹33990</span>
                <span className="offer">25% Off</span>
              </div>
              <ul className="provider-price">
                <li>
                  <span className="pro-price">₹28990</span>
                  <Link href="#">
                    <img src="/home/flipkart-logo.png" alt="flipkar" />
                  </Link>
                </li>
                <li>
                  <span className="pro-price">₹29990</span>
                  <Link href="#">
                    <img src="/home/amazon-logo.png" alt="amazon" />
                  </Link>
                </li>
              </ul>
              <div className="view-offer">
                <Link href="#">View Offer</Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pro-item-inner-box">
          <div className="inner-item">
            <Link href='#'>
              <div className="img-box">
                <div className="img-inn">
                  {/* <Image src={'/home/laptop.jpg'} layout='responsive' alt='laptop image' width={200} height={150} /> */}
                  <img src='/home/laptop.jpg' alt='product' />
                </div>
              </div>
            </Link>
            <div className="info">
              <Link href='#'>
                <div className="title">
                ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020
                </div>
              </Link>
              <div className="price-offer">
                <span className="mrp">₹33990</span>
                <span className="offer">25% Off</span>
              </div>
              <ul className="provider-price">
                <li>
                  <span className="pro-price">₹28990</span>
                  <Link href="#">
                    <img src="/home/flipkart-logo.png" alt="flipkar" />
                  </Link>
                </li>
                <li>
                  <span className="pro-price">₹29990</span>
                  <Link href="#">
                    <img src="/home/amazon-logo.png" alt="amazon" />
                  </Link>
                </li>
              </ul>
              <div className="view-offer">
                <Link href="#">View Offer</Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pro-item-inner-box">
          <div className="inner-item">
            <Link href='#'>
              <div className="img-box">
                <div className="img-inn">
                  {/* <Image src={'/home/laptop.jpg'} layout='responsive' alt='laptop image' width={200} height={150} /> */}
                  <img src='/home/laptop.jpg' alt='product' />
                </div>
              </div>
            </Link>
            <div className="info">
              <Link href='#'>
                <div className="title">
                ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020
                </div>
              </Link>
              <div className="price-offer">
                <span className="mrp">₹33990</span>
                <span className="offer">25% Off</span>
              </div>
              <ul className="provider-price">
                <li>
                  <span className="pro-price">₹28990</span>
                  <Link href="#">
                    <img src="/home/flipkart-logo.png" alt="flipkar" />
                  </Link>
                </li>
                <li>
                  <span className="pro-price">₹29990</span>
                  <Link href="#">
                    <img src="/home/amazon-logo.png" alt="amazon" />
                  </Link>
                </li>
              </ul>
              <div className="view-offer">
                <Link href="#">View Offer</Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className={`${BtnProps}-swiper-button ${BtnProps}-swiper-button-prev`}>{<MdOutlineKeyboardArrowLeft />}</div>
        <div className={`${BtnProps}-swiper-button ${BtnProps}-swiper-button-next`}>{<MdOutlineKeyboardArrowRight />}</div>
    </div>
    </>
  );
};

export default DeskProductCarousel;
