import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Navigation } from "swiper";
import type { SwiperOptions } from 'swiper/types';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/legacy/image';
import CommanBtn from '../comman/CommanBtn';

SwiperCore.use([Navigation, Grid]);

const DeskProductGridCarousel: React.FC = () => {
  const swiperParams: SwiperOptions = {
    // slidesPerView: 3,
    spaceBetween: 30,
    // loop: false,
    // pagination: false,
    // grid: {
    //   rows: 2,
    //   fill: "row",
    // },
    breakpoints: {
        768: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 2.3,
          spaceBetween: 25,
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
        1100: {
          slidesPerView: 2.8,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    navigation: {
      prevEl: '.prod-grid-swiper-button-prev',
      nextEl: '.prod-grid-swiper-button-next',
    },
  };

  return (
    <>
    <style jsx>{`
    .prod-grid-swiper-button {
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
    .prod-grid-swiper-button:hover {
      background: #fff;
    }
    .prod-grid-swiper-button.swiper-button-disabled {
      opacity: 0;
      visibility: hidden;
    }
    .prod-grid-swiper-button-prev {
      left: 0;
      border-top-right-radius: 5px;
      box-shadow: 2px 0 10px rgba(0,0,0,.2);
      border-bottom-right-radius: 5px;
    }
    .prod-grid-swiper-button-next {
      right: 0;
      box-shadow: -2px 0 10px rgba(0,0,0,.2);
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .product-grid-box {
        background: #fff;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 5px rgba(0,0,0,.2);
        width: 100%;
        height: 100%;
    }
    .product-grid-box .product-inner-box {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 10px;
      }
      .title-cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .title-cont .title {
        font-weight: 600;
        width: calc(100% - 80px);
        letter-spacing: normal;
        color: #000;
        font-size: 16px;
        text-transform: uppercase;
      }
      .product-grid-box .product-inner-box .product-box {
        width: 100%;
        height: 100%;
        padding: 3px 12px 3px 3px;
        text-align: center;
        transition: all 0.3s;
      }
      .product-grid-box .product-inner-box .product-box:hover .img-box {
        transform: scale(1.02);
      }
      .product-grid-box .product-inner-box .product-box:hover .title-box {
        color: #00518f;
      }
      .product-grid-box .product-inner-box .img-box {
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 3px
      }
      .product-grid-box .product-inner-box .title-box {
        font-size: 17px;
        letter-spacing: normal;
        font-weight: 400; 
      }
      @media only screen and (max-width: 767px) {
        .desk-product-grid-carousel {
          display: none;
        }
      }
    `}</style>
     <div style={{ position: 'relative', }} className='desk-product-grid-carousel'>
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <div className="product-grid-box">
            <div className="title-cont">
                <span className="title">Top selling brand</span>
                <CommanBtn LinkTitle="View all" LinkUrl="/laptops" />
            </div>
            <div className='product-inner-box'>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
            
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-grid-box">
            <div className="title-cont">
                <span className="title">Top selling brand</span>
                <CommanBtn LinkTitle="View all" LinkUrl="/laptops" />
            </div>
            <div className='product-inner-box'>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
            
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-grid-box">
            <div className="title-cont">
                <span className="title">Top selling brand</span>
                <CommanBtn LinkTitle="View all" LinkUrl="/laptops" />
            </div>
            <div className='product-inner-box'>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
            
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-grid-box">
            <div className="title-cont">
                <span className="title">Top selling brand</span>
                <CommanBtn LinkTitle="View all" LinkUrl="/laptops" />
            </div>
            <div className='product-inner-box'>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
            
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-grid-box">
            <div className="title-cont">
                <span className="title">Top selling brand</span>
                <CommanBtn LinkTitle="View all" LinkUrl="/laptops" />
            </div>
            <div className='product-inner-box'>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
                <div className="product-box">
                    <Link href='#'>
                        <div className="img-box">
                            <Image src={'/home/product-carousel.avif'} layout='responsive' alt='product image' width={177} height={134} />
                        </div>
                        <div className="title-box">realme Smartphones</div>
                    </Link>
                </div>
            
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="prod-grid-swiper-button prod-grid-swiper-button-prev">{<MdOutlineKeyboardArrowLeft />}</div>
        <div className="prod-grid-swiper-button prod-grid-swiper-button-next">{<MdOutlineKeyboardArrowRight />}</div>
    </div>
    </>
  );
};

export default DeskProductGridCarousel;
