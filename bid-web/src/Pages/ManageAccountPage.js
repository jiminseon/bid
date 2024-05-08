import React from 'react';
import Layout from '../Components/Layout/Layout';
import SelectBar2 from '../Components/ManageAccount/SelectBar2';
import MailCheck from '../Components/ManageAccount/MailCheck';
import InfoBox from '../Components/ProfileEdit/InfoBox';
import Address from '../Components/ManageAccount/Address';
import SaveButton from '../Components/ProfileEdit/SaveButton';

const ManageAccountPage = () => {
  return (
    <>
      <Layout>
        <SelectBar2 />
        <MailCheck />
        <InfoBox text1="비밀번호 변경" text2="" />
        <InfoBox text1="비밀번호 확인" text2="" />
        <Address />
        <SaveButton />
      </Layout>
    </>
  );
};

export default ManageAccountPage ;
