import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Glossary from "./pages/Glossary";
import Categories from "./pages/Categories";
import WordDetails from "./pages/WordDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminWords from "./pages/AdminWords";
import AdminCategories from "./pages/AdminCategories";
import AdminUsers from "./pages/AdminUsers";
import AdminMessages from "./pages/AdminMessages";
import AdminProfile from "./pages/AdminProfile";
import AdminSettings from "./pages/AdminSettings";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  const location = useLocation();

  // Hide Navbar on all Admin Pages
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/word/:id" element={<WordDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Profile */}
        <Route
          path="/admin/profile"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminProfile />
            </ProtectedRoute>
          }
        />

        {/* Admin Settings */}
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminSettings />
            </ProtectedRoute>
          }
        />

        {/* Admin Manage Words */}
        <Route
          path="/admin/words"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminWords />
            </ProtectedRoute>
          }
        />

        {/* Admin Manage Categories */}
        <Route
          path="/admin/categories"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminCategories />
            </ProtectedRoute>
          }
        />

        {/* Admin Manage Users */}
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminUsers />
            </ProtectedRoute>
          }
        />

        {/* Admin Manage Messages */}
        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminMessages />
            </ProtectedRoute>
          }
        />

        {/* User Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* User Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Favourite Words */}
        <Route
          path="/favourites"
          element={
            <ProtectedRoute>
              <Favourites />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;