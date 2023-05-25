import Link from 'next/link';
import React from 'react';
import { AiOutlineDatabase } from 'react-icons/ai';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { GiComputerFan, GiProcessor } from 'react-icons/gi';
import { MdBatteryCharging30, MdOutlineDesktopAccessDisabled, MdOutlineKeyboardDoubleArrowRight, MdOutlineSdStorage } from 'react-icons/md';
import CommanBtn from '../comman/CommanBtn';

const MobLaptopListing = () => {
  return (
    <>
     <style jsx>{`
     .laptop-container {
        background: #fff;
        width: 100%;
        height: 100%;
     }
     .laptop-container .product-inner {
        border-bottom: 1px solid #ddd;
        margin-bottom: 8px;
     }
     .laptop-container .inner-box {
        padding: 8px 12px;
        display: flex;
        flex-wrap: wrap;
     }
     .laptop-container .inner-box .left {
        width: 100px;
        height: 130px;
        padding-right: 8px;
     }
     .laptop-container .left .img-box {
        width: 95%;
        height: 98%;
        display: flex;
        align-items: center;
        margin-top: 12px;
        margin-bottom: 12px;
     }
     .laptop-container .left .img-box .img {
        width: 100%;
        height: 100%;
        object-fit: contain;
     }
     .laptop-container .inner-box .right {
        flex: 0 0 calc(100% - 100px);
        position: relative;
     }
     .laptop-container .inner-box .right .title {
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
        margin-bottom: 10px;
     }
     .laptop-container .inner-box .right .price-buy {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
     }
     .laptop-container .inner-box .right .price-buy .provider {
        width: 22px;
        margin: 3px 21px 0 auto;
        object-fit: contain;
     }
     .laptop-container .inner-box .right .price {
        color: #ff662a;
        font-size: 15px;
        font-weight: 500;
     }
     .laptop-container .inner-box .right .buy {
        background: #00518f;
        color: #fff;
        padding: 3px 12px;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        margin-right: 8px;
     }
     .laptop-container .inner-box .right .review-star {
        margin-bottom: 8px;
     }
     .laptop-container .inner-box .right .review-star .icon {
        font-size: 13px;
        color: #03753c;
        padding: 3px 3px;
        background: #e5f7ee;
     }
     .laptop-container .inner-box .right .review-star .numb {
        font-size: 15px;
        padding: 1px 7px;
     }
     .laptop-container .inner-box .right .key-point .icon {
      color: #00518f;
      margin-right: 7px;
    }
     .laptop-container .inner-box .right .key-point li  {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 1px;
    }
    .laptop-container .inner-box .right .key-point li .name {
      font-size: 12px;
      font-weight: 400;
      flex: 0 0 calc(100% - 20px;)
    }
    .laptop-container .inner-box .left .compare {
      margin-top: 20px;
      font-size: 13px;
      background: transparent;
      border: 1px solid #ddd;
      padding: 3px 8px;
      border-radius: 15px;
      color: #ff662a;
      cursor: pointer;
    }
    .laptop-container .inner-box .right .see-details {
        position: absolute;
        bottom: -7px;
        right: 3px;
        font-size: 13px;
        letter-spacing: -.1px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ff662a;
        z-index: 3;
      }
    .laptop-container .inner-box .right .see-details .dbl-arrow {
        font-size: 20px;
        margin-top: 8px;
      }
      @media only screen and (min-width: 768px) {
        .laptop-container {
          display: none;
        }
      }
     `}</style>
     <div className="laptop-container">
        <div className="product-inner">
            <div className="inner-box">
                <div className="left">
                    <div className="img-box">
                        <Link href="/laptops/laptopDetail">
                        <img className="img" src="/laptops/laptop-img.webp" alt="laptop" />
                        </Link>
                    </div>
                    <button className="compare">+ Compare</button>
                </div>
                <div className="right">
                    <div className="title">
                    <Link href="/laptops/laptopDetail">SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB</Link>
                    </div>
                    <div className="review-star">
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarHalf /></span>
                        <span className="numb">(1508)</span>
                    </div>
                    <div className="price-buy">
                        <span className="price">₹33990</span>
                        <img className="provider" src="/laptops/amazon-icon-logo.png" alt="amazon" />
                        <span className="buy">
                            <Link href="#" target="_blank">Buy</Link>
                        </span>
                    </div>
                    <ul className="key-point">
                        <li>
                            <span className="icon">
                                <GiProcessor />
                            </span>
                            <span className="name">
                            Intel Celeron N4500, 2.8 Ghz Processor
                            </span>
                        </li>
                        <li>
                            <span className="icon">
                                <AiOutlineDatabase />
                            </span>
                            <span className="name">8 GB DDR4 RAM | 32 GB Expandable</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineSdStorage />
                            </span>
                            <span className="name">256 GB SSD Storage</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineDesktopAccessDisabled />
                            </span>
                            <span className="name">15.6″ (39.62 cm) Display</span>
                        </li>
                        <li>
                            <span className="icon">
                                <GiComputerFan />
                            </span>
                            <span className="name">AMD Radeon Graphic Processor</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdBatteryCharging30 />
                            </span>
                            <span className="name">65W Adapter</span>
                        </li>
                    </ul>
                    <div className="see-details">
                        <CommanBtn LinkTitle='See Details' LinkUrl='/laptops/laptopDetail' />
                    </div>
                </div>
            </div>
        </div>
        <div className="product-inner">
            <div className="inner-box">
                <div className="left">
                    <div className="img-box">
                        <Link href="/laptops/laptopDetail">
                        <img className="img" src="/laptops/laptop-img.webp" alt="laptop" />
                        </Link>
                    </div>
                    <button className="compare">+ Compare</button>
                </div>
                <div className="right">
                    <div className="title">
                    <Link href="/laptops/laptopDetail">SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB</Link>
                    </div>
                    <div className="review-star">
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarHalf /></span>
                        <span className="numb">(1508)</span>
                    </div>
                    <div className="price-buy">
                        <span className="price">₹33990</span>
                        <img className="provider" src="/laptops/amazon-icon-logo.png" alt="amazon" />
                        <span className="buy">
                            <Link href="#" target="_blank">Buy</Link>
                        </span>
                    </div>
                    <ul className="key-point">
                        <li>
                            <span className="icon">
                                <GiProcessor />
                            </span>
                            <span className="name">
                            Intel Celeron N4500, 2.8 Ghz Processor
                            </span>
                        </li>
                        <li>
                            <span className="icon">
                                <AiOutlineDatabase />
                            </span>
                            <span className="name">8 GB DDR4 RAM | 32 GB Expandable</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineSdStorage />
                            </span>
                            <span className="name">256 GB SSD Storage</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineDesktopAccessDisabled />
                            </span>
                            <span className="name">15.6″ (39.62 cm) Display</span>
                        </li>
                        <li>
                            <span className="icon">
                                <GiComputerFan />
                            </span>
                            <span className="name">AMD Radeon Graphic Processor</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdBatteryCharging30 />
                            </span>
                            <span className="name">65W Adapter</span>
                        </li>
                    </ul>
                    <div className="see-details">
                        <CommanBtn LinkTitle='See Details' LinkUrl='/laptops/laptopDetail' />
                    </div>
                </div>
            </div>
        </div>
        <div className="product-inner">
            <div className="inner-box">
                <div className="left">
                    <div className="img-box">
                        <Link href="/laptops/laptopDetail">
                        <img className="img" src="/laptops/laptop-img.webp" alt="laptop" />
                        </Link>
                    </div>
                    <button className="compare">+ Compare</button>
                </div>
                <div className="right">
                    <div className="title">
                    <Link href="/laptops/laptopDetail">SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB</Link>
                    </div>
                    <div className="review-star">
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarHalf /></span>
                        <span className="numb">(1508)</span>
                    </div>
                    <div className="price-buy">
                        <span className="price">₹33990</span>
                        <img className="provider" src="/laptops/amazon-icon-logo.png" alt="amazon" />
                        <span className="buy">
                            <Link href="#" target="_blank">Buy</Link>
                        </span>
                    </div>
                    <ul className="key-point">
                        <li>
                            <span className="icon">
                                <GiProcessor />
                            </span>
                            <span className="name">
                            Intel Celeron N4500, 2.8 Ghz Processor
                            </span>
                        </li>
                        <li>
                            <span className="icon">
                                <AiOutlineDatabase />
                            </span>
                            <span className="name">8 GB DDR4 RAM | 32 GB Expandable</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineSdStorage />
                            </span>
                            <span className="name">256 GB SSD Storage</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineDesktopAccessDisabled />
                            </span>
                            <span className="name">15.6″ (39.62 cm) Display</span>
                        </li>
                        <li>
                            <span className="icon">
                                <GiComputerFan />
                            </span>
                            <span className="name">AMD Radeon Graphic Processor</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdBatteryCharging30 />
                            </span>
                            <span className="name">65W Adapter</span>
                        </li>
                    </ul>
                    <div className="see-details">
                        <CommanBtn LinkTitle='See Details' LinkUrl='/laptops/laptopDetail' />
                    </div>
                </div>
            </div>
        </div>
        <div className="product-inner">
            <div className="inner-box">
                <div className="left">
                    <div className="img-box">
                        <Link href="/laptops/laptopDetail">
                        <img className="img" src="/laptops/laptop-img.webp" alt="laptop" />
                        </Link>
                    </div>
                    <button className="compare">+ Compare</button>
                </div>
                <div className="right">
                    <div className="title">
                    <Link href="/laptops/laptopDetail">SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB</Link>
                    </div>
                    <div className="review-star">
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarHalf /></span>
                        <span className="numb">(1508)</span>
                    </div>
                    <div className="price-buy">
                        <span className="price">₹33990</span>
                        <img className="provider" src="/laptops/amazon-icon-logo.png" alt="amazon" />
                        <span className="buy">
                            <Link href="#" target="_blank">Buy</Link>
                        </span>
                    </div>
                    <ul className="key-point">
                        <li>
                            <span className="icon">
                                <GiProcessor />
                            </span>
                            <span className="name">
                            Intel Celeron N4500, 2.8 Ghz Processor
                            </span>
                        </li>
                        <li>
                            <span className="icon">
                                <AiOutlineDatabase />
                            </span>
                            <span className="name">8 GB DDR4 RAM | 32 GB Expandable</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineSdStorage />
                            </span>
                            <span className="name">256 GB SSD Storage</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineDesktopAccessDisabled />
                            </span>
                            <span className="name">15.6″ (39.62 cm) Display</span>
                        </li>
                        <li>
                            <span className="icon">
                                <GiComputerFan />
                            </span>
                            <span className="name">AMD Radeon Graphic Processor</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdBatteryCharging30 />
                            </span>
                            <span className="name">65W Adapter</span>
                        </li>
                    </ul>
                    <div className="see-details">
                        <CommanBtn LinkTitle='See Details' LinkUrl='/laptops/laptopDetail' />
                    </div>
                </div>
            </div>
        </div>
        <div className="product-inner">
            <div className="inner-box">
                <div className="left">
                    <div className="img-box">
                        <Link href="/laptops/laptopDetail">
                        <img className="img" src="/laptops/laptop-img.webp" alt="laptop" />
                        </Link>
                    </div>
                    <button className="compare">+ Compare</button>
                </div>
                <div className="right">
                    <div className="title">
                    <Link href="/laptops/laptopDetail">SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB</Link>
                    </div>
                    <div className="review-star">
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarFill /></span>
                        <span className="icon"><BsStarHalf /></span>
                        <span className="numb">(1508)</span>
                    </div>
                    <div className="price-buy">
                        <span className="price">₹33990</span>
                        <img className="provider" src="/laptops/amazon-icon-logo.png" alt="amazon" />
                        <span className="buy">
                            <Link href="#" target="_blank">Buy</Link>
                        </span>
                    </div>
                    <ul className="key-point">
                        <li>
                            <span className="icon">
                                <GiProcessor />
                            </span>
                            <span className="name">
                            Intel Celeron N4500, 2.8 Ghz Processor
                            </span>
                        </li>
                        <li>
                            <span className="icon">
                                <AiOutlineDatabase />
                            </span>
                            <span className="name">8 GB DDR4 RAM | 32 GB Expandable</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineSdStorage />
                            </span>
                            <span className="name">256 GB SSD Storage</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdOutlineDesktopAccessDisabled />
                            </span>
                            <span className="name">15.6″ (39.62 cm) Display</span>
                        </li>
                        <li>
                            <span className="icon">
                                <GiComputerFan />
                            </span>
                            <span className="name">AMD Radeon Graphic Processor</span>
                        </li>
                        <li>
                            <span className="icon">
                                <MdBatteryCharging30 />
                            </span>
                            <span className="name">65W Adapter</span>
                        </li>
                    </ul>
                    <div className="see-details">
                        <CommanBtn LinkTitle='See Details' LinkUrl='/laptops/laptopDetail' />
                    </div>
                </div>
            </div>
        </div>

     </div>
    </>
  )
}

export default MobLaptopListing;
