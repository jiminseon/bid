import React from "react";
import "./Join.css";
import ProfileButton from './ProfileButton';

const ProfileSetting = () => {

    const handleProfileButtonClick = (action) => {
        // Handle the button click based on the action (등록 or 삭제)
        console.log(`프로필 ${action}하기 버튼이 클릭되었습니다.`);
      };
      
  return (
    <div className="profile">
      <div className="welcome">"Welcome To bid"</div>
      <img
        src="image/join-profile.png"
        className="join-profile"
        alt="join-profile"
      />
      <div className="ProfileButtonContainer">
        <ProfileButton
          text="프로필 등록"
          onClick={() => handleProfileButtonClick("등록")}
        />
        <ProfileButton
          text="프로필 삭제"
          onClick={() => handleProfileButtonClick("삭제")}
        />
      </div>
    </div>
  );
};

export default ProfileSetting;
