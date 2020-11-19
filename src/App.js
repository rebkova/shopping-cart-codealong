import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { products } from "reducers/products"
import { cart } from "reducers/cart"

//creating a single reducer from several reducers
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

//using that single reducer to create a store
const store = configureStore({ reducer: reducer }) //can also be written as {reducer}

export const App = () => (
  //provider takes the store prop
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
