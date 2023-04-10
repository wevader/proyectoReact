import { useContext } from "react"
import { dataContext } from "../Context/DataContext"

const CartItemCounter = ( {product} ) => {
    const {cart, setCart, buyProducts} = useContext(dataContext)

    const decrese = ()=>{
        const productRepeat = cart.find((item) => item.id === product.id)

        productRepeat.cantidad !== 1 &&
        setCart(cart.map((item)=>(item.id === product.id ? {...product, cantidad:
            productRepeat.cantidad - 1}: item)))

    }

    
return (
    <div>
        <p className="counter-button" onClick={decrese}>-</p>
        <p> {product.cantidad} </p>
        <p className="counter-button" onClick={()=> buyProducts(product)}>+</p>
    </div>
)
}

export default CartItemCounter
