import React from 'react'
import { useDispatch } from "react-redux"

//reducer we're going to dispatch our action to
import { cart } from "reducers/cart"


export const Product = ({ product }) => {

  //initialising the dispatch
  const dispatch = useDispatch()

  return (
    <article className="product">
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>

      <button
        type="button"
        disabled={product.inventory === 0}

        //why not cart.reducers.addItem?
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Add to cart
      </button>
    </article>
  )
}
