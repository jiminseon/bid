import React from 'react';
import styled from 'styled-components';

const Address = () => {
  return (
    <>
      <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div>
          <DIV>
            <DOT>•</DOT>
            <TEXT>기본 배송지 변경</TEXT>
          </DIV>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <INPUT1>
              <input type="text" placeholder="우편번호를 입력하세요." style={{ width: '23.25rem', border: 'none', background: 'none', outline: 'none', margin: 'auto auto auto 1rem' }} />
            </INPUT1>
            {/* 온클릭 우편번호 찾기 기능추가 */}
            <BUTTON>우편번호 찾기</BUTTON>
          </div>

          <br />
          <INPUT2>
            <input type="text" placeholder="" style={{ width: '31.25rem', border: 'none', background: 'none', outline: 'none', margin: 'auto auto auto 1rem' }} />
          </INPUT2>
          <br />
          <INPUT2>
            <input type="text" placeholder="상세주소를 입력하세요. (건물, 아파트, 동/호수 입력)" style={{ width: '31.25rem', border: 'none', background: 'none', outline: 'none', margin: 'auto auto auto 1rem' }} />
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
  width: 23.25rem;
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

const BUTTON = styled.button`
  width: 7.125rem;
  height: 2.3125rem;
  flex-shrink: 0;
  border-radius: 6.25rem;
  background: #000;

  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export default Address;
