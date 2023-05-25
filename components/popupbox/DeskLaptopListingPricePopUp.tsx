import React from 'react';
import CommanBtn from '../comman/CommanBtn';
import Link from 'next/link';

const DeskLaptopListingPricePopUp = () => {
  return (
    <>
    <style jsx>{`
    .price-box-popup {
        width: 215px;
        min-height: 55px;
        background: #fff;
        position: absolute;
        top: 18px;
        right: -8px;
        z-index: 9;
        box-shadow: 0px 2px 27px -2px rgba(0,0,0,.4);
        cursor: default;
        border-radius: 9px;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,.5)
      }
      .price-box-popup .pr-box-inner {
        width: 100%;
        height: 100%;
      }
      .price-box-popup .pr-box-inner .price-title-header {
        background: #00518f;
        padding: 5px 8px;
        color: #fff;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
      }
      .price-box-popup .provider-boxes li {
        padding: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0,0,0,.3);
      }
      .price-box-popup .provider-boxes li:hover {Background: #eee;}
      .price-box-popup .provider-boxes li img {
        height: 25px;
        padding: 0 8px;
        width: 98px;
        object-fit: contain;
      }
      .price-box-popup .provider-boxes li .price {
        color: #333;
        font-size: 14px;
        font-weight: 500;
      }
    `}</style>
    <div className="price-box-popup">
      <div className="pr-box-inner">
          <div className="price-title-header">Prices</div>
          <ul className="provider-boxes">
              <li>
                <span className="price">₹ 33990</span>
                <Link href="#"><img src="/home/flipkart-logo.png" alt="flipkart" /></Link>
              </li>
              <li>
                <span className="price">₹ 34490</span>
                <Link href="#"><img src="/home/amazon-logo.png" alt="amazon" /></Link>
              </li>
          </ul>
          <CommanBtn LinkUrl='#' LinkTitle='View all Prices' />
      </div>
    </div>
    </>
  )
}

export default DeskLaptopListingPricePopUp