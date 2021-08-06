import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../Cart/Cart'

export default configureStore({
  reducer: {
      Cart: CartReducer
  }
})