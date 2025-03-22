import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">One Piece Dex</div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          FruitsDex
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/credits"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Credits
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
