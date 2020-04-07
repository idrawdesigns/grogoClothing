import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART,
} from './cart.types'

import { addItemToCart, removeItemFromCart } from './cart.utils'
import { CreateReducer } from '../util/reducerUtils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const toggleCartHidden = (state) => {
  return {
    ...state,
    hidden: !state.hidden,
  }
}

const addItem = (state, payload) => {
  return {
    ...state,
    cartItems: addItemToCart(state.cartItems, payload),
  }
}

const clearItemFromCart = (state, payload) => {
  return {
    ...state,
    cartItems: state.cartItems.filter((cartItem) => cartItem.id !== payload.id),
  }
}

const removeItemFromTheCart = (state, payload) => {
  return {
    ...state,
    cartItems: removeItemFromCart(state.cartItems, payload),
  }
}

export default CreateReducer(INITIAL_STATE, {
  [TOGGLE_CART_HIDDEN]: toggleCartHidden,
  [ADD_ITEM]: addItem,
  [CLEAR_ITEM_FROM_CART]: clearItemFromCart,
  [REMOVE_ITEM_FROM_CART]: removeItemFromTheCart,
})
