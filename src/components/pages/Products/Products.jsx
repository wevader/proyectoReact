import { useContext } from 'react'
import { dataContext } from '../../Context/DataContext'
import { Link } from 'react-router-dom'
import "./Products.css"

const Products = () => {
    const { data } = useContext(dataContext)
    return data.map((product)=> {
        return (
        
            <div className='products'>
                <div className="card">
                    <img src={product.imagen} alt="img-product-card" />
                    <h6> {product.nombre} </h6>
                    <h7> {product.conexion} </h7>
                    <h8> {product.precio} </h8>
                    <button className='buyButton'>Buy</button>
                </div>
            </div>
        
    )
})
}

export default Products
