import React from 'react'
import './Login.css'

const LoginButtonContainer = () => {
  return (
    <div class="LoginButtonContainer">
      <button className="LoginButton">
      <span>로그인</span>
      </button>
      <button className="KakaoButton">
      <img src='image/kakao-logo.png' alt='kakao-logo' className="KakaoImage" />
      카카오로 로그인
      </button>
    </div>
  )
}

export default LoginButtonContainer


