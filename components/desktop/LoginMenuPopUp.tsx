import Link from 'next/link';
import React from 'react';
import { BsTriangleFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { BiPowerOff } from 'react-icons/bi';
import DeskSignUp from './DeskSignUp';

interface LoginMenuPopUpProps {
    loginMenuOpen: boolean;
    toggleForm: (formName: "login" | "signup") => void;
    setLoginSignupFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginMenuPopUp: React.FC<LoginMenuPopUpProps> = ({ toggleForm, loginMenuOpen, setLoginSignupFormOpen }) => {
  return  loginMenuOpen ? (
    <>
    <style jsx>{`
    .Login-popup-cont {
      width: 230px;
      min-height: 181px;
      box-shadow: 0 1px 4px rgba(0,0,0,.4);
      background: #fff;
      position: absolute;
      top: 55px;
      left: -30px;
      z-index: 99;
      padding: 12px 18px 0;
      border-radius: 2px;
    }
    .triangle {
      position: absolute;
      top: -12px;
      left: 93px;
      color: #fff;
      z-index: 100;
      font-size: 23px;
    }
    .signup-box {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 35px;
      position: relative;
      margin-bottom: 5px;
    }
    .signup-box::after {
      content: "";
      width: 118%;
      height: 1px;
      background: #ddd;
      position: absolute;
      bottom: 0;
      left: -17px;
      z-index: 9;
    }
    .signup-box .new-customer {
      font-size: 14px;
      letter-spacing: .1px;
      font-weight: 500;
    }
    .signup-box .signup {
      font-size: 14px;
      font-weight: 500;
      color: #00518f;
      letter-spacing: .1px;
      transition: all .3s;
    }
    .signup-box .signup:hover {
      text-decoration: underline;
    }
    .profile-box {
      height: 40px;
      padding: 6px 0;
      position: relative;
      display: flex;
      margin-bottom: 5px;
    }
    .profile-box::after {
      content: "";
      width: 118%;
      height: 1px;
      background: #ddd;
      position: absolute;
      bottom: 0;
      left: -17px;
      z-index: 9;
    }
    .profile-box .user {
      margin-right: 11px;
      color: #00518f;
      font-size: 18px;
    }
    .profile-box .profile {
      font-size: 15px;
      letter-spacing: .1px;
      padding-left: 5px;
      font-weight: 400;
    }
    .Login-popup-cont .profile-box:last-child {
      margin-bottom: 0px;
    }
    .Login-popup-cont .profile-box:last-child::after {
      display: none;
    }
    @media only screen and (max-width: 767px) {
      .Login-popup-cont {
        display: none;
      }
    }
    `}</style>
      <div className="Login-popup-cont">
        <span className="triangle"><BsTriangleFill /></span>
        <div className="signup-box">
          <span className='new-customer'>New customer?</span>
          <span className="signup" onClick={() =>{setLoginSignupFormOpen(true); toggleForm("signup")}}>
            {/* <Link href="/signup">Sign Up</Link> */}
            Sign Up
          </span>
        </div>
        <div className="profile-box" onClick={(): void =>alert("profile")}>
          <span className='user'><FaUserCircle /></span>
          <span className="profile">My Profile</span>
        </div>
        <div className="profile-box">
          <span className='user'><HiOutlineCurrencyRupee /></span>
          <span className="profile">My Earnings</span>
        </div>
        <div className="profile-box">
          <span className='user'><IoIosNotifications /></span>
          <span className="profile">Notifications</span>
        </div>
        <div className="profile-box">
          <span className='user'><BiPowerOff /></span>
          <span className="profile">Logout</span>
        </div>
      </div>
      {/* {
          signupFormOpen? <DeskSignUp setSignupFormOpen={setSignupFormOpen} /> : null
      } */}
    </>
  ): null
}

export default LoginMenuPopUp;
