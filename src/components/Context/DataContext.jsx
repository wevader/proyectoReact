import { createContext, useState, useEffect} from "react";
import {collection, addDoc, getDocs, getFirestore} from "firebase/firestore"


export const dataContext = createContext();

const DataProvider = ( {children} ) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [detail, setDetail] = useState([])
    const [orders, setOrders] = useState ([])
    const [id, setId] = useState(null)
    const [formData, setFormData] = useState(
        {
            name: "",
            phone: "",
            email: ""
        }
    )
    

    useEffect( () => {
                
        const db= getFirestore()
        const queryCollection = collection(db, "productos")
        getDocs(queryCollection)
        .then(resp => setData(resp.docs.map(product => ({id: product.id, ...product.data()}))))
        .catch (err => console.log(err))
},[])

    const buyProducts = (product) => {
        const productRepeat = cart.find((item) => item.id === product.id)

        if(productRepeat){
            setCart(cart.map((item)=> (item.id === product.id ? {...product, cantidad: productRepeat.cantidad + 1}: item)))
        }else{
            setCart([...cart, product])
        }
    }
    

    const detailProduct = (id) => {
        const foundId = data.find((element) => element.id === id)

        const newDetail = data.filter((element) => {
            return element === foundId
        })
        setDetail(newDetail)
    }

    const handleBuy = async() => {

        const order ={
          buyer: formData,
          items: cart.map(({id, nombre, precio, cantidad}) => ({id, nombre, precio, cantidad})),
          total: total
        }
            const db = getFirestore()
            const queryCollection = collection(db, "orders")
            setOrders(order)
            addDoc(queryCollection, order)
            .then(resp => setId (resp.id))
            .catch(err=> console.log(err))
            .finally(()=> console.log("Gracias por su compra"))
            setCart([])
            
        
      } 

      const total = cart.reduce((acc, elemt) => acc + (elemt.precio * elemt.cantidad), 0)
     
    return <dataContext.Provider value={{cart, detail, id, total, formData, orders, setFormData, setCart, buyProducts, setDetail, detailProduct, handleBuy}}>{children}</dataContext.Provider>
}


export default DataProvider;