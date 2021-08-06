import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Cart/Cart'

export default function Cart() {
    const cartItems = useSelector(state => state.Cart.cartItems);
    const dispatch = useDispatch();
    return (
        <div>
           <p> {cartItems}</p> 
           <button onClick ={() => dispatch(increment())}>Add item to cart </button>
           <button onClick ={() => dispatch(decrement())}>remove item to cart </button>
        </div>
    )
}
