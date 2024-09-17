import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearCart } from '../features/cartSlice'

const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
