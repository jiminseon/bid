import React from "react";
import "./MyPage.css";

const MyBid = () => {
  return (
    <div className="MyBid">
      <div className="EditBar">
        <div className="EditBarContent1">
          <img
            src="image/mypage-marker1.png"
            className="mypage-marker1"
            alt="mypage-marker1"
          />
          <span className="UsersBid1">Jeh030730</span>
          <span className="UsersBid2">님의 Bid</span>
        </div>

        <button className="EditButton">회원 정보 수정</button>
      </div>


      <div class="ShowMoney">
        {/* 프로필 이미지 */}

        <button className="profile-change">
            <img
              src="image/mypage-profile1.png"
              className="mypage-profile1"
              alt="mypage-profile1"
            />
        </button>
        
        {/* 예치금 */}
        <div className="MoneyBox">
          <div className="MoneyBoxContent1">예치금</div>
          <img
            src="image/MoneyBoxContent2.png"
            className="MoneyBoxContent2"
            alt="MoneyBoxContent2"
          ></img>
          <div className="MoneyBoxContent3">340,000원</div>
        </div>


        {/* 경매 참여 가능 금액 */}
        <div className="MoneyBox">
          <div className="MoneyBoxContent1">경매 참여 가능 금액</div>
          <img
            src="image/MoneyBoxContent2.png"
            className="MoneyBoxContent2"
            alt="MoneyBoxContent2"
          ></img>
          <div className="MoneyBoxContent3">340,000원</div>
        </div>
      </div>
    </div>
  );
};

export default MyBid;
