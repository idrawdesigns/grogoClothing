import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

//styles
import './checkout.styles.scss'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="product">Product</span>
        </div>

        <div className="header-block">
          <span className="product">Description</span>
        </div>

        <div className="header-block">
          <span className="product">Quantity</span>
        </div>

        <div className="header-block">
          <span className="product">Price</span>
        </div>

        <div className="header-block">
          <span className="product">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem id={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckOutPage)
