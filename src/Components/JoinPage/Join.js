import React from "react";
import "./Join.css";
import EmailContainer from "./EmailContainer";
import AccountContainer from "./AccountContainer";
import InputContainer from "./InputContainer";
import JoinButton from "./JoinButton";
import PWContainer from "./PWContainer";
import NicnameContainer from "./NicnameContainer";
import ProfileSetting from "./ProfileSetting";
import NextLine from "./NextLine";
import CommonLine from "../Common/CommonLine"

const Join = () => {
  return (
    <div class="Entire-Join">
      <CommonLine />
      <div className="Join">
        <ProfileSetting />
        <EmailContainer />
        <PWContainer />
        <NextLine />
        <NicnameContainer />
        <InputContainer what="이름" text="수령인의 이름을 입력하세요." />
        <InputContainer what="전화번호" text="- 없이 입력" />
        <AccountContainer />
        <JoinButton />
      </div>
    </div>
  );
};

export default Join;
