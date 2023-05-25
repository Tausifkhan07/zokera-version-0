import Link from 'next/link';
import React, { useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import DeskLaptopListingPricePopUp from '../popupbox/DeskLaptopListingPricePopUp';
import { GiComputerFan, GiProcessor } from 'react-icons/gi';
import { AiOutlineDatabase } from 'react-icons/ai';
import { MdBatteryCharging30, MdOutlineDesktopAccessDisabled, MdOutlineKeyboardDoubleArrowRight, MdOutlineSdStorage } from 'react-icons/md';
import CommanBtn from '../comman/CommanBtn';

const DeskLaptopListing: React.FC = () => {
  const [showPriceBox, setShowPriceBox] = useState<boolean[]>([]);

  const handlePricePopUpMouseOver = (index: number) => {
    setShowPriceBox((prevShowPriceBox) => {
      const newShowPriceBox = [...prevShowPriceBox];
      newShowPriceBox[index] = true;
      return newShowPriceBox;
    });
  };
  
  const handlePricePopUpMouseOut = (index: number) => {
    setShowPriceBox((prevShowPriceBox) => {
      const newShowPriceBox = [...prevShowPriceBox];
      newShowPriceBox[index] = false;
      return newShowPriceBox;
    });
  };
  
    return(
        <>
        <style jsx>{`
        .desk-lapt-cont {
            max-width: 700px;
            width: 100%;
            height: 100%;
            margin: auto;
          }
          .desk-lapt-cont .laptop-inner {
            background: #fff;
            box-shadow: 0 0 5px -1px rgba(0,0,0,.3);
            border-radius: 6px;
            margin: 0 5px 10px;
            overflow: hidden;
          }
          .desk-lapt-cont .laptop-inner .inner-box {
            padding: 8px 12px;
            display: flex;
            flex-wrap: wrap;
            position: relative;
          }
          .desk-lapt-cont .laptop-inner .inner-box .left {
            max-width: 200px;
            width: 100%;
            height: 100%;
            padding-right: 8px;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right {
            max-width: calc(100% - 208px);
            width: 100%;
            height: 100%;
          }
          .desk-lapt-cont .laptop-inner .inner-box .left .img-box {
            width: 100%;
            height: 100%;
            margin: 10px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            transition: all 1s;
          }
          .desk-lapt-cont .laptop-inner .inner-box .left .img-box:hover img {
            transform: scale(1.05);
          }
          .desk-lapt-cont .laptop-inner .inner-box .left .img-box img {
            width: 150px;
            height: 100px;
            object-fit: contain;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .title {
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
            margin-bottom: 12px;
            margin-top: 12px;
            transition: all 300ms;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .title:hover {
            color: #ff662a;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .reting-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .reting-price .reting .icon {
            font-size: 13px;
            color: #03753c;
            padding: 3px 3px;
            background: #e5f7ee;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .reting-price .reting .numb {
            font-size: 15px;
            padding: 1px 7px;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .reting-price .price-box .price {
            color: #ff662a;
            font-size: 15px;
            font-weight: 500;
            margin-right: 10px;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .reting-price .price-box .more-price {
            font-size: 11px;
            font-weight: 500;
            color: rgba(0,0,0,.69);
            position: relative;
            padding-right: 18px;
            cursor: pointer;
            padding-bottom: 5px;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .reting-price .price-box .more-price:hover .arrow {
            transform: rotate(180deg);
            margin-top: -5px;
            color: #ff662a;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .reting-price .price-box .arrow {
            position: absolute;
            top: -2px;
            right: -2px;
            z-index: 1;
            font-size: 18px;
             margin-top: 0;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .reting-price .price-box .provider {
            height: 22px;
            margin-right: 25px;
            margin-bottom: -5px;
            object-fit: contain;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .key-point {
            padding-top: 8px;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .key-point li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 3px;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .key-point li .icon {
            color: #00518f;
            margin-right: 8px;
            opacity: .8;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .key-point li .name {
            font-size: 13px;
            color: #333;
            align-self: flex-start;
          }
          .desk-lapt-cont .laptop-inner .inner-box .right .see-detail {
            position: absolute;
            bottom: 12px;
            right: 22px;
            z-index: 3;
          }
          .desk-lapt-cont .laptop-inner .inner-box .left .compare {
            margin-top: 40px;
            font-size: 13px;
            background: transparent;
            border: 1px solid #ddd;
            padding: 3px 8px;
            border-radius: 15px;
            color: #ff662a;
            cursor: pointer;
            margin-left: 35px;
          }
          @media only screen and (max-width: 767px) {
            .desk-lapt-cont {
              display: none;
            }
          }
        `}</style>
        <div className="desk-lapt-cont">
            <div className="laptop-inner">
                <div className="inner-box">
                    <div className="left">
                       <div className="img-box">
                            <Link href="/laptops/laptopDetail">
                                <img src="/laptops/laptop-img.webp" alt="laptop" />
                            </Link>
                       </div>
                       <button className="compare">+ Compare</button>
                    </div>
                    <div className="right">
                        <div className="title">
                            <Link href="/laptops/laptopDetail">SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB</Link>
                        </div>
                        <div className="reting-price">
                            <div className="reting">
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarHalf /></span>
                                <span className="numb">(1508)</span>
                            </div>
                            <div className="price-box">
                                  <Link href="#">
                                    <img className='provider' src="/home/flipkart-logo.png" alt="flipkar" />
                                    <span className="price">₹ 33990</span>
                                  </Link>
                                  <span 
                                  className="more-price"
                                  onMouseOver={() => handlePricePopUpMouseOver(0)}
                                  onMouseOut={() => handlePricePopUpMouseOut(0)}
                                  >
                                  More price<span className="arrow"><IoMdArrowDropdown /></span>
                                  {/* <DeskLaptopListingPricePopUp /> */}
                                  {showPriceBox[0] && <DeskLaptopListingPricePopUp />}
                                  </span>
                            </div>
                        </div>
                        <ul className="key-point">
                            <li>
                                <span className="icon"><GiProcessor /></span>
                                <span className="name">Intel Celeron N4500, 2.8 Ghz Processor</span>
                            </li>
                            <li>
                                <span className="icon"><AiOutlineDatabase /></span>
                                <span className="name">8 GB DDR4 RAM | 32 GB Expandable</span>
                            </li>
                            <li>
                                <span className="icon"><MdOutlineSdStorage /></span>
                                <span className="name">256 GB SSD Storage</span>
                            </li>
                            <li>
                                <span className="icon"><MdOutlineDesktopAccessDisabled /></span>
                                <span className="name">15.6″ (39.62 cm) Display</span>
                            </li>
                            <li>
                                <span className="icon"><GiComputerFan /></span>
                                <span className="name">AMD Radeon Graphic Processor</span>
                            </li>
                            <li>
                                <span className="icon"><MdBatteryCharging30 /></span>
                                <span className="name">65W Adapter</span>
                            </li>
                        </ul>

                        <div className="see-detail">
                          <CommanBtn LinkTitle='See Details' LinkUrl='/laptops/laptopDetail' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="laptop-inner">
                <div className="inner-box">
                    <div className="left">
                       <div className="img-box">
                            <Link href="#">
                                <img src="/laptops/laptop-img.webp" alt="laptop" />
                            </Link>
                       </div>
                       <button className="compare">+ Compare</button>
                    </div>
                    <div className="right">
                        <div className="title">
                            <Link href="#">SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB</Link>
                        </div>
                        <div className="reting-price">
                            <div className="reting">
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarHalf /></span>
                                <span className="numb">(1508)</span>
                            </div>
                            <div className="price-box">
                                  <Link href="#">
                                    <img className='provider' src="/home/flipkart-logo.png" alt="flipkar" />
                                    <span className="price">₹ 33990</span>
                                  </Link>
                                  <span 
                                  className="more-price"
                                  onMouseOver={() => handlePricePopUpMouseOver(1)}
                                  onMouseOut={() => handlePricePopUpMouseOut(1)}
                                  >
                                  More price<span className="arrow"><IoMdArrowDropdown /></span>
                                  {/* <DeskLaptopListingPricePopUp /> */}
                                  {showPriceBox[1] && <DeskLaptopListingPricePopUp />}
                                  </span>
                            </div>
                        </div>
                        <ul className="key-point">
                            <li>
                                <span className="icon"><GiProcessor /></span>
                                <span className="name">Intel Celeron N4500, 2.8 Ghz Processor</span>
                            </li>
                            <li>
                                <span className="icon"><AiOutlineDatabase /></span>
                                <span className="name">8 GB DDR4 RAM | 32 GB Expandable</span>
                            </li>
                            <li>
                                <span className="icon"><MdOutlineSdStorage /></span>
                                <span className="name">256 GB SSD Storage</span>
                            </li>
                            <li>
                                <span className="icon"><MdOutlineDesktopAccessDisabled /></span>
                                <span className="name">15.6″ (39.62 cm) Display</span>
                            </li>
                            <li>
                                <span className="icon"><GiComputerFan /></span>
                                <span className="name">AMD Radeon Graphic Processor</span>
                            </li>
                            <li>
                                <span className="icon"><MdBatteryCharging30 /></span>
                                <span className="name">65W Adapter</span>
                            </li>
                        </ul>
                        <div className="see-detail">
                          <CommanBtn LinkTitle='See Details' LinkUrl='/laptops/laptopDetail' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="laptop-inner">
                <div className="inner-box">
                    <div className="left">
                       <div className="img-box">
                            <Link href="#">
                                <img src="/laptops/laptop-img.webp" alt="laptop" />
                            </Link>
                       </div>
                       <button className="compare">+ Compare</button>
                    </div>
                    <div className="right">
                        <div className="title">
                            <Link href="#">SAMSUNG Galaxy Book 2 Core i5 12th Gen - 8 GB/512 GB</Link>
                        </div>
                        <div className="reting-price">
                            <div className="reting">
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarFill /></span>
                                <span className="icon"><BsStarHalf /></span>
                                <span className="numb">(1508)</span>
                            </div>
                            <div className="price-box">
                                  <Link href="#">
                                    <img className='provider' src="/home/flipkart-logo.png" alt="flipkar" />
                                    <span className="price">₹ 33990</span>
                                  </Link>
                                  <span 
                                  className="more-price"
                                  onMouseOver={() => handlePricePopUpMouseOver(2)}
                                  onMouseOut={() => handlePricePopUpMouseOut(2)}
                                  >
                                  More price<span className="arrow"><IoMdArrowDropdown /></span>
                                  {/* <DeskLaptopListingPricePopUp /> */}
                                  {showPriceBox[2] && <DeskLaptopListingPricePopUp />}
                                  </span>
                            </div>
                        </div>
                        <ul className="key-point">
                            <li>
                                <span className="icon"><GiProcessor /></span>
                                <span className="name">Intel Celeron N4500, 2.8 Ghz Processor</span>
                            </li>
                            <li>
                                <span className="icon"><AiOutlineDatabase /></span>
                                <span className="name">8 GB DDR4 RAM | 32 GB Expandable</span>
                            </li>
                            <li>
                                <span className="icon"><MdOutlineSdStorage /></span>
                                <span className="name">256 GB SSD Storage</span>
                            </li>
                            <li>
                                <span className="icon"><MdOutlineDesktopAccessDisabled /></span>
                                <span className="name">15.6″ (39.62 cm) Display</span>
                            </li>
                            <li>
                                <span className="icon"><GiComputerFan /></span>
                                <span className="name">AMD Radeon Graphic Processor</span>
                            </li>
                            <li>
                                <span className="icon"><MdBatteryCharging30 /></span>
                                <span className="name">65W Adapter</span>
                            </li>
                        </ul>
                        <div className="see-detail">
                          <CommanBtn LinkTitle='See Details' LinkUrl='/laptops/laptopDetail' />
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        </>
    )
}

export default DeskLaptopListing;