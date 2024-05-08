import React from 'react';

const ProfileImage = () => {
  return <img src={process.env.PUBLIC_URL + '/image/profile.svg'} alt="Profile" />;
};

export default ProfileImage;