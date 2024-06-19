import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shoes">Shoes</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Navbar;
