import React from 'react';

import './cart-item.styles.css';

const CartItem = ({ item: { imageUrl, title, price, quantity }}) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />  
    <div className='item-details'>      
      <span className='title'>{title}</span>
      <span className='price'>$ {price} X {quantity} </span>
    </div>
  </div>
)
export default CartItem;