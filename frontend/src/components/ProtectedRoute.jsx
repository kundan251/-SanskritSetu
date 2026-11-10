import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, adminOnly = false }) {
  const location = useLocation();

  const token = sessionStorage.getItem("token");

  let user = null;

  try {
    user = JSON.parse(
      sessionStorage.getItem("user") || "null"
    );
  } catch (error) {
    user = null;
  }

  // Check Login
  if (!token || !user) {
    return (
      <Navigate
        to={adminOnly ? "/admin/login" : "/login"}
        state={{ from: location }}
        replace
      />
    );
  }

  // Check Admin Role
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Admin cannot access user-only dashboard
  if (!adminOnly && user.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;