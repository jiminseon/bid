import React from 'react'
import ItemTitle from './ItemTitle'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  return (
    <div className='ItemDetail-container'>
      <ItemTitle text='Detail' /> 
      <ItemDetail />
  </div>
  )
}

export default ItemDetailContainer