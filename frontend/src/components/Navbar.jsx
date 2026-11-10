import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  let user = null;

  try {
    user = JSON.parse(sessionStorage.getItem("user") || "null");
  } catch {
    user = null;
  }

  const isLoggedIn = Boolean(token && user);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoggedIn]);

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  }

  const firstName = user?.name?.split(" ")[0] || "User";

  return (
    <nav
      className={`navbar ${isLoggedIn ? "navbar-logged-in" : "navbar-guest"} ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      {/* FIRST NAVBAR */}
      <div className="navbar-main">
        <Link to="/" className="navbar-logo">
          <span className="logo-symbol">सं</span>
          <span className="logo-text">
            Sanskrit<span>Setu</span>
          </span>
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/glossary">Glossary</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-auth">
          {!isLoggedIn && (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </>
          )}

          <Link to="/admin/login" className="navbar-button">
            Admin Login
          </Link>
        </div>
      </div>

      {/* SECOND NAVBAR */}
      {isLoggedIn && (
        <div className="user-navbar">
          <Link to="/" className="user-navbar-logo">
            <span className="logo-symbol">सं</span>
            <span className="logo-text">
              Sanskrit<span>Setu</span>
            </span>
          </Link>

          <div className="user-nav-links">
            <Link to="/dashboard">🏠 Dashboard</Link>
            <Link to="/favourites">♥ My Favourites</Link>
            <Link to="/profile">👤 My Profile</Link>
          </div>

          <div className="user-nav-auth">
            <Link to="/admin/login" className="user-admin-button">
              Admin Login
            </Link>

            <span className="welcome-user">
              Welcome, {firstName}
            </span>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;