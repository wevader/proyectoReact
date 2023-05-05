import { Link } from "react-router-dom"



const ButtonChange = (handleInter) => {
    

    
  return (
    <>
    <Link  to={`/cart`}><button className="btn btn-outline-success">
        Go to Cart
    </button></Link>
    <Link to={`/`}><button className="btn btn-outline-success">
        Continue Shopping   
   </button></Link>
   </>
  )
}

export default ButtonChange
