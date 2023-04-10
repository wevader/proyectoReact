import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
return (
<div>
<nav className="navbar navbar-expand-lg nabbar-dark bg-primary" id="head"  >
  <div className="container-fluid">
  <Link to ="./aboutus" className="navbar-brand" href="" width = {30}>
        <h1>noober</h1>
  </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
  </button>
    <Link to={"/cart"}><CartWidget/></Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto" id="navbar-Menu">
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? "btn btn-primary" : "btn btn-outline-black" } to = '/' >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? "btn btn-primary" : "btn btn-outline-black" } to = '/products' >Products</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
)
}

export default NavBar
