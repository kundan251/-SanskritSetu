import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.user.role !== "admin") {
        throw new Error(
          "Access Denied! Admin permission required."
        );
      }

      sessionStorage.setItem("token", data.token);

      sessionStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Open the originally requested admin page
      const redirectPath =
        location.state?.from?.pathname || "/admin/dashboard";

      const redirectSearch =
        location.state?.from?.search || "";

      const redirectHash =
        location.state?.from?.hash || "";

      navigate(
        `${redirectPath}${redirectSearch}${redirectHash}`,
        { replace: true }
      );

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-page">

      {/* LEFT SIDE */}
      <div className="admin-login-left">

        <Link to="/" className="admin-logo">
          <span className="admin-logo-icon">ॐ</span>
          <span>
            Sanskrit<span>Setu</span>
          </span>
        </Link>

        <div className="admin-welcome-content">

          <div className="admin-shield">
            ♛
          </div>

          <span className="admin-small-label">
            ADMINISTRATOR PORTAL
          </span>

          <h1>
            Manage Knowledge.
            <br />
            <span>Preserve Wisdom.</span>
          </h1>

          <p>
            Welcome to the SanskritSetu administration
            portal. Manage Sanskrit terminology,
            categories, users and knowledge resources
            from one place.
          </p>

          <div className="admin-features">
            <div>✓ Manage Glossary Words</div>
            <div>✓ Manage Categories</div>
            <div>✓ Monitor Website Activity</div>
          </div>

        </div>

        <div className="admin-left-footer">
          ॥ विद्या ददाति विनयं ॥
          <span>© 2026 SanskritSetu</span>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="admin-login-right">

        <div className="admin-login-card">

          <div className="admin-card-top">
            <span className="admin-lock">🔐</span>
            <span className="admin-secure-badge">
              SECURE ACCESS
            </span>
          </div>

          <div className="admin-form-heading">
            <span>WELCOME ADMIN</span>
            <h2>Admin Login</h2>
            <p>
              Enter your credentials to access the
              control panel.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="admin-input-group">
              <label htmlFor="admin-email">
                Email Address
              </label>

              <input
                id="admin-email"
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="username"
                required
              />
            </div>

            <div className="admin-input-group">
              <label htmlFor="admin-password">
                Password
              </label>

              <div className="admin-password-box">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <div className="admin-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="admin-login-button"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Sign In to Dashboard"}
              {!loading && <span> →</span>}
            </button>

          </form>

          <div className="admin-login-divider">
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>

          <div className="admin-security-note">
            🛡 Your admin session is protected.
          </div>

          <Link to="/" className="admin-back-link">
            ← Back to Main Website
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;