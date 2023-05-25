import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid } from "swiper";
import type { SwiperOptions } from 'swiper/types';
import Link from 'next/link';
import Image from 'next/legacy/image';

SwiperCore.use([Grid]);

const MobProductGridCarousel: React.FC = () => {
  const swiperParams: SwiperOptions = {
    spaceBetween: 15,
    // centeredSlides: true,
    // grabCursor: true,
    // slidesPerGroupSkip: 2,
    // slidesPerGroup: 2,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 1.1,
        },
        500: {
          slidesPerView: 1.2,
        },
        600: {
          slidesPerView: 1.3,
        },
        700: {
          slidesPerView: 1.4,
        },
      }
  };

  return (
    <>
    <style jsx>{`
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
        margin-bottom: 15px;
      }
      .title-cont .title {
        font-weight: 600;
        width: calc(100% - 80px);
        letter-spacing: normal;
      }
      .title-cont .view-all-btn {
        display: inline-block;
        line-height: 15px;
        background-color: #ff662a;
        color: #fff;
        border-radius: 3px;
        font-size: 12px;
        padding: 8px 14px;
        font-weight: 500;
      }
      .title-cont .view-all-btn:hover {
        text-decoration: underline;
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
        color: #ff662a;
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
      @media only screen and (min-width: 768px) {
        .mob-product-grid-carousel {
          display: none;
        }
      }
    `}</style>
    <div className="mob-product-grid-carousel">
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <div className="product-grid-box">
            <div className="title-cont">
                <span className="title">Top selling brand</span>
                <span className="view-all-btn"><Link href="/laptops">View All</Link></span>
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
                <span className="view-all-btn"><Link href="#">View All</Link></span>
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
                <span className="view-all-btn"><Link href="#">View All</Link></span>
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
    </div>
    </>
  );
};

export default MobProductGridCarousel;
