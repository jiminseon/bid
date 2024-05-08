import React from 'react';
import styled from 'styled-components';

function InfoBox(props){
  return (
    <>
      <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div>
          <DIV>
            <DOT>•</DOT>
            <TEXT>{props.text1}</TEXT>
          </DIV>
          <INPUT>
            <input type="text" placeholder={props.text2} style={{border: 'none', background: 'none', outline: 'none', margin: 'auto auto auto 1rem' }} />
          </INPUT>
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

const INPUT = styled.div`
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

export default InfoBox;
