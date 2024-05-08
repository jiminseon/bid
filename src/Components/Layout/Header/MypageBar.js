import Mypage from './Mypage';
import { useNavigate } from 'react-router-dom';
import Login from '../../LoginModal/Login';
import React, { useState } from 'react';

const MypageBar = () => {
  const [modalType, setModalType] = useState(null);
  const navigate = useNavigate();

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const mypageData = [
    { id: "/like", image: "image/Like.png", name: "Like" },
    { id: "/login", image: "image/Mypage.png", name: "Mypage" },
  ];

  const handleMypageClick = () => {
    openModal('/login');
  };

  return (
    <div className='mypageBar'>
      {mypageData.map((data, index) => (
        <Mypage
          key={index}
          PageUrl={data.id}
          MypageImage={data.image}
          MypageName={data.name}
          onClick={handleMypageClick}
        />
      ))}
      {modalType === '/login' && (
        <Login onClose={closeModal} />
      )}
    </div>
  );
};

export default MypageBar;