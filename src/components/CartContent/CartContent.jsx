import { useContext } from "react"
import { dataContext } from "../Context/DataContext"

import CartElements from "./CartElements"
import CartTotal from "./CartTotal"

import "./CartContent.css"

const CartContent = () => {
  const {cart} = useContext(dataContext)

return cart.length > 0 ? (
    <div className="cartContent">
      <CartElements/>
      <CartTotal/>
    </div>
) : (
  <h2 className="emptyMessage">Your cart is empty</h2>
)
}

export default CartContent
