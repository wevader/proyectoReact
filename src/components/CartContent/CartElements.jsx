import { useContext, useEffect } from "react"
import { dataContext } from "../Context/DataContext"

import CartItemCounter from "./CartItemCounter"

const CartElements = () => {
    const {cart, setCart} = useContext(dataContext)

    const deleteProduct = (id) => {
        const foundId = cart.find((element) => element.id === id)

        const newCart = cart.filter((element) => {
            return element !== foundId
        })
        setCart(newCart)
    }
    return cart.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.imagen} alt="img-product-card" />
                    <h3> {product.nombre} </h3>
                    <h4> {product.conexion} </h4>
                    <h4> {product.marca} </h4>
                    <h4> {product.iluminacion} </h4>
                    <CartItemCounter product= {product} />
                    <h5> $ {product.precio * product.cantidad} </h5>
                    <h3 className="delete" onClick={()=> deleteProduct(product.id)} >🗑</h3>
            </div>
        )
        
    })
    
}

export default CartElements
