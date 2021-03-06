import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//styles
import './header-component.styles.scss'

import { auth } from '../../firebase/Firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import CartDropDown from '../cart-dropdown/CartDropDown'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return {
    currentUser,
    hidden
  }
}

export default connect(mapStateToProps, null)(Header)
