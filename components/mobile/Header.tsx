import Image from 'next/image';
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import SideMenu from './SideMenu';
import MobLoginForm from './MobLoginForm';
import MobSignupForm from './MobSignupForm';


const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);  
    const [mobLoginSignupFormOpen, setMobLoginSignupFormOpen] = useState<boolean>(false);
    const [currentFormOpen, setCurrentFormOpen] = useState<'login' | 'signup'>('login');

    const loginSignupToggleForm = (formName: 'login' | 'signup') => {
        setCurrentFormOpen(formName)
    }

    return (
        <>
            <style jsx>{`
                .header {
                    width: 100%;
                    height: 50px;
                    box-shadow: 0 1px 3px rgba(0,0,0,.1);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 99;
                    background-color: #fff;
                    user-select: none;
                }
                .container-h {
                    max-width: 1248px;
                    width: 100%;
                    height: 100%;
                    margin: 0 auto;
                }
                .header-inner {
                    display: flex;
                    display: flex;
                    justify-content: space-between;
                    padding: 3px 12px;
                    align-items: center;
                }
                .iomenu-ico {
                    font-size: 28px;
                    display: inline-block;
                    width: 40px;
                    height: 33px;
                    color: #333;
                    text-align: start;
                    line-height: 50px;
                  }
                .logo-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2px 5px 2px 2px;
                }
                .logo {
                    width: 120px;
                    text-align: center;
                    height: 35px;
                    line-height: 42px;
                    margin-top: 6px;
                }
                .m-user-sear-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2px 5px 2px 5px;
                }
                .m-search-ico {
                    display: inline-block;
                    font-size: 28px;
                    width: 35px;
                    height: 33px;
                    color: #00518f;
                    line-height: 45px;
                    text-align: center;
                    cursor: pointer;
                    margin-right: 20px;
                }
                .m-login-tex {
                    font-size: 17px;
                    color: #00518f;
                    cursor: pointer;
                    margin-top: 4px;
                }
                @media only screen and (min-width: 768px) {
                    .header {
                      display: none;
                    }
                  }

            `}</style>
            <header className='header'>
                <div className="container-h">
                    <div className='header-inner'>
                        <div className='logo-inner'>
                            <span className='iomenu-ico' onClick={()=>setShowMenu(!showMenu)}>
                               {
                                showMenu && <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
                               }
                                <IoMenu />
                            </span>
                            <span className='logo'>
                                <Link href="/">
                                    <Image width={99} height={33} src="/zokera-logo.png" alt="Zokera" />
                                </Link>
                            </span>
                        </div>
                        <div className='m-user-sear-inner'>
                            <span className='m-search-ico'>
                                <CiSearch />
                            </span>
                            <span className='m-login-tex' onClick={() => {setMobLoginSignupFormOpen(true); loginSignupToggleForm("login")}}>Login</span>
                        </div>
                    </div>
                    { mobLoginSignupFormOpen && (
                        currentFormOpen === "login" ? <MobLoginForm setMobLoginSignupFormOpen={setMobLoginSignupFormOpen} loginSignupToggleForm={loginSignupToggleForm} /> : <MobSignupForm setMobLoginSignupFormOpen={setMobLoginSignupFormOpen} loginSignupToggleForm={loginSignupToggleForm} />
                    )

                    }
                </div>
            </header>
        </>
    )
}

export default Header
