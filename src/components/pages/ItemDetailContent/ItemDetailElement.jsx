import { useContext } from "react"
import { dataContext } from "../../Context/DataContext"

const ItemDetailElement = () => {
    const { detail, buyProducts } = useContext(dataContext)

    return detail.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={`../${product.imagen}`} alt="img-product-card" />
                    <h3> {product.nombre} </h3>
                    <h4> {product.conexion} </h4>
                    <h4> {product.iluminacion} </h4>
                    <h5> $ {product.precio * product.cantidad} </h5>
                    <button onClick={ () => buyProducts(product)} className='buyButton'>Buy</button>
            </div>
        )
        
    })

    }

export default ItemDetailElement
