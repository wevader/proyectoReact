import { memo, useContext, useState } from "react"
import { dataContext } from "../../Context/DataContext"
import ButtonChange from "./ButtonChange"


const ItemDetailElement = () => {
    const { detail, buyProducts } = useContext(dataContext)
    const [inputType, setInputType] = useState("button")

    const handleInter = () => {
        setInputType("input")
    }

    
    return detail.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={`../${product.imagen}`} alt="img-product-card" />
                    <h3> {product.nombre} </h3>
                    <h3> {product.marca} </h3>
                    <h4> {product.conexion} </h4>
                    <h4> {product.iluminacion} </h4>
                    <h5> $ {product.precio * product.cantidad} </h5>
                    {
                        inputType === "button" ? 
                        <button onClick={ () => { buyProducts(product), handleInter()}} className='buyButton'>Add Cart</button> : <ButtonChange/>
                    }
                    
            </div>
        )
        
    })

    }

export default ItemDetailElement
