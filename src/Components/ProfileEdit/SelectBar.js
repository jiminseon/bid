import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SelectBar() {
  const navigate = useNavigate();

  return (
    <>
      <DIV>
        <SELECTDIV>
          프로필 수정
          <HR />
        </SELECTDIV>
        <div style={{width: '8.75rem'}}></div>
        <NONESELECTDIV onClick={() => {navigate('/manage-account');}}>
          계정 관리
          <HR color='white'/>
        </NONESELECTDIV>
      </DIV>
    </>
  );
};

const DIV = styled.span`
  width: 100%;
  height: 2.8125rem;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  flex-direction: row;
`;

const SELECTDIV = styled.div`
  display: flex;
  width: 6.25rem;
  height: 1.3125rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-content: center;

  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0625rem;
  cursor: default;
`;

const NONESELECTDIV = styled.div`
  display: flex;
  width: 6.25rem;
  height: 1.3125rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #808080;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0625rem;
  cursor: default;
`;

const HR = styled.hr`
  width: 6.25rem;
  border: solid 0.125rem ${(props) => props.color || 'black'};
`;

export default SelectBar;
