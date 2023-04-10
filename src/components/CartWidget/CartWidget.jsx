import "./CartWidget.css"
import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const {cart} = useContext(dataContext)
return (
    <div class="logoCarrito">
        <i className="bi bi-cart"> {cart.length} </i>
    </div>
)
}

export default CartWidget
