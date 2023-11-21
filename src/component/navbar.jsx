import { Link } from "react-router-dom"

const Navabr = () => {
  return (
 <>
  <nav className="navbar #7986cb indigo lighten-2">
    <div className="nav-wrapper container">
      <Link to="/" className="brand-logo">Meals</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
 </>
  )
}

export default Navabr
