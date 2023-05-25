import Link from 'next/link';
import React from 'react';
import { BiUser } from 'react-icons/bi';

interface ShowMenuProps {
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }

const DeskSideMenu: React.FC<ShowMenuProps> = ({ showMenu, setShowMenu }) => { 

  return (
    <>
    <style jsx>
        {`
            .side-menu-wrap {
                position: fixed;
                top: 0;
                left: -100%;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0,0,0,.6);
                z-index: 110;
                transition: all 1s;
            }
            .side-menu-wrap.open {
                left: 0;
            }
            .side-navbar {
                background: #fff;
                max-width: 300px;
                width: 100%;
                height: 100%;
                overflow-y: scroll;
                box-shadow: 3px 0 8px 1px rgba(0,0,0,.4);
            }
            .side-navbar .login-header {
                background: #00518f;
                width: 100%;
                height: 60px;
                position: sticky;
                top: 0;
                left: 0;
                right: 0;
                z-index: 99;
            }
            .side-navbar .login-header ul {
                padding: 0 12px;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .side-navbar .login-header ul li {
                display: flex;
                align-items: center;
            }
            .side-navbar .login-header ul .user {
                color: #fff;
                width: 28px;
                height: 100%;
                display: inline-block;
                font-size: 26px;
                line-height: 65px;
                text-align: center;
            }
            .side-navbar .login-header ul .login-signup {
                color: #fff;
                font-size: 15px;
                padding: 0 17px;
            }
            .side-navbar .login-header ul .login-signup .login {
                margin-right: 10px;
            }
            .side-navbar .login-header ul .login-signup .login::after {
                content: "";
                border-right: 1px solid #ddd;
                margin-left: 8px;
            }
            .side-navbar .login-header ul .close {
                width: 33px;
                height: 33px;
                line-height: 40px;
                text-align: center;
            }
            .side-navbar .login-header ul .close img {
                width: 28px;
                height: 28px;
            }
            .side-navbar .menu-list {
                width: 100%;
                height: 100%;
            }
            .side-navbar .menu-list li {
                width: 100%;
                height: 45px;
                background: #fff;
                display: flex;
                align-items: center;
                font-size: 15px;
                color: #333;
                border-bottom: 1px solid #ddd;
                padding: 0 12px;
            }
            @media only screen and (max-width: 767px) {
                .side-menu-wrap {
                  display: none;
                }
              }
        `}
    </style>
    <div className={`side-menu-wrap ${showMenu? "open" : ""}`}>
        <div className="side-navbar" onClick={(event) => event.stopPropagation()}>
            <div className="login-header">
                <ul>
                    <li>
                        <span className="user"><BiUser /></span>
                        <span className="login-signup">
                            <a className='login' href="#;">Login</a>
                            <a className='signup' href="#;">Signup</a>
                        </span>
                    </li>
                    <li>
                        <span className="close" onClick={() => setShowMenu(false)}>
                            <img src="/s-logo.png" alt="X" />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="menu-list">
                <ul>
                    <li>
                        <Link className='menu-link' href="/category">All Categories</Link>
                    </li>
                    <li>
                    <Link className='menu-link' href="/hub">Hub</Link>
                    </li>
                    <li>
                    <Link className='menu-link' href="/earning">Earning</Link>
                    </li>
                    <li><Link className='menu-link' href="/accoutn">Account</Link></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>  
    </>
  )
}

export default DeskSideMenu;
