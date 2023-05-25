import React from 'react';
import { HiXMark } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';

interface SignupFormProps {
  toggleForm: (formName: "login" | "signup") => void;
  setLoginSignupFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DeskSignUp: React.FC<SignupFormProps> = ({ toggleForm, setLoginSignupFormOpen }) => {
  return (
    <>
      <style jsx>{`
    .signup-form-cont {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 111;
      background: rgba(0,0,0,.4);
    }
    .signup-form-cont .form-center {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .signup-form-cont .form-center .form-inner-box {
      position: relative;
      max-width: 650px;
      width: 100%;
      height: 430px;
      box-shadow: 0 2px 5px rgba(0,0,0,.5);
      display: flex;
    }
    .signup-form-cont .form-center .form-inner-box .close-btn {
      position: absolute;
      top: -15px;
      right: -15px;
      width: 33px;
      height: 33px;
      background: #333;
      color: #fff;
      line-height: 40px;
      text-align: center;
      font-size: 25px;
      border-radius: 50%;
      cursor: pointer;
    }
    .signup-form-cont .form-center .form-inner-box .form-left {
      width: 250px;
      height: 100%;
      background: #00518f;
      color: #ddd;
      padding: 15px 20px;
      border-top-left-radius: 5px;
      overflow: hidden;
      border-bottom-left-radius: 5px;
    }
    .signup-form-cont .form-center .form-inner-box .form-left p {
      font-size: 17px;
    }
    .signup-form-cont .form-center .form-inner-box .form-left .middle-brand-logo {
      margin-top: 130px;
    }
    .signup-form-cont .form-center .form-inner-box .form-right {
      width: 400px;
      height: 100%;
      color: #ddd;
      padding: 15px 12px;
      background: #fff;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .signup-form-cont .form-center .form-inner-box .form-right .btn-box {
      width: 100%;
      height: 65px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0 2px;
    }
    .signup-form-cont .form-center .form-inner-box .form-right .btn-box .google, .signup-form-cont .form-center .form-inner-box .form-right .btn-box .facebook {
      width: 50%;
      height: 40px;
      border: 1px solid rgba(0,0,0,.2);
      border-radius: 3px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: .1px;
      padding: 3px 6px;
      cursor: pointer;
      color: #333;
    }
    .signup-form-cont .form-center .form-inner-box .form-right .btn-box .google {
      margin-right: 7px;
    }
    .signup-form-cont .form-center .form-inner-box .form-right .btn-box .facebook {
      margin-left: 7px;
    }
    .signup-form-cont .form-center .form-inner-box .form-right .btn-box .google .g-icon, .signup-form-cont .form-center .form-inner-box .form-right .btn-box .facebook .f-icon {
      font-size: 22px;
      height: 33px;
      width: 32px;
      line-height: 37px;
      text-align: start;
    }
    .signup-form-cont .form-center .form-inner-box .form-right .btn-box .facebook .f-icon {
      color: #00518f;
    }
    .signup-form-cont .form-center .form-inner-box .devider {
      position: relative;
      text-align: center;
    }
    .signup-form-cont .form-center .form-inner-box .devider::before {
      content: "";
      position: absolute;
      top: 8px;
      right: 33px;
      height: 1px;
      width: 85%;
      background-color: rgb(223,223,223);
      z-index: 2;
    }
    .signup-form-cont .form-center .form-inner-box .devider .or {
      color: #333;
      position: relative;
      z-index: 22;
      background: #fff;
      padding: 3px 15px;
    }
    .signup-form-cont .form-center .form-inner {
      margin: 18px 0 8px;
    }
    .signup-form-cont .form-center .form-inner .input-item {
      width: 100%;
      position: relative;
      height: 62px;
      padding: 4px 8px;
    }
    .signup-form-cont .form-center .form-inner .input-item input {
      width: 100%;
      display: block;
      padding: 7px 12px;
      outline: none;
      border: 1px solid #999595;
      border-radius: 4px;
      height: 40px;
      font-size: 15px;
    }
    .signup-form-cont .form-center .form-inner .input-item input:focus {
      border-color: #00518f;
    }
    .signup-form-cont .form-center .form-inner .input-item input:focus + span {
      color: #00518f;
    }
    .signup-form-cont .form-center .form-inner .input-item .email {
      position: absolute;
      top: -6px;
      left: 21px;
      z-index: 3;
      color: #878787;
      font-size: 12px;
      padding: 0 3px;
      background: #fff;
    }
    .signup-form-cont .login-btn {
      height: 40px;
      width: 100%;
      margin: 15px 0;
    }
    .signup-form-cont .login-btn button {
      width: 100%;
      height: 100%;
      border: none;
      background: #ff662a;
      color: #fff;
      font-size: 18px;
      letter-spacing: .1px;
      border-radius: 2px;
      cursor: pointer;
    }
    .form-center .form-inner .dont-signup {
      color: #333;
      text-align: center;
      font-size: 15px;
    }
    .form-center .form-inner .dont-signup .signup-btn {
      color: #00518f;
      padding-left: 5px;
      font-size: 16px;
      letter-spacing: .1px;
    }
    .form-center .form-inner .dont-signup .signup-btn:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .form-center .form-inner .term-privacy {
      color: #333;
      font-size: 13px;
      letter-spacing: .1px;
      line-height: 20px;
      padding: 20px 8px 5px;
    }
    .form-center .form-inner .term-privacy .link {
      color: #000;
      text-decoration: underline;
    }
    .form-right > h3 {
      color: #00518f;
      letter-spacing: .1px;
      text-align: center;
    }
    @media only screen and (max-width: 767px) {
      .signup-form-cont {
        display: none;
      }
    }
    `}</style>
      <div className="signup-form-cont" onClick={() =>setLoginSignupFormOpen(false)}>
        <div className="form-center">
          <div className="form-inner-box" onClick={(event) => event.stopPropagation()}>
            <span className="close-btn" onClick={() =>setLoginSignupFormOpen(false)}><HiXMark /></span>
            <div className="form-left">
              <h2>SIGNUP</h2>
              <div className="middle-brand-logo">
                <h1>zokera</h1>
                <p>Get access to your Accournt, Earning and Recommendations</p>
              </div>
            </div>
            <div className="form-right">
              <h3>You can join with</h3>
              <div className="btn-box">
                <button className="google"><span className="g-icon"><FcGoogle /></span>Signup with Google</button>
                <button className="facebook"><span className="f-icon"><BsFacebook /></span>Signup with Facebook</button>
              </div>
              <div className="devider"><span className="or">Or</span></div>
              <div className="form-inner">
                <div className="input-item">
                  <input type="text" />
                  <span className="email">Enter Email</span>
                </div>
                <div className="term-privacy">
                By continuing you agree to our <span className="link"><Link href="#">Terms of Use</Link></span> & <span className="link"><Link href="#">Privacy Policy</Link></span>
                </div>
                <div className="login-btn"><button>Signup</button></div>
                <div className="dont-signup" onClick={() => toggleForm("login")}>Existing User? <span className="signup-btn">Login</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeskSignUp;
