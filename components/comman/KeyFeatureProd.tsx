import React from 'react';
import { AiOutlineDatabase } from 'react-icons/ai';
import { GiComputerFan, GiProcessor } from 'react-icons/gi';
import { MdBatteryCharging30, MdOutlineDesktopAccessDisabled, MdOutlineSdStorage } from 'react-icons/md';

const KeyFeatureProd: React.FC = () => {
  return (
    <>
    <style jsx>{`
    .featur-box ._key-box li {
        position: relative;
        padding: 8px 10px 8px 35px;
        border: 1px solid rgba(0,0,0,.2);
        margin: 5px 5px 5px 10px;
        display: inline-block;
        border-radius: 5px;
        font-size: 13px;
      }
      .featur-box ._key-box li span:first-child {
        color: #00518f;
        font-size: 20px;
        position: absolute;
        top: 6px;
        left: 5px;
      }
      .featur-box > h4 {
        padding-left: 15px;
        padding-bottom: 10px;
      }
    `}</style>
    <section className="featur-box">
        <h4>Key Feature</h4>
        <ul className="_key-box">
            <li>
                <span><GiProcessor /></span>
                <span>Intel Celeron N4500, 2.8 Ghz Processor</span>
            </li>
            <li>
                <span><GiComputerFan /></span>
                <span>AMD Radeon Graphic Processor</span>
            </li>
            <li>
                <span><AiOutlineDatabase /></span>
                <span>8 GB DDR4 RAM | 32 GB Expandable</span>
            </li>
            <li>
                <span><MdOutlineSdStorage /></span>
                <span>256 GB SSD Storage</span>
            </li>
            <li>
                <span><MdOutlineDesktopAccessDisabled /></span>
                <span>15.6″ (39.62 cm) Display</span>
            </li>
            <li>
                <span><MdBatteryCharging30 /></span>
                <span>65W Adapter</span>
            </li>
        </ul>
    </section>
    </>
  )
}

export default KeyFeatureProd