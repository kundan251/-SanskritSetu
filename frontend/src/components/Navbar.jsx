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
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsScrolled(false);
      setIsScrollingDown(false);
      return;
    }

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100);

      if (currentScrollY <= 100) {
        setIsScrollingDown(false);
      } else if (currentScrollY > lastScrollY + 3) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY - 3) {
        setIsScrollingDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      className={`navbar ${
        isLoggedIn ? "navbar-logged-in" : "navbar-guest"
      } ${isScrolled ? "navbar-scrolled" : ""} ${
        isScrollingDown ? "navbar-user-visible" : "navbar-user-hidden"
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
              <Link to="/login" className="login-btn">
                Login
              </Link>

              <Link to="/signup" className="signup-btn">
                Sign Up
              </Link>
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

          {/* USER NAVIGATION */}

          <div className="user-nav-links">
            <Link
              to="/dashboard"
              title="Dashboard"
              aria-label="Dashboard"
            >
              <span className="desktop-nav-text">🏠 Dashboard</span>
              <span className="mobile-nav-icon">🏠</span>
            </Link>

            <Link
              to="/favourites"
              title="My Favourites"
              aria-label="My Favourites"
            >
              <span className="desktop-nav-text">♥ My Favourites</span>
              <span className="mobile-nav-icon">♥</span>
            </Link>

            <Link
              to="/profile"
              title="My Profile"
              aria-label="My Profile"
            >
              <span className="desktop-nav-text">👤 My Profile</span>
              <span className="mobile-nav-icon">👤</span>
            </Link>
          </div>

          {/* USER AUTH SECTION */}

          <div className="user-nav-auth">
            <Link
              to="/admin/login"
              className="user-admin-button"
              title="Admin Login"
              aria-label="Admin Login"
            >
              <span className="desktop-admin-text">
                Admin Login
              </span>

              <span className="mobile-admin-icon">🔐</span>
            </Link>

            <span className="welcome-user">
              Welcome, {firstName}
            </span>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
              title="Logout"
              aria-label="Logout"
            >
              <span className="desktop-logout-text">
                Logout
              </span>

              <span className="mobile-logout-icon">↪</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;