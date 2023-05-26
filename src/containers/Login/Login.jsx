import React from "react";
import styled from "styled-components";
import astro from "assets/astro.svg"
import google from "assets/Google.svg"
import git from "assets/git.svg"
import facebook from "assets/facebook.svg"
const LoginContentStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
  .astro-bg{
  width: 854px;
  height: 1080px;
  display: block;
  background-image: url("${astro}");
  }
  .container{
    position: absolute;
    display: flex;
    justify-content: center;
    width: 71%;
    height: 849px;
    left: 176px;
    top: 120px;
    background: #FFFFFF;
    border-radius: 40px;
}
.logo{
    position: absolute;
    width: 212px;
    height: 47px;
    left: 100px;
    top: 136px;
}
.logo > img {
    width: 212px;
    height: 47px;
}
.rect {
    position: absolute;
    right: 0px;
    width: 489px;
    height: 849px;
    background: #C0DBEA;
    border-radius: 40px;
}
.cactus{
    position: absolute;
    width: 198px;
    height: 550px;
    left: 1090px;
    top: 237px;
    background: url(/JS/Ex4/img/img2.png);
}
.char{
    position: absolute;
    width: 552px;
    height: 542px;
    left: 595px;
    top: 245px;
    background: url(/JS/Ex4/img/img3.png) no-repeat;
}
.form{
  display: flex;
    flex-direction: column;
    left: 88px;
    bottom: 62px;
    width: 567px;
    height: 580px;
}
.form > h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 84px;
    color: #000000;
}
.form > form > h2 {
    width: 82px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}
.form > form > input{
    width: 100%;
    height: 46px;
    background: #C0DBEA;
    border-radius: 4px;
    border: 0px;
}
.form > form > .password{
    display: flex;
    justify-content: space-between;
    
}
.field-icon {
    float: right;
    margin-left: -25px;
    margin-top: -25px;
    position: relative;
    z-index: 2;
  }
.form > form >.password > p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
}
.form > form >.password > p:last-child {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    opacity: 0.5;
}

.form-btn{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
}

.login-btn{
    
    width: 150px;
    height: 46px;
    left: 200px;
    top: 400px;
    background: #D885A3;
    color: #FFFFFF; 
    border-radius: 23px;
    border: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
}
.login-btn::after{
    content: "";
    width: 21px;
    height: 11px;
    background: url(/JS/Ex4/img/Vector.png) no-repeat;
    position: absolute;
    margin-left: 11.5px;
    top:50%;
    transform: translateY(-50%);
}
.cotinue{
    
    width: 102px;
    height: 19px;
    left: 225px;
    top: 470px;

    font-family: 'Nunito';
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #6096B4;
}
.another{
    
    bottom: 20px;
    left: 65px;
}
.btn-another{
    margin-left: 10px;
    box-sizing: border-box;

    width: 125px;
    height: 50px;

    background: #FFFFFF;
    border: 1px solid #6096B4;
    border-radius: 40px;
}
.register{
    
    left: 125px;
    bottom: -25px;
}
span{
    padding-right: 30px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    opacity: 0.5;
}
a{
    text-decoration: none;
    color: #D885A3;
}
button  {
    cursor: pointer;
}
@media (max-width:1500px){
.img{
    display: none;
}
.container{
    display: flex;
    width: 100%;
}
}
`;
const Login = () => {

  return (
    // <LoginLayout>

    // </LoginLayout>
    <LoginContentStyled>
      <div className="form">
        <h1>Log In</h1>
        <form>
          <h2>Username</h2>
          <input type="text" placeholder="username" id="userName" value="kminchelle" />
          <div className="password">
            <p>Password</p>
            <p>Forgot Your Password?</p>
          </div>
          <input type="password" placeholder="*********" id="password" value="0lelplR" />

          <div className="form-btn">
            <button className="login-btn" type="button" onclick="login()">Login</button>
            <div className="cotinue">
              <h4>or continue with</h4>
            </div>
            <div className="another">
              <button className="btn-another google"><img src={google} alt=""/></button>
              <button className="btn-another github"><img src={git} alt=""/></button>
              <button className="btn-another facebook"><img src={facebook} alt=""/></button>
            </div>
            <div className="register">
              <span>Don’t have an account yet?</span> <a href="#">Sign up for free</a>
            </div>
          </div>
        </form>
      </div>
      <div className="astro-bg"></div>
    </LoginContentStyled>
  );
};

export default Login;