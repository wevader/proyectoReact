import { memo, useContext, useEffect, useState } from 'react'
import {collection, getDocs, getFirestore, where, query} from "firebase/firestore"

import { dataContext } from '../../Context/DataContext'
import { Link, useParams } from 'react-router-dom'
import "./Products.css"
import Loading from '../../Loading/Loading'

const Products = memo (() => {

    const [data, setData] = useState([])
    const {detailProduct} = useContext(dataContext)
    const {cname} = useParams()


    useEffect( () => {
        const db= getFirestore()
        const queryCollection = collection(db, "productos")  
        if (!cname){
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch (err => console.log(err))
            .finally(()=> console.log(data))
    }
                


        else{

            const queryFilter = query(queryCollection, 
            where("nombre", "==", cname) )
            getDocs(queryFilter)
            .then(res =>setData( res.docs.map(product => ({id: product.id, ...product.data()}))))    
            .catch (err => console.log(err))    
            .finally(()=> console.log(data))        
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
        <Loading/>
    )
}
   
})

export default Products
