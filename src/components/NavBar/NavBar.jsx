import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
return (
  <div>
    <nav className="navbar navbar-expand-lg nabbar-dark bg-primary" >
  <div className="container-fluid">
    <Link to ="/inicio" class="navbar-brand" href="" width = {30}>
        <h1>noober</h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to = '/inicio' >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = '/items' >Items</Link>
        </li>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>
</div>
)
}

export default NavBar
