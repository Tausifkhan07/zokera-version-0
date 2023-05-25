import React from 'react';
import { HiXMark } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';

interface LoginFormProps {
  toggleForm: (formName: "login" | "signup") => void;
  setLoginSignupFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DeskLoginForm: React.FC<LoginFormProps> = ({ toggleForm, setLoginSignupFormOpen }) => {
  return (
    <>
      <style jsx>{`
    .login-form-cont {
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
    .login-form-cont .form-center {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .login-form-cont .form-center .form-inner-box {
      position: relative;
      max-width: 650px;
      width: 100%;
      height: 500px;
      box-shadow: 0 2px 5px rgba(0,0,0,.5);
      display: flex;
    }
    .login-form-cont .form-center .form-inner-box .close-btn {
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
    .login-form-cont .form-center .form-inner-box .form-left {
      width: 250px;
      height: 100%;
      background: #00518f;
      color: #ddd;
      padding: 15px 20px;
      border-top-left-radius: 5px;
      overflow: hidden;
      border-bottom-left-radius: 5px;
    }
    .login-form-cont .form-center .form-inner-box .form-left p {
      font-size: 17px;
    }
    .login-form-cont .form-center .form-inner-box .form-left .middle-brand-logo {
      margin-top: 130px;
    }
    .login-form-cont .form-center .form-inner-box .form-right {
      width: 400px;
      height: 100%;
      color: #ddd;
      padding: 15px 20px;
      background: #fff;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .login-form-cont .form-center .form-inner-box .form-right .btn-box {
      width: 100%;
      height: 65px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0 2px;
    }
    .login-form-cont .form-center .form-inner-box .form-right .btn-box .google, .login-form-cont .form-center .form-inner-box .form-right .btn-box .facebook {
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
    .login-form-cont .form-center .form-inner-box .form-right .btn-box .google {
      margin-right: 7px;
    }
    .login-form-cont .form-center .form-inner-box .form-right .btn-box .facebook {
      margin-left: 7px;
    }
    .login-form-cont .form-center .form-inner-box .form-right .btn-box .google .g-icon, .login-form-cont .form-center .form-inner-box .form-right .btn-box .facebook .f-icon {
      font-size: 22px;
      height: 33px;
      width: 32px;
      line-height: 37px;
      text-align: start;
    }
    .login-form-cont .form-center .form-inner-box .form-right .btn-box .facebook .f-icon {
      color: #00518f;
    }
    .login-form-cont .form-center .form-inner-box .devider {
      position: relative;
      text-align: center;
    }
    .login-form-cont .form-center .form-inner-box .devider::before {
      content: "";
      position: absolute;
      top: 8px;
      right: 0;
      height: 1px;
      width: 100%;
      background-color: rgb(223,223,223);
      z-index: 2;
    }
    .login-form-cont .form-center .form-inner-box .devider .or {
      color: #333;
      position: relative;
      z-index: 22;
      background: #fff;
      padding: 3px 15px;
    }
    .login-form-cont .form-center .form-inner {
      margin: 18px 0 8px;
    }
    .login-form-cont .form-center .form-inner .input-item {
      width: 100%;
      position: relative;
      height: 62px;
      padding: 4px 8px;
    }
    .login-form-cont .form-center .form-inner .input-item input {
      width: 100%;
      display: block;
      padding: 7px 12px;
      outline: none;
      border: 1px solid #999595;
      border-radius: 4px;
      height: 40px;
      font-size: 15px;
    }
    .login-form-cont .form-center .form-inner .input-item input:focus {
      border-color: #00518f;
    }
    .login-form-cont .form-center .form-inner .input-item input:focus + span {
      color: #00518f;
    }
    .login-form-cont .form-center .form-inner .input-item .email, .login-form-cont .form-center .form-inner .input-item .passowrd {
      position: absolute;
      top: -6px;
      left: 21px;
      z-index: 3;
      color: #878787;
      font-size: 12px;
      padding: 0 3px;
      background: #fff;
    }
    .check-forgot {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 3px 11px;
      align-items: center;
      color: #333;
      font-size: 14px;
      letter-spacing: .1px;
    }
    .login-form-cont .check-forgot .remember input {
      margin-right: 7px;
    }
    .login-form-cont .check-forgot .forgot {
      color: #00518f;
    }
    .login-form-cont .check-forgot .forgot:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .login-form-cont .login-btn {
      height: 40px;
      width: 100%;
      margin: 15px 0;
    }
    .login-form-cont .login-btn button {
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
      .login-form-cont {
        display: none;
      }
    }
    `}</style>
      <div className="login-form-cont" onClick={() => setLoginSignupFormOpen(false)}>
        <div className="form-center">
          <div className="form-inner-box" onClick={(event) => event.stopPropagation()}>
            <span className="close-btn" onClick={() => setLoginSignupFormOpen(false)}><HiXMark /></span>
            <div className="form-left">
              <h2>LOGIN</h2>
              <div className="middle-brand-logo">
                <h1>zokera</h1>
                <p>Get access to your Accournt, Earning and Recommendations</p>
              </div>
            </div>
            <div className="form-right">
              <h3>You can join with</h3>
              <div className="btn-box">
                <button className="google"><span className="g-icon"><FcGoogle /></span>Login with Google</button>
                <button className="facebook"><span className="f-icon"><BsFacebook /></span>Login with Facebook</button>
              </div>
              <div className="devider"><span className="or">Or</span></div>
              <div className="form-inner">
                <div className="input-item">
                  <input type="text" />
                  <span className="email">Enter Email</span>
                </div>
                <div className="input-item">
                  <input type="password" />
                  <span className="passowrd">Password</span>
                </div>
                <div className="check-forgot">
                  <div className="remember">
                    <input type="checkbox" name="" id="" />
                    <span>Remember Me</span>
                  </div>
                  <div className="forgot">
                    <span>Forgot Password</span>
                  </div>
                </div>
                <div className="term-privacy">
                By continuing you agree to our <span className="link"><Link href="#">Terms of Use</Link></span> & <span className="link"><Link href="#">Privacy Policy</Link></span>
                </div>
                <div className="login-btn"><button>Login</button></div>
                <div className="dont-signup" onClick={() => toggleForm("signup")}>Don't have an account?<span className="signup-btn">Signup</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeskLoginForm;
