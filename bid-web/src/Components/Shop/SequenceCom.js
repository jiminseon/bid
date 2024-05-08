import React from 'react'

const SequenceCom = ({ SequenceName }) => {
  return (
    <button className='sequenceCom'>
      <p className='sequenceDot'>•</p>
      <span className='sequenceName'>{SequenceName}</span>
    </button>
  )
}

export default SequenceCom