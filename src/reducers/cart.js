import { createSlice } from "@reduxjs/toolkit"
import { createElement } from "react"

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    //here we add actions which are functions
    addItem: (state, action) => {
      //by Redux toolkit using immutable library, we get 
      //a new version of state, that has a new item
      //action.payload = product object
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        //we've added a new property to our product, when it's added (quantity)
        state.items.push({ ...action.payload, quantity: 1 })
      }


    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct && existingProduct.quantity === 1) {
        //returns an array of items except the one that was already in the payload
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})