import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const [formData, setFormData] = useState({
email: "",
password: "",
remember: false,
});

function handleChange(event) {
const { name, value, type, checked } = event.target;


setFormData((previous) => ({
  ...previous,
  [name]: type === "checkbox" ? checked : value,
}));

setError("");


}

async function handleSubmit(event) {
event.preventDefault();


setError("");
setSuccess("");
setLoading(true);

try {
  const response = await fetch(
    "http://localhost:5000/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed.");
  }

  // Save JWT Token
  sessionStorage.setItem("token", data.token);

  // Save logged-in user details
  sessionStorage.setItem("user", JSON.stringify(data.user));

  setSuccess("Login successful! Redirecting...");

  setFormData({
    email: "",
    password: "",
    remember: false,
  });

  setTimeout(() => {
    navigate("/dashboard");
  }, 1200);

} catch (error) {
  setError(
    error.message || "Something went wrong. Please try again."
  );
} finally {
  setLoading(false);
}


}

return ( <main className="login-page"> <section className="login-card">


    <Link to="/" className="login-brand">
      <span className="login-brand-icon">ॐ</span>
      <span>
        Sanskrit<span className="brand-highlight">Setu</span>
      </span>
    </Link>

    <div className="login-heading">
      <span className="login-label">WELCOME BACK</span>
      <h1>Login to Your Account</h1>
      <p>Continue exploring the wisdom of Sanskrit.</p>
    </div>

    <form onSubmit={handleSubmit} className="login-form">

      <label htmlFor="login-email">Email Address</label>

      <input
        id="login-email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        autoComplete="email"
        required
      />

      <div className="login-password-label">
        <label htmlFor="login-password">Password</label>

        <Link to="/forgot-password" className="forgot-password">
          Forgot Password?
        </Link>
      </div>

      <div className="password-input-wrapper">
        <input
          id="login-password"
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
          className="toggle-password"
          onClick={() =>
            setShowPassword((previous) => !previous)
          }
          aria-label={
            showPassword ? "Hide password" : "Show password"
          }
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <label className="remember-option">
        <input
          type="checkbox"
          name="remember"
          checked={formData.remember}
          onChange={handleChange}
        />
        <span>Remember me</span>
      </label>

      {error && (
        <p className="login-error" role="alert">
          {error}
        </p>
      )}

      {success && (
        <p className="login-success" role="status">
          {success}
        </p>
      )}

      <button
        type="submit"
        className="login-submit"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
        {!loading && <span>→</span>}
      </button>

    </form>

    <div className="login-divider">
      <span>OR</span>
    </div>

    <p className="signup-prompt">
      Don't have an account?{" "}
      <Link to="/signup">Create Account</Link>
    </p>

    <p className="login-footer">
      ॥ विद्या ददाति विनयं ॥
    </p>

  </section>
</main>

);
}

export default Login;
