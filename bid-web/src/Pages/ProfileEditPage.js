import React from 'react';
import Layout from '../Components/Layout/Layout';
import SelectBar from '../Components/ProfileEdit/SelectBar';
import ButtonBar from '../Components/ProfileEdit/ButtonBar';
import InfoBox from '../Components/ProfileEdit/InfoBox';
import SaveButton from '../Components/ProfileEdit/SaveButton';

const ProfileEditPage = () => {
  return (
    <Layout>
      <SelectBar />
      <ButtonBar />
        <InfoBox text1="닉네임" text2="Bid 내에서 사용됩니다." />
        <InfoBox text1="이름" text2="수령인의 이름을 입력하세요." />
        <InfoBox text1="전화번호" text2="- 없이 입력하세요." />
      <SaveButton/>
    </Layout>
  );
};

export default ProfileEditPage;