import React from 'react';
import { HiXMark } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';

interface MobSignupFormProps {
  loginSignupToggleForm: (formName: "login" | "signup") => void;
  setMobLoginSignupFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobSignupForm: React.FC<MobSignupFormProps> = ({ loginSignupToggleForm, setMobLoginSignupFormOpen }) => {
  return (
    <>
      <style jsx>{`
        .mob-signup-cont {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 111;
        }
        .form-inner-box {
          width: 100%;
          height: 100%;
          background: #00518f;
          overflow-y: scroll;
        }
        .mob-signup-cont .header {
          width: 100%;
          height: 200px;
          padding: 6px 15px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .mob-signup-cont .logo {
          color: #ddd;
        }
        .mob-signup-cont .close {
          position: absolute;
          top: 10px;
          right: 15px;
          z-index: 9;
          font-size: 22px;
          color: #333;
          cursor: pointer;
          width: 25px;
          height: 25px;
          text-align: center;
          border-radius: 50%;
          background: #ccc;
          padding-right: 2px;
        }
        .mob-signup-cont .content {
          color: #ddd;
          margin-bottom: 15px;
        }
        .mob-signup-cont .content p {
          font-size: 14px;
          letter-spacing: .1px;
          line-height: 20px;
          font-weight: 400;
          margin-top: 8px;
        }
        .mob-signup-cont .form-body {
          background: #fff;
          width: 100%;
          height: 100%;
          border-top-right-radius: 20px;
          border-top-left-radius: 20px;
          padding: 15px;
        }
        .mob-signup-cont .form-body > h3 {
          color: #ff662a;
          text-align: center;
          margin-bottom: 15px;
        }
        .mob-signup-cont .form-body .btn-cont {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          height: 45px;
          margin-bottom: 15px;
        }
        .mob-signup-cont .form-body .btn-cont .social-btn {
            border: none;
            background: #fff;
            box-shadow: 0 0 3px rgba(0,0,0,.3);
            padding: 5px 15px;
            border-radius: 38px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 40%;
            height: 40px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1px;
            color: #333;
            cursor: pointer;
            margin: 0 3px;
          }
        .mob-signup-cont .form-body .google {
          font-size: 30px;
          margin-top: 6px;
        }
        .mob-signup-cont .form-body .facebook {
          color: #00518f;
          font-size: 30px;
          margin-top: 6px;
        }
        .mob-signup-cont .form-body .devider {
          position: relative;
          text-align: center;
        }
        .mob-signup-cont .form-body .devider::after {
          content: "";
          position: absolute;
          top: 11px;
          left: 38px;
          height: 1px;
          width: 80%;
          background: rgb(223,223,233);
          z-index: 2;
        }
        .mob-signup-cont .form-body .devider .or {
          background: #fff;
          padding: 0px 11px;
          position: relative;
          z-index: 3;
        }
        .mob-signup-cont .form-group {
          width: 100%;
          margin: 24px 0 5px;
        }
        .mob-signup-cont .form-group .input-item {
          width: 100%;
          height: 45px;
          margin: 12px 0;
        }
        .mob-signup-cont .form-group .input-item  input {
          width: 100%;
          padding: 3px 20px;
          height: 45px;
          border: 1px solid rgb(223, 223, 223);
          border-radius: 40px;
          background: #ddd;
          color: #333;
        }
        .mob-signup-cont .term-privacy {
          padding: 8px 45px;
          text-align: center;
          font-size: 14px;
          color: #333;
        }
        .mob-signup-cont .term-privacy .link {
          color: #000;
          text-decoration: underline;
        }
        .mob-signup-cont .submit-btn {
          width: 100%;
          height: 38px;
          padding: 8px 12px;
          background: #ff662a;
          border: none;
          font-size: 18px;
          color: #fff;
          border-radius: 25px;
          margin: 16px 0;
          cursor: pointer;
        }
        .mob-signup-cont .dont-signup {
          text-align: center;
          font-size: 14px;
          color: #333;
          padding: 3px 8px;
          letter-spacing: .1px;
        }
        .mob-signup-cont .signup-btn {
          font-size: 16px;
          color: #00518f;
          padding-left: 8px;
        }
        .mob-signup-cont .signup-btn:hover {
          text-decoration: underline;
        }
        @media only screen and (min-width: 768px) {
          .mob-signup-cont {
            display: none;
          }
        }
      `}</style>
      <div className='mob-signup-cont'>
        <div className="form-inner-box">
          <div className="header">
            <div className="logo"><h1>zokera</h1></div>
            <div className="close" onClick={() => setMobLoginSignupFormOpen(false)}><HiXMark /></div>
            <div className="content">
              <h3>Signup</h3>
              <p>Get access to your Accournt, Earning and Recommendations</p>
            </div>
          </div>
          <div className="form-body">
            <h3>You can join with</h3>
            <div className="btn-cont">
            <button className="social-btn">Signup With <span className="google"><FcGoogle /></span></button>
              <button className="social-btn">Signup With <span className="facebook"><BsFacebook /></span></button>
            </div>
            <div className="devider"><span className="or">Or</span></div>
            <div className="form-group">
              <div className="input-item">
                <input type="text" placeholder='Email' />
              </div>
              <div className="term-privacy">
                By continuing you agree to our <span className="link"><Link href="#">Terms of Use</Link></span> & <span className="link"><Link href="#">Privacy Policy</Link></span>
              </div>
              <button className="submit-btn">Signup</button>
            </div>
            <div className="dont-signup" onClick={() => loginSignupToggleForm("login")}>Existing User?<span className="signup-btn">Login</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobSignupForm;
