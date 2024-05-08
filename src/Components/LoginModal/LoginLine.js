import React from 'react'
import './Login.css'

const LoginLine = () => {
  return (
    <div class="LoginLine">
          <div className="OrLine">
            <img src='image/login-gray-line.png' alt='login-gray-line' className="login-gray-line1" />
            <span className='or'>또는</span>
            <img src='image/login-gray-line.png' alt='login-gray-line' className="login-gray-line2" />
          </div>
    </div>
  )
}

export default LoginLine