import { useContext } from "react"
import { dataContext } from "../Context/DataContext"

import "./CartContent.css"

const CartItemCounter = ( {product} ) => {
    const {cart, setCart, buyProducts} = useContext(dataContext)

    const decrese = ()=>{
        const productRepeat = cart.find((item) => item.id === product.id)

        productRepeat.cantidad !== 1 &&
        setCart(cart.map((item)=>(item.id === product.id ? {...product, cantidad:
            productRepeat.cantidad - 1}: item)))

    }

    
return (
    <div className="counter">
        <button className="counter-button" onClick={decrese}>-</button>
        <p className="number"> {product.cantidad} </p>
        <button className="counter-button" onClick={()=> buyProducts(product)}>+</button>
    </div>
)
}

export default CartItemCounter
