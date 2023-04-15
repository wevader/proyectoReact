import './App.css'

import { Routes, Route, Navigate} from 'react-router-dom'


import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartContent from './components/CartContent/CartContent'
import AboutUS from './components/pages/AboutUs/AboutUS'
import DataProvider from './components/Context/DataContext'
import Home from './components/Home/Home'
import ItemDetailContent from './components/pages/ItemDetailContent/ItemDetailContent'
import Products from './components/pages/Products/Products'


function App () {

  
  return (
    <DataProvider>
    <div>
    <NavBar/>
    <ItemListContainer greeting="The Best Video Games Shop" />
      <Routes>
          <Route path='/aboutus' element={<AboutUS/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={ <div className='products'> <Products/> </div>}/>
          <Route path='/:cname' element={ <div className='products'> <Products/> </div>}/>
          <Route path='/cart' element={<CartContent/>}/>
          <Route path= '/detail/:pid' element={<ItemDetailContent/>}/>

          <Route path='*' element={Navigate} to = "/" />
          
      </Routes>
    </div>
    </DataProvider>
  )
}

export default App
