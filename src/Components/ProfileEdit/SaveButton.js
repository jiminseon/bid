import React from 'react';
import styled from 'styled-components';

const SaveButton = () => {
  return (
    <>
      <div style={{width:'100%', display:'flex', alignContent:'center'}}>
        <BUTTON>저장하기</BUTTON>
      </div>
    </>
  );
};

const BUTTON = styled.button`
  width: 7.5rem;
  height: 2.6875rem;
  flex-shrink: 0;
  margin: 5rem auto auto auto;
  border: none;
  border-radius: 6.25rem;
  background: #e40c0c;

  color: #fff;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export default SaveButton;
