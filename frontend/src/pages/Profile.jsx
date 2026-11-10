import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Fetch Profile
  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = sessionStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load profile.");
        }

        setUser(data.user);
        setName(data.user.name);
        sessionStorage.setItem("user", JSON.stringify(data.user));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  // Update Profile
  async function handleUpdate(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    try {
      setSaving(true);

      const token = sessionStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/auth/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: name.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Profile update failed.");
      }

      setUser(data.user);
      setName(data.user.name);

      sessionStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  // Change Password
  async function handlePasswordChange(event) {
    event.preventDefault();

    setPasswordMessage("");
    setPasswordError("");

    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = passwordData;

    if (newPassword.length < 6) {
      setPasswordError(
        "New password must be at least 6 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    try {
      setPasswordSaving(true);

      const token = sessionStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/auth/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(passwordData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Password change failed."
        );
      }

      setPasswordMessage("Password changed successfully!");

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setShowPasswords({
        current: false,
        new: false,
        confirm: false,
      });
    } catch (err) {
      setPasswordError(err.message);
    } finally {
      setPasswordSaving(false);
    }
  }

  // Loading Screen
  if (loading) {
    return (
      <div className="profile-container">
        <h2>Loading Profile...</h2>
      </div>
    );
  }

  // Profile Error
  if (!user) {
    return (
      <div className="profile-container">
        <h2>Unable to Load Profile</h2>
        <p>{error}</p>
        <Link to="/login">Login Again</Link>
      </div>
    );
  }

  return (
    <div className="profile-container">

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        <h1>My Profile</h1>
        <p>
          Manage your SanskritSetu account information.
        </p>
      </div>

      {/* Personal Information Card */}
      <div className="profile-card">

        <div className="profile-card-heading">
          <h2>👤 Personal Information</h2>

          <button
            className="edit-profile-btn"
            onClick={() => {
              setEditing(!editing);
              setName(user.name);
              setError("");
              setMessage("");
            }}
          >
            {editing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {editing ? (
          <form onSubmit={handleUpdate}>

            <div className="profile-field">
              <label>Full Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <button
              type="submit"
              className="edit-profile-btn"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

          </form>
        ) : (
          <div className="profile-info">

            <div className="profile-field">
              <label>Full Name</label>
              <p>{user.name}</p>
            </div>

            <div className="profile-field">
              <label>Email Address</label>
              <p>{user.email}</p>
            </div>

            <div className="profile-field">
              <label>User ID</label>
              <p>{user._id}</p>
            </div>

            <div className="profile-field">
              <label>Account Status</label>
              <p className="active-status">● Active</p>
            </div>

            <div className="profile-field">
              <label>Account Created</label>
              <p>
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-IN")
                  : "Not available"}
              </p>
            </div>

          </div>
        )}
      </div>

      {/* Change Password Card */}
      <div className="profile-card password-card">

        <div className="profile-card-heading">
          <h2>🔒 Change Password</h2>

          <button
            className="edit-profile-btn"
            onClick={() => {
              setShowPasswordForm(!showPasswordForm);
              setPasswordMessage("");
              setPasswordError("");
            }}
          >
            {showPasswordForm ? "Cancel" : "Change Password"}
          </button>
        </div>

        {passwordMessage && (
          <p style={{ color: "green" }}>
            {passwordMessage}
          </p>
        )}

        {passwordError && (
          <p style={{ color: "red" }}>
            {passwordError}
          </p>
        )}

        {showPasswordForm && (
          <form onSubmit={handlePasswordChange}>

            {/* Current Password */}
            <div className="profile-field">
              <label>Current Password</label>

              <div className="password-input-wrapper">
                <input
                  type={showPasswords.current ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword: e.target.value,
                    })
                  }
                  placeholder="Enter current password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      current: !showPasswords.current,
                    })
                  }
                >
                  {showPasswords.current ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="profile-field">
              <label>New Password</label>

              <div className="password-input-wrapper">
                <input
                  type={showPasswords.new ? "text" : "password"}
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword: e.target.value,
                    })
                  }
                  placeholder="Enter new password"
                  required
                  minLength={6}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      new: !showPasswords.new,
                    })
                  }
                >
                  {showPasswords.new ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="profile-field">
              <label>Confirm New Password</label>

              <div className="password-input-wrapper">
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirm new password"
                  required
                  minLength={6}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      confirm: !showPasswords.confirm,
                    })
                  }
                >
                  {showPasswords.confirm ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="edit-profile-btn"
              disabled={passwordSaving}
            >
              {passwordSaving
                ? "Updating..."
                : "Update Password"}
            </button>

          </form>
        )}
      </div>

      {/* Back to Dashboard */}
      <div className="profile-footer">
        <Link to="/dashboard">
          ← Back to Dashboard
        </Link>
      </div>

    </div>
  );
}

export default Profile;