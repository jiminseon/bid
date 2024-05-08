import React from 'react';

const Mypage = ({ PageUrl, MypageImage, MypageName, onClick }) => {
  return (
    <button className='mypage' onClick={onClick}>
      <img src={MypageImage} alt={MypageName} />
    </button>
  );
}

export default Mypage;