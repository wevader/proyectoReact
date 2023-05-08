import { useContext, useState } from "react"
import { dataContext } from "../Context/DataContext"
import { Link } from "react-router-dom"

const CartTotal = () => {
    const {total, formData, setFormData, handleBuy} = useContext(dataContext)
    const [inputForm, setInputForm] = useState(false) 


  const handleOnChange = (event) => {
      setFormData({...formData, 
          [event.target.name]: event.target.value})
  
  }

  const handleInter = () => {
    setInputForm(true)
  }


    if (inputForm === false){  
      return (
        <div className="cartTotal">
        <h3>Total a pagar: $ {total} </h3> 
        <button onClick={handleInter} className="buttonBuy">Buy</button>
        </div>
         )
         }else { 
           
          return( 
          <div className="cartTotal">
          <form action="">
          <input type="text"
          name="name"
          placeholder="name"
          onChange={handleOnChange}
          value={formData.name} />
          <input type="text"
          name="phone"
          placeholder="phone number"
          onChange={handleOnChange}
          value={formData.phone} />
          <input type="text"
          name="email"
          placeholder="email"
          onChange={handleOnChange}
          value={formData.email} />
          
        </form> 
        <Link to={`/CheckOutContent`}>
        <button onClick={handleBuy} className="finalizePurchase">Finalize Purchase </button>
        </Link>  
        </div>
        )
        }
        
}
export default CartTotal
