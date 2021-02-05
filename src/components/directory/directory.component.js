import React from 'react';
import IMAGE_DATA from './image.data';

import MenuItem from '../menu-item/menu-item.component';


import './directory.styles.css'

class Directory extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collections:IMAGE_DATA
    };
  }
  render() {
    
    return (
      <div className='directory-menu'>
      {this.state.collections.map(item=> (
        <MenuItem key={item.id} item={item} />
        ))}
      </div>)
     }
}
  
  


export default Directory;