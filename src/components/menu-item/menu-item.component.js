import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

import './menu-item.styles.css';
import { addItem } from '../../redux/cart/cart.actions';

const MenuItem = ({ item, addItem }) => {
  const {title, imageUrl, price} = item;
  

  return (
  <div className='menu-item'>
     <div className='original'>
      <img src={imageUrl} alt='digital art' width='100%' height='auto'/>
    </div> 
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='container'>
    <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
    <div className='content'>
      <h1 className='art-title'>{title.toUpperCase()}</h1>
      <h1 className='price'>$ {price}</h1>     
    </div>
    
  </div>
  )
    };

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(MenuItem);