import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";
import "./AdminSettings.css";

function AdminSettings() {
  const navigate = useNavigate();

  const user = JSON.parse(
    sessionStorage.getItem("user") || "{}"
  );

  const [activeTab, setActiveTab] = useState("general");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [general, setGeneral] = useState({
    websiteName: "SanskritSetu",
    tagline: "Digital Sanskrit-English Glossary",
    language: "English",
    timezone: "Asia/Kolkata",
    description:
      "Explore the wisdom of Sanskrit and Indian Knowledge Systems.",
  });

  const [notifications, setNotifications] = useState({
    newUsers: true,
    newMessages: true,
    newWords: true,
    websiteUpdates: false,
  });

  const [security, setSecurity] = useState({
    sessionTimeout: "30",
    loginAlerts: true,
    twoFactor: false,
  });

  // FETCH SETTINGS FROM MONGODB
  useEffect(() => {
    async function fetchSettings() {
      try {
        setLoading(true);
        setError("");

        const token = sessionStorage.getItem("token");

        const response = await fetch(
          API_URL("/api/settings"),
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to fetch settings."
          );
        }

        if (data.settings) {
          setGeneral((previous) => ({
            ...previous,
            ...data.settings.general,
          }));

          setNotifications((previous) => ({
            ...previous,
            ...data.settings.notifications,
          }));

          setSecurity((previous) => ({
            ...previous,
            ...data.settings.security,
          }));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSettings();
  }, []);

  // GENERAL SETTINGS CHANGE
  function handleGeneralChange(e) {
    setGeneral({
      ...general,
      [e.target.name]: e.target.value,
    });
  }

  // NOTIFICATION SETTINGS CHANGE
  function handleNotificationChange(e) {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  }

  // SECURITY SETTINGS CHANGE
  function handleSecurityChange(e) {
    const { name, value, type, checked } = e.target;

    setSecurity({
      ...security,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // SAVE SETTINGS TO MONGODB
  async function handleSave() {
    try {
      setSaving(true);
      setMessage("");
      setError("");

      const token = sessionStorage.getItem("token");

      const response = await fetch(
        API_URL("/api/settings"),
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            general,
            notifications,
            security,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to save settings."
        );
      }

      setMessage(
        data.message || "Settings saved successfully!"
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  // SETTINGS TABS
  const tabs = [
    { id: "general", icon: "⚙️", label: "General Settings" },
    { id: "account", icon: "👤", label: "Account Settings" },
    { id: "notifications", icon: "🔔", label: "Notifications" },
    { id: "security", icon: "🛡️", label: "Security" },
  ];

  return (
    <div className="admin-settings-page">

      {/* HEADER */}
      <header className="settings-header">

        <div>
          <span className="settings-breadcrumb">
            ADMIN PANEL / SETTINGS
          </span>

          <h1>Settings</h1>

          <p>
            Manage your website preferences and administrator settings.
          </p>
        </div>

        <button
          className="settings-back-button"
          onClick={() => navigate("/admin/dashboard")}
        >
          ← Back to Dashboard
        </button>

      </header>

      {/* SETTINGS CONTENT */}
      <div className="settings-layout">

        {/* SETTINGS SIDEBAR */}
        <aside className="settings-sidebar">

          <div className="settings-sidebar-heading">
            SETTINGS MENU
          </div>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`settings-tab ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && <b>›</b>}
            </button>
          ))}

          <div className="settings-sidebar-note">
            <span>💡</span>
            <p>
              Keep your website preferences updated for a better
              administration experience.
            </p>
          </div>

        </aside>

        {/* MAIN CONTENT */}
        <main className="settings-content">

          {loading ? (
            <div className="settings-card">
              <p>Loading settings from database...</p>
            </div>
          ) : (
            <>

              {message && (
                <div className="settings-success-message">
                  ✓ {message}
                </div>
              )}

              {error && (
                <div className="settings-error-message">
                  ⚠ {error}
                </div>
              )}

              {/* GENERAL SETTINGS */}
              {activeTab === "general" && (
                <section className="settings-card">

                  <div className="settings-card-heading">
                    <div className="settings-heading-icon">⚙️</div>

                    <div>
                      <h2>General Settings</h2>
                      <p>
                        Manage your website's basic information and preferences.
                      </p>
                    </div>
                  </div>

                  <div className="settings-form">

                    <div className="settings-field">
                      <label>Website Name</label>

                      <input
                        type="text"
                        name="websiteName"
                        value={general.websiteName}
                        onChange={handleGeneralChange}
                      />
                    </div>

                    <div className="settings-field">
                      <label>Website Tagline</label>

                      <input
                        type="text"
                        name="tagline"
                        value={general.tagline}
                        onChange={handleGeneralChange}
                      />
                    </div>

                    <div className="settings-field full-width">
                      <label>Website Description</label>

                      <textarea
                        name="description"
                        rows="4"
                        value={general.description}
                        onChange={handleGeneralChange}
                      />
                    </div>

                    <div className="settings-field">
                      <label>Default Language</label>

                      <select
                        name="language"
                        value={general.language}
                        onChange={handleGeneralChange}
                      >
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Sanskrit</option>
                      </select>
                    </div>

                    <div className="settings-field">
                      <label>Timezone</label>

                      <select
                        name="timezone"
                        value={general.timezone}
                        onChange={handleGeneralChange}
                      >
                        <option value="Asia/Kolkata">
                          India (IST)
                        </option>

                        <option value="UTC">
                          UTC
                        </option>
                      </select>
                    </div>

                  </div>

                </section>
              )}

              {/* ACCOUNT SETTINGS */}
              {activeTab === "account" && (
                <section className="settings-card">

                  <div className="settings-card-heading">
                    <div className="settings-heading-icon">👤</div>

                    <div>
                      <h2>Account Settings</h2>
                      <p>
                        View your administrator account information.
                      </p>
                    </div>
                  </div>

                  <div className="settings-account-profile">

                    <div className="settings-account-avatar">
                      {(user.name || "A").charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h3>{user.name || "Administrator"}</h3>
                      <span>Super Administrator</span>
                    </div>

                    <button
                      onClick={() => navigate("/admin/profile")}
                    >
                      Edit Profile →
                    </button>

                  </div>

                  <div className="settings-form">

                    <div className="settings-field">
                      <label>Administrator Name</label>

                      <input
                        type="text"
                        value={user.name || ""}
                        readOnly
                      />
                    </div>

                    <div className="settings-field">
                      <label>Email Address</label>

                      <input
                        type="email"
                        value={user.email || ""}
                        readOnly
                      />
                    </div>

                    <div className="settings-field">
                      <label>Account Role</label>

                      <input
                        type="text"
                        value="Administrator"
                        readOnly
                      />
                    </div>

                    <div className="settings-field">
                      <label>Account Status</label>

                      <input
                        type="text"
                        value="Active"
                        readOnly
                      />
                    </div>

                  </div>

                  <div className="settings-info-note">
                    To update your name or email, visit the Admin Profile page.
                  </div>

                </section>
              )}

              {/* NOTIFICATION SETTINGS */}
              {activeTab === "notifications" && (
                <section className="settings-card">

                  <div className="settings-card-heading">
                    <div className="settings-heading-icon">🔔</div>

                    <div>
                      <h2>Notification Settings</h2>
                      <p>
                        Choose which website activities you want to track.
                      </p>
                    </div>
                  </div>

                  <div className="settings-options">

                    <label className="settings-option">
                      <div>
                        <h4>New User Registration</h4>
                        <p>Get notified when a new user registers.</p>
                      </div>

                      <input
                        type="checkbox"
                        name="newUsers"
                        checked={notifications.newUsers}
                        onChange={handleNotificationChange}
                      />

                      <span className="settings-toggle"></span>
                    </label>

                    <label className="settings-option">
                      <div>
                        <h4>New Messages</h4>
                        <p>Get notified when someone sends a message.</p>
                      </div>

                      <input
                        type="checkbox"
                        name="newMessages"
                        checked={notifications.newMessages}
                        onChange={handleNotificationChange}
                      />

                      <span className="settings-toggle"></span>
                    </label>

                    <label className="settings-option">
                      <div>
                        <h4>New Glossary Words</h4>
                        <p>Track newly added Sanskrit terminology.</p>
                      </div>

                      <input
                        type="checkbox"
                        name="newWords"
                        checked={notifications.newWords}
                        onChange={handleNotificationChange}
                      />

                      <span className="settings-toggle"></span>
                    </label>

                    <label className="settings-option">
                      <div>
                        <h4>Website Updates</h4>
                        <p>Receive notifications about website updates.</p>
                      </div>

                      <input
                        type="checkbox"
                        name="websiteUpdates"
                        checked={notifications.websiteUpdates}
                        onChange={handleNotificationChange}
                      />

                      <span className="settings-toggle"></span>
                    </label>

                  </div>

                </section>
              )}

              {/* SECURITY SETTINGS */}
              {activeTab === "security" && (
                <section className="settings-card">

                  <div className="settings-card-heading">
                    <div className="settings-heading-icon">🛡️</div>

                    <div>
                      <h2>Security Settings</h2>
                      <p>
                        Manage your administrator session preferences.
                      </p>
                    </div>
                  </div>

                  <div className="settings-form">

                    <div className="settings-field">
                      <label>Session Timeout</label>

                      <select
                        name="sessionTimeout"
                        value={security.sessionTimeout}
                        onChange={handleSecurityChange}
                      >
                        <option value="15">15 Minutes</option>
                        <option value="30">30 Minutes</option>
                        <option value="60">1 Hour</option>
                        <option value="120">2 Hours</option>
                      </select>
                    </div>

                  </div>

                  <div className="settings-options">

                    <label className="settings-option">
                      <div>
                        <h4>Login Alerts</h4>
                        <p>Enable alerts for administrator login activity.</p>
                      </div>

                      <input
                        type="checkbox"
                        name="loginAlerts"
                        checked={security.loginAlerts}
                        onChange={handleSecurityChange}
                      />

                      <span className="settings-toggle"></span>
                    </label>

                    <label className="settings-option">
                      <div>
                        <h4>Two-Factor Authentication</h4>
                        <p>
                          Enable an additional verification step for login.
                        </p>
                      </div>

                      <input
                        type="checkbox"
                        name="twoFactor"
                        checked={security.twoFactor}
                        onChange={handleSecurityChange}
                      />

                      <span className="settings-toggle"></span>
                    </label>

                  </div>

                  <div className="settings-info-note">
                    These are currently preference controls only.
                    Two-factor authentication and session enforcement
                    require backend implementation.
                  </div>

                </section>
              )}

              {/* SAVE BUTTON */}
              <div className="settings-save-area">

                <p>
                  Make sure to save your changes.
                </p>

                <button
                  className="settings-save-button"
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Changes →"}
                </button>

              </div>

            </>
          )}

        </main>

      </div>

      <footer className="settings-footer">
        © 2026 SanskritSetu. All rights reserved.
        <span>॥ विद्या ददाति विनयं ॥</span>
      </footer>

    </div>
  );
}

export default AdminSettings;