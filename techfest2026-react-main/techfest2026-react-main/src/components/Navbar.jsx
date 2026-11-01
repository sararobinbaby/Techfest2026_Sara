
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h2>TechFest 2026</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/my-registrations">My Registrations</Link>
      </div>

      <div className="nav-actions">
        <Link to="/register" className="auth-link">
          Register
        </Link>

        <Link to="/login" className="auth-link login-link">
          Login
        </Link>

        <button onClick={toggleTheme}>
          {theme === "light Theme " ? "Dark Theme " : "Light Theme"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
