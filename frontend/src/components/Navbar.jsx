import { NavLink } from "react-router-dom";

// isActive -> React Router automatically checks whether the current URL matches the link
export function Navbar() {
    return (
	<nav className="custom-navbar">
	    <NavLink
		to="/practice"
		className={({ isActive }) => isActive ? "active" : ""}
	    >
		Practice
	    </NavLink>

	    <NavLink
		to="/manage"
		className={({ isActive }) => isActive ? "active" : ""}
	    >
		Manage
	    </NavLink>
	</nav>
    )
}
