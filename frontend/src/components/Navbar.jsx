
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function goToSection(sectionId) {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        DEV@Deakin<span>.</span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <button type="button" className="nav-placeholder" onClick={() => goToSection("about")}>
            About
          </button>
        </li>
        <li>
          <button type="button" className="nav-placeholder" onClick={() => goToSection("work")}>
            Projects
          </button>
        </li>
        <li>
          <button type="button" className="nav-placeholder" onClick={() => goToSection("articles")}>
            Articles
          </button>
        </li>
        <li>
          <button type="button" className="nav-placeholder" onClick={() => goToSection("tutorials")}>
            Tutorials
          </button>
        </li>
        <li>
          <button type="button" className="nav-placeholder" onClick={() => goToSection("contact")}>
            Contact
          </button>
        </li>
        <li>
          <button type="button" className="nav-placeholder" onClick={() => goToSection("signup")}>
            Daily Insider
          </button>
        </li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
