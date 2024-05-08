import React from 'react';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';

const ButtonBar = () => {
  return (
    <>
      <div style={{ textAlign: 'center', margin: '4.87rem auto 1.88rem' }}>
        <ProfileImage />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', margin: '0 auto 4.44rem' }}>
        {/* 온클릭 등록 기능 함수 추가 */}
        <Button>프로필 등록</Button>
        <div style={{ width: '1.25rem' }}></div>
        {/* 온클릭 삭제 기능 함수 추가 */}
        <Button>삭제하기</Button>
      </div>
    </>
  );
};

const Button = styled.button`
  width: 6.5rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border: none;
  border-radius: 6.25rem;
  background: #f2f2f2;

  color: #8e8e8e;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default ButtonBar;
