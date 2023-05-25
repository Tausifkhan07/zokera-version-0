import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdOutlineHub } from "react-icons/md";
import { useRouter } from 'next/router';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';

const BottomNav = () => {
  const router = useRouter();

  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollpos > currentScrollPos);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);

  return (
    <>
      <style jsx>
        {`
            .bottom-menu {
                display: flex;
                -moz-box-align: center;
                align-items: center;
                position: fixed;
                bottom: 0px;
                left: 0px;
                right: 0px;
                justify-content: space-evenly;
                z-index: 11;
                border-top: 1px solid rgb(240, 240, 240);
                box-shadow: rgba(34, 34, 34, 0.12) 0px 2px 16px 2px;
                padding: 3px 8px 4px;
                min-height: 48px;
                background-color: #fff;
                transition: bottom .5s;
              }
              .menu-item {
                display: flex;
                -moz-box-align: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
                cursor: default;
              }
              .menu-item .menu-title {
                color: rgb(51,51,51);
                font-style: normal;
                font-size: 11px;
                line-height: 16px;
              }
              .menu-icon {
                font-size: 25px;
                color: #333;
                line-height: 20px;
              }
              .bottom-menu .menu-item.active .menu-icon, .bottom-menu .menu-item.active .menu-title {
                color: #00518f;
              }
              @media only screen and (min-width: 768px) {
                .bottom-menu {
                  display: none;
                }
              }
       `}
      </style>
      <div className='bottom-menu' style={{ bottom: visible ? 0 : '-50px' }}>
        <Link href="/">
          <div className={`menu-item ${router.pathname == "/" ? "active" : ""}`}>
            <span className="menu-icon">
              <AiOutlineHome />
            </span>
            <span className='menu-title'>Home</span>
          </div>
        </Link>
        <Link href="/category">
          <div className={`menu-item ${router.pathname == "/category" ? "active" : ""}`}>
            <span className="menu-icon">
            <BiCategory />
            </span>
            <span className='menu-title'>Categories</span>
          </div>
        </Link>
        <Link href="/hub">
          <div className={`menu-item ${router.pathname == "/hub" ? "active" : ""}`}>
          <span className="menu-icon">
            <MdOutlineHub />
          </span>
          <span className='menu-title'>Hub</span>
          </div>
        </Link>
        <Link href="/earning">
          <div className={`menu-item ${router.pathname == "/earning" ? "active" : ""}`}>
          <span className="menu-icon">
            <HiOutlineCurrencyRupee />
          </span>
            <span className='menu-title'>Earnings</span>
          </div>
        </Link>
        <Link href="/account">
          <div className={`menu-item ${router.pathname == "/account" ? "active" : ""}`}>
          <span className="menu-icon">
            <AiOutlineUser />
          </span>
            <span className='menu-title'>Account</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default BottomNav
