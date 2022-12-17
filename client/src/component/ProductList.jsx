
import React from 'react'
import Cards from './Card';
import { data } from './data';

const ProductList = () => {
  
  return (
    <div className="articles">
      <h1 className='titel'> - -  Articles - - </h1>
    <div className='list-articles'>
      {data.map(item=>(<Cards item={item}key={item.id}/>))}
    </div>
    </div>
    
  )
}

export default ProductList