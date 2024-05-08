import React from 'react';
import styled from 'styled-components';

const MailCheck = () => {
  return (
    <>
      <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div>
          <DIV>
            <DOT>•</DOT>
            <TEXT>메일</TEXT>
          </DIV>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <INPUT1>
              <input type="text" placeholder="예) bid@bid.co.kr" style={{ width: '23.25rem', border: 'none', background: 'none', outline: 'none', margin: 'auto auto auto 1rem' }} />
            </INPUT1>
            {/* 온클릭 인증번호 전송 기능 추가 */}
            <div style={{margin: 'auto auto',textDecoration: 'underline solid #888888'}}>인증번호 전송</div>
          </div>
          <br />
          <INPUT2>
            <input type="text" placeholder="인증번호를 입력하세요." style={{ width: '31.25rem', border: 'none', background: 'none', outline: 'none', margin: 'auto auto auto 1rem' }} />
            <p style={{ margin: 'auto 1rem auto auto', color: 'black' }}>10:00</p>
          </INPUT2>
        </div>
      </span>
    </>
  );
};

const DIV = styled.div`
  display: flex;
`;

const DOT = styled.p`
  color: #e40c0c;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TEXT = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const INPUT1 = styled.div`
  display: flex;
  align-content: center;
  width: 23.75rem;
  height: 2.8125rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #f2f2f2;
  border: solid 1px #e8eaec;

  color: #808080;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const INPUT2 = styled.div`
  display: flex;
  align-content: center;
  width: 31.25rem;
  height: 2.8125rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #f2f2f2;
  border: solid 1px #e8eaec;

  color: #808080;
  font-family: 'Pretendard Variable';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default MailCheck;
