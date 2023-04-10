import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className='itemsListContainer'>
      <h2 className="itemsListContainerText"> {props.greeting} </h2>
     
    </div>
  )
}

export default ItemListContainer
