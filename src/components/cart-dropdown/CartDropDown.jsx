import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import CustomButton from '../custom-button/CustomButton'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropDown = ({ cartItems, dispatch, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton
          onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
