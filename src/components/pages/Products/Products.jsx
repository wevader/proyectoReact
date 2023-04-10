import { useContext } from 'react'
import { dataContext } from '../../Context/DataContext'
import { Link } from 'react-router-dom'
import "./Products.css"

const Products = () => {
    const { data, detail, setDetail} = useContext(dataContext)
    
    const detailProduct = (id) => {
        const foundId = data.find((element) => element.id === id)

        const newDetail = data.filter((element) => {
            return element === foundId
        })
        setDetail(newDetail)
    }

    return data.map((product)=> {
        return (
                <div className="card" key={product.id}>
                    <img src={product.imagen} alt="img-product-card" />
                    <h3> {product.nombre} </h3>
                    <h5> $ {product.precio} </h5>
                    <Link to= {`/detail/${product.id}`}  onClick={() => detailProduct(product.id)}><button  className='detailButton'>Detail</button></Link>
                    
                </div>
        
    )
})
}

export default Products
