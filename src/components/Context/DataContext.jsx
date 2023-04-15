import { createContext, useState, useEffect} from "react";
import axios from "axios";
const json = "stock.json"


export const dataContext = createContext();

const DataProvider = ( {children} ) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [detail, setDetail] = useState([])

    useEffect( () => {
        
            
        new Promise ((res, rej) => {
            setTimeout (()=>{
                async function getStock(){
                    const res= await axios.get(json)
                    setData(res.data) 
                }
            getStock()
            }, 2000)
            
        })
        }, [])
    
    

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

     
    return <dataContext.Provider value={{cart, detail, setCart, buyProducts, setDetail, detailProduct}}>{children}</dataContext.Provider>
}


export default DataProvider;