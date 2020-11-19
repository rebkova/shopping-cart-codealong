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
      state.items.push(action.payload)
    }
  }
})