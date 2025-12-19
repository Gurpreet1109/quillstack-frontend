import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "bootstrap";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const collapseRef = useRef(null);
  const collapseInstance = useRef(null);

  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  // Update login state on route change
  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("token")));
  }, [location]);

  // Initialize collapse
  useEffect(() => {
    if (collapseRef.current) {
      collapseInstance.current = new Collapse(collapseRef.current, {
        toggle: false,
      });
    }
  }, []);

  // Toggle collapse manually
  const handleToggle = () => {
    if (collapseInstance.current) {
      collapseInstance.current.toggle();
    }
  };

  const handleChangeTheme = () => {
    document.getElementById("root").classList.toggle("dark-theme");
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar bg-light px-3 shadow-sm">
      <div className="container-fluid">
        {/* Navbar brand */}
        <Link className="navbar-brand fw-bold" to="/">
          Quill Stack
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
          ref={collapseRef}
        >
          {/* Left Nav Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="right-nav">
            {/* Search Box */}
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-info" type="button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>

            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <>
                <Link className="btn btn-outline-info" to="/login">
                  <FontAwesomeIcon icon={faRightToBracket} /> Login
                </Link>
                <Link className="btn btn-info text-white" to="/signup">
                  <FontAwesomeIcon icon={faUserPlus} /> Signup
                </Link>
              </>
            ) : (
              <button className="btn btn-danger" onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} /> Logout
              </button>
            )}

            {/* Theme Toggle */}
            <button
              className="btn btn-outline-info"
              onClick={handleChangeTheme}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
