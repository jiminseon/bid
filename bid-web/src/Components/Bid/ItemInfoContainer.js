import React from 'react'
import ItemTitle from './ItemTitle'
import ItemPrice from './ItemPrice'
import ItemDetail from './ItemDetailContainer'
//import ItemBtn from './ItemBtn'
import ItemDelete from './ItemDelete'

const IteminfoContainer = () => {

  const userId = 1;
  const postId = 2;

  return (
    <div className='itemInfo-container'>
      <div className='itemInfo'>
        <ItemTitle text='untitle' /> 
        {userId == postId ? <ItemDelete /> : <ItemPrice />} 
        <ItemDetail />
      </div>
    </div>
  )
}

export default IteminfoContainer