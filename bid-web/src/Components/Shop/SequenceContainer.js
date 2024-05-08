import React from 'react'
import SequenceCom from './SequenceCom'

/* 추천순 / 마감임박 순 / 인기순 */
const SequenceContainer = () => {

  const sequence = [
    { name: "추천순", className: "sell-menu" },
    { name: "마감임박 순", className: "menu" },
    { name: "인기순", className: "menu" }
  ];

  return (
    <div className='sequence-container'>
      <SequenceCom
        SequenceName={sequence[0].name}
      />
      <SequenceCom
        SequenceName={sequence[1].name}
      />
      <SequenceCom
        SequenceName={sequence[2].name}
      />
    </div>
  )
}

export default SequenceContainer