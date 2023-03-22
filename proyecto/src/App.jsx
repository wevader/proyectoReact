import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Items from './components/pages/Items'
import Inicio from './components/pages/Inicio'

function App () {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/' exact Component={Inicio}></Route>
          <Route path='/' exact Component={Items}></Route>
      </Routes>
      <ItemListContainer/>

    </div>
  )
}

export default App
