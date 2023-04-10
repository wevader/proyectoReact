import { createContext, useState, useEffect } from "react";
import stock from "../api/stock";

export const dataContext = createContext();

const DataProvider = ( {children} ) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [detail, setDetail] = useState([])


    useEffect( () => {
        stock().then((res) => setData(res.data)).catch(err=>console.log(err)).finally(()=>console.log("Todo siempre al final"))
    }, [])

    const buyProducts = (product) => {
        const productRepeat = cart.find((item) => item.id === product.id)

        if(productRepeat){
            setCart(cart.map((item)=> (item.id === product.id ? {...product, cantidad: productRepeat.cantidad + 1}: item)))
        }else{
            setCart([...cart, product])
        }
    }
    return <dataContext.Provider value={{data, cart, detail, setCart, buyProducts, setDetail}}>{children}</dataContext.Provider>
}

export default DataProvider;