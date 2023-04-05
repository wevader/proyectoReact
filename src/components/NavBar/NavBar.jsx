import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
return (
<div>
<nav className="navbar navbar-expand-lg nabbar-dark bg-primary" >
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
          <Link className="nav-link" to = '/' >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = '/products' >Products</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
)
}

export default NavBar
