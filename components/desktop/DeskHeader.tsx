import Image from 'next/image';
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import DeskSideMenu from './DeskSideMenu';
import LoginMenuPopUp from './LoginMenuPopUp';
import DeskLoginForm from './DeskLoginForm';
import DeskSignUp from './DeskSignUp';

const DeskHeader: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [loginMenuOpen, setLoginMenuOpen] = useState<boolean>(false);
    const [currentFormOpen, setCurrentFormOpen] = useState<'login' | 'signup'>('login');
    const [loginSignupFormOpen, setLoginSignupFormOpen] = useState<boolean>(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value);
    };
    const handleClearButtonClick = (): void => {
        setInputValue('');
    };     

    const handleLoginMenuMouseOver = () => {
        setLoginMenuOpen(true)
    }
    const handleLoginMenuMouseOut = () => {
        setLoginMenuOpen(false)
    }

    const toggleForm = (formName: 'login' | 'signup')=> {
        setCurrentFormOpen(formName)
    }

    return (
        <>
            <style jsx>{`
                .header {
                    width: 100%;
                    height: 57px;
                    box-shadow: 0 1px 3px rgba(0,0,0,.2);
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
                    padding: 0 12px;
                    align-items: center;
                }
                .iomenu-ico {
                    font-size: 28px;
                    height: 33px;
                    color: #333;
                    margin-left: 22px;
                    display: flex;
                    width: 80px;
                    align-items: center;
                    padding-top: 6px;
                  }
                .logo-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2px 5px 2px 2px;
                }
                .logo {
                    width: 140px;
                    text-align: center;
                    height: 38px;
                    line-height: 54px;
                }
                .iomenu-ico span {
                    font-size: 14px;
                    margin-left: 3px;
                    margin-top: 2px;
                    display: inline-block;
                  }
                .dsc-search {
                    display: block;
                    margin-left: 50px;
                    width: 460px;
                    border: 1px solid rgb(224, 224, 224);
                    margin-right: auto;
                    box-shadow: 0 0px 2px rgba(0,0,0,.12);
                    border-radius: 5px;
                    overflow: hidden;
                }
                .dsc-search .search-wrap {
                    position: relative;
                }
                .dsc-search .search-wrap input {
                    width: 458px;
                    border: 0;
                    font-size: 15px;
                    padding: 7px 10px;
                    line-height: 25px;
                }
                .dsc-search .search-wrap .clear-input {
                    position: absolute;
                    top: 5px;
                    right: 45px;
                    z-index: 1;
                    width: 25px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    opacity: .7;
                    font-size: 15px;
                    cursor: pointer;
                    color: #000
                }
                .dsc-search .search-wrap .icon {
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 1;
                    cursor: pointer;
                    display: block;
                    width: 33px;
                    text-align: center;
                    height: 35px;
                    line-height: 45px;
                    font-size: 27px;
                    margin-right: 6px;
                    color: #00518f;
                    border: none;
                    background: transparent;
                  }
                  .login-box {
                    position: relative;
                    margin-right: auto;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 135px;
                    width: 100%;
                    height: 56px;
                    padding: 0 10px;
                  }
                  .login-inner {
                    padding: 5px 35px;
                    background: #00518f;
                    color: #fff;
                    border-radius: 2px;
                    font-size: 17px;
                    letter-spacing: 0.1px;
                  }
                  @media only screen and (max-width: 767px) {
                    .header {
                      display: none;
                    }
                  }

            `}</style>
            <header className='header'>
                <div className="container-h">
                    <div className='header-inner'>
                        <div className='logo-inner'>
                            <span className='logo'>
                                <Link href="/">
                                    <Image width={130} height={42} src="/zokera-logo.png" alt="Zokera" />
                                </Link>
                            </span>
                            <span className='iomenu-ico' onClick={()=>setShowMenu(!showMenu)}>
                               {
                                showMenu && <DeskSideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
                               }
                                <IoMenu />
                                <span>Menu</span>
                            </span>
                        </div>
                        <div className="dsc-search">
                            <form className="search-wrap">
                                {
                                    inputValue && (<span onClick={handleClearButtonClick} className="clear-input">X</span>)
                                }
                                <button className='icon' type="submit"><CiSearch /></button>
                                <input value={inputValue} onChange={handleInputChange} type="text" placeholder='Search product for' />
                            </form>
                        </div>
                        <div className="login-box"
                        onMouseOver={handleLoginMenuMouseOver}
                        onMouseOut={handleLoginMenuMouseOut}
                        >
                            <div className="login-inner" onClick={() =>{ setLoginSignupFormOpen(true); toggleForm("login")}}>
                                <span>Login</span>
                              {/* <Link href="/login">Login</Link>  */}
                            </div>
                            <LoginMenuPopUp toggleForm={toggleForm} setLoginSignupFormOpen={setLoginSignupFormOpen} loginMenuOpen={loginMenuOpen} />
                        </div>
                        { loginSignupFormOpen && (
                            currentFormOpen === "login" ? <DeskLoginForm setLoginSignupFormOpen={setLoginSignupFormOpen} toggleForm={toggleForm} /> : <DeskSignUp setLoginSignupFormOpen={setLoginSignupFormOpen} toggleForm={toggleForm} />)
                        }
                    </div>
                </div>
            </header>
        </>
    )
}

export default DeskHeader;
