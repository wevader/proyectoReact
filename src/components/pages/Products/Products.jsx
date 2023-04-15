import { useContext, useEffect, useState } from 'react'
import { Jelly } from '@uiball/loaders'
import axios from "axios"
const json = "stock.json"

import { dataContext } from '../../Context/DataContext'
import { Link, useParams } from 'react-router-dom'
import "./Products.css"

const Products = () => {

    const [data, setData] = useState([])
    const {detailProduct} = useContext(dataContext)
    const {cname, pid} = useParams()
    console.log(cname)

    useEffect( () => {
        
        if (cname){
            
            new Promise ((res, rej) => {
                setTimeout (()=>{
                    async function getStock(){
                        const res= await axios.get(json)
                        setData(res.data.filter(prod => prod.nombre === cname))  
                    }
                getStock()
                }, 2000)
                
            })
            
            
     
        } else{
            new Promise ((res, rej) => {
                setTimeout (()=>{
                    async function getStock(){
                        const res= await axios.get(json)
                        setData(res.data) 
                    }
                getStock()
                }, 2000)
                
            })
            }
            }, [cname])

if (data.length !== 0){
    return data.map((product)=> {
        return (
                <div className="card" key={product.id}>
                    <img src={product.imagen} alt="img-product-card" />
                    <h3> {product.nombre} </h3>
                    <h3> {product.marca} </h3>
                    <h5> $ {product.precio} </h5>
                    <Link to = {`/detail/${product.id}`} onClick={() => detailProduct(product.id)} ><button className='detailButton'>Detail</button></Link>
                    
                </div>
        
    )
})


} else{
    return(
        <Jelly size={80} speed={0.9} color="black" />
    )
}
   
}

export default Products
