import { useContext } from "react"
import { dataContext } from "../Context/DataContext"

const CheckOutContent = () => {

    const {id, formData, orders} = useContext(dataContext)
  return (
    <div>
        <h3>Purchase Summary</h3>
        <h3> {formData.name} </h3>
        <h3> {formData.phone} </h3>
        <h3> {formData.email} </h3>
        <h3> ID buy: {id} </h3>
        <h3>Total: $ {orders.total} </h3>
        <h3>Thank for your preferent</h3>
        
        

    
    </div>

  )
}
export default CheckOutContent
