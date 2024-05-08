import React from 'react'
import './Login.css'

const LoginInput = () => {
  return (
    <div class="LoginInput">
        <input className="IdInput" type="text" placeholder="전화번호, 사용자이름 또는 이메일" />
        <input className="PwInput" type="password" placeholder="비밀번호" />
    </div>
  )
}

export default LoginInput