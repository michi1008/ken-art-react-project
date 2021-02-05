import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selectors';

import logo from './logo.png'
import './header.styles.css';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
      <Link className='logo-container' to='/'>
        <img className='logo' src={logo} alt='Logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/about'>
          ABOUT
        </Link>       
        { currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
         ) : (
          <Link className='option' to='/signin'>SIGN IN</Link>)}
      <CartIcon />
      </div>
      { hidden ? null : <CartDropdown />}          
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);