import React from 'react'
import { connect } from 'react-redux'

//actions
import { toggleCartHidden } from '../../redux/cart/cart.actions'

//selectors
import { selectedCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  itemCount: selectedCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
