import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationsLoading, setNotificationsLoading] = useState(false);
  const [notificationError, setNotificationError] = useState("");

  const [statistics, setStatistics] = useState({
    totalUsers: 0,
    totalWords: 0,
    totalCategories: 0,
    totalMessages: 0,
  });

  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState("");

  const [analytics, setAnalytics] = useState([]);
  const [analyticsLoading, setAnalyticsLoading] = useState(true);
  const [analyticsError, setAnalyticsError] = useState("");
  const [selectedMetric, setSelectedMetric] = useState("users");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [activities, setActivities] = useState([]);
  const [activityLoading, setActivityLoading] = useState(true);
  const [activityRefreshing, setActivityRefreshing] = useState(false);
  const [activityError, setActivityError] = useState("");

  const metricOptions = [
    { value: "users", label: "New Users" },
    { value: "words", label: "Words Added" },
    { value: "categories", label: "Categories Added" },
    { value: "messages", label: "Messages Received" },
  ];

  const selectedOption = metricOptions.find(
    (option) => option.value === selectedMetric
  );

  // ===============================
  // NOTIFICATIONS
  // ===============================

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = async (loader = false) => {
      try {
        if (loader && mounted) setNotificationsLoading(true);

        const response = await fetch(
          "http://localhost:5000/api/notifications",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch notifications.");
        }

        if (mounted) {
          setNotifications(data.notifications || []);
          setUnreadCount(Number(data.unreadCount || 0));
          setNotificationError("");
        }
      } catch (error) {
        if (mounted) setNotificationError(error.message);
      } finally {
        if (mounted && loader) setNotificationsLoading(false);
      }
    };

    fetchNotifications(true);

    const timer = setInterval(() => fetchNotifications(false), 30000);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, []);

  async function markNotificationAsRead(id) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/notifications/${id}/read`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to mark as read.");
      }

      setNotifications((items) =>
        items.map((item) =>
          item._id === id ? { ...item, isRead: true } : item
        )
      );

      setUnreadCount((count) => Math.max(0, count - 1));

      return true;
    } catch (error) {
      setNotificationError(error.message);
      return false;
    }
  }

  async function markAllNotificationsAsRead() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/notifications/read-all",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to update notifications.");
      }

      setNotifications((items) =>
        items.map((item) => ({ ...item, isRead: true }))
      );

      setUnreadCount(0);
      setNotificationError("");
    } catch (error) {
      setNotificationError(error.message);
    }
  }

  async function deleteNotification(id) {
    try {
      const notification = notifications.find((item) => item._id === id);

      const response = await fetch(
        `http://localhost:5000/api/notifications/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete notification.");
      }

      setNotifications((items) => items.filter((item) => item._id !== id));

      if (notification && !notification.isRead) {
        setUnreadCount((count) => Math.max(0, count - 1));
      }
    } catch (error) {
      setNotificationError(error.message);
    }
  }

  async function openNotification(notification) {
    if (!notification.isRead) {
      const success = await markNotificationAsRead(notification._id);

      if (!success) return;
    }

    setNotificationsOpen(false);

    if (notification.link) navigate(notification.link);
  }

  // ===============================
  // DASHBOARD STATISTICS
  // ===============================

  useEffect(() => {
    async function fetchStatistics() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/admin/dashboard/stats",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch statistics.");
        }

        setStatistics(data.statistics);
      } catch (error) {
        setStatsError(error.message);
      } finally {
        setStatsLoading(false);
      }
    }

    fetchStatistics();
  }, []);

  // ===============================
  // ANALYTICS
  // ===============================

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/admin/dashboard/analytics",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch analytics.");
        }

        setAnalytics(data.analytics || []);
      } catch (error) {
        setAnalyticsError(error.message);
      } finally {
        setAnalyticsLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  // ===============================
  // RECENT ACTIVITIES
  // ===============================

  const fetchActivities = useCallback(async (refresh = false) => {
    try {
      if (refresh) {
        setActivityRefreshing(true);
      } else {
        setActivityLoading(true);
      }

      setActivityError("");

      const response = await fetch(
        "http://localhost:5000/api/activities",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch activities.");
      }

      setActivities(data.activities || []);
    } catch (error) {
      setActivityError(error.message);
    } finally {
      setActivityLoading(false);
      setActivityRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  // ===============================
  // HELPERS
  // ===============================

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/admin/login");
  }

  function goTo(path) {
    setMobileMenuOpen(false);
    navigate(path);
  }

  function getActivityIcon(action = "") {
    const value = action.toLowerCase();

    if (value.includes("user")) return "👤";
    if (value.includes("category")) return "🗂️";
    if (value.includes("message")) return "✉️";

    return "📖";
  }

  function formatActivityTime(date) {
    if (!date) return "—";

    const value = new Date(date);

    if (Number.isNaN(value.getTime())) return "—";

    return value.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const stats = [
    {
      title: "Total Users",
      value: statistics.totalUsers,
      icon: "👥",
      change: "Registered users",
      color: "stat-purple",
    },
    {
      title: "Total Words",
      value: statistics.totalWords,
      icon: "📚",
      change: "Glossary entries",
      color: "stat-orange",
    },
    {
      title: "Categories",
      value: statistics.totalCategories,
      icon: "🗂️",
      change: "Knowledge categories",
      color: "stat-blue",
    },
    {
      title: "Messages",
      value: statistics.totalMessages,
      icon: "✉️",
      change: "Contact enquiries",
      color: "stat-green",
    },
  ];

  // ===============================
  // SIDEBAR CONTENT
  // ===============================

  function SidebarContent() {
    return (
      <>
        <div className="admin-brand">
          <div className="brand-icon">ॐ</div>
          <div>
            <h2>SanskritSetu</h2>
            <span>ADMIN PANEL</span>
          </div>
        </div>

        <div className="sidebar-section-title">MAIN MENU</div>

        <nav className="admin-navigation">
          <button
            className="nav-item active"
            onClick={() => goTo("/admin/dashboard")}
          >
            <span>▦</span> Dashboard
          </button>

          <button className="nav-item" onClick={() => goTo("/admin/words")}>
            <span>📚</span> Manage Words
          </button>

          <button
            className="nav-item"
            onClick={() => goTo("/admin/categories")}
          >
            <span>🗂️</span> Categories
          </button>

          <button className="nav-item" onClick={() => goTo("/admin/users")}>
            <span>👥</span> Manage Users
          </button>

          <button
            className="nav-item"
            onClick={() => goTo("/admin/messages")}
          >
            <span>✉️</span> Messages
          </button>
        </nav>

        <div className="sidebar-section-title settings-title">
          PREFERENCES
        </div>

        <nav className="admin-navigation">
          <button
            className="nav-item"
            onClick={() => goTo("/admin/profile")}
          >
            <span>👤</span> My Profile
          </button>

          <button
            className="nav-item"
            onClick={() => goTo("/admin/settings")}
          >
            <span>⚙️</span> Settings
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-admin-profile">
            <div className="sidebar-avatar">
              {(user.name || "A").charAt(0).toUpperCase()}
            </div>

            <div className="sidebar-admin-info">
              <h4>{user.name || "Administrator"}</h4>
              <span>Super Admin</span>
            </div>
          </div>

          <button className="sidebar-logout" onClick={handleLogout}>
            ↪ Logout
          </button>
        </div>
      </>
    );
  }

  // ===============================
  // MAIN JSX
  // ===============================

  return (
    <div className="admin-dashboard">

      {/* DESKTOP SIDEBAR */}

      <aside className="admin-sidebar desktop-sidebar">
        <SidebarContent />
      </aside>

      {/* MOBILE SIDEBAR OVERLAY */}

      {mobileMenuOpen && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE SLIDE SIDEBAR */}

      <aside
        className={`admin-sidebar mobile-sidebar ${
          mobileMenuOpen ? "mobile-sidebar-open" : ""
        }`}
      >
        <button
          className="mobile-sidebar-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <SidebarContent />
      </aside>

      {/* MAIN AREA */}

      <main className="admin-main">

        {/* MOBILE HEADER */}

        <div className="mobile-header">
          <button
            className="hamburger-button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className="mobile-brand">
            <span>ॐ</span>
            SanskritSetu
          </div>

          <span className="mobile-admin-label">ADMIN</span>
        </div>

        {/* TOPBAR */}

        <header className="admin-topbar">
          <div className="topbar-search">
            <span>⌕</span>
            <input type="search" placeholder="Search anything..." />
          </div>

          <div className="topbar-right">

            {/* NOTIFICATION */}

            <div className="notification-wrapper">
              <button
                type="button"
                className="notification-button"
                aria-label="Notifications"
                aria-expanded={notificationsOpen}
                onClick={() => setNotificationsOpen((value) => !value)}
              >
                🔔

                {unreadCount > 0 && (
                  <span className="notification-badge">
                    {unreadCount > 99 ? "99+" : unreadCount}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <>
                  <button
                    className="notification-backdrop"
                    aria-label="Close notifications"
                    onClick={() => setNotificationsOpen(false)}
                  />

                  <div className="notification-dropdown">
                    <div className="notification-heading">
                      <div>
                        <h3>Notifications</h3>
                        <small>{unreadCount} unread</small>
                      </div>

                      <button
                        onClick={markAllNotificationsAsRead}
                        disabled={unreadCount === 0}
                      >
                        Mark all as read
                      </button>
                    </div>

                    {notificationError && (
                      <p className="notification-error">
                        {notificationError}
                      </p>
                    )}

                    {notificationsLoading ? (
                      <p className="notification-empty">Loading...</p>
                    ) : notifications.length === 0 ? (
                      <p className="notification-empty">
                        🔕 No notifications yet.
                      </p>
                    ) : (
                      notifications.map((item) => (
                        <div
                          className={`notification-item ${
                            item.isRead ? "read" : "unread"
                          }`}
                          key={item._id}
                        >
                          <button
                            className="notification-content"
                            onClick={() => openNotification(item)}
                          >
                            <strong>{item.title}</strong>
                            <p>{item.message}</p>

                            <small>
                              {item.createdAt
                                ? new Date(item.createdAt).toLocaleString(
                                    "en-IN",
                                    {
                                      day: "numeric",
                                      month: "short",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }
                                  )
                                : ""}
                            </small>
                          </button>

                          <button
                            className="notification-delete"
                            onClick={() => deleteNotification(item._id)}
                            aria-label="Delete notification"
                          >
                            ×
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="topbar-profile">
              <div className="topbar-avatar">
                {(user.name || "A").charAt(0).toUpperCase()}
              </div>

              <div>
                <h4>{user.name || "Administrator"}</h4>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE HEADING */}

        <section className="admin-page-heading">
          <div>
            <h1>Dashboard Overview</h1>
            <p>
              Welcome back! Here's what's happening with your website today.
            </p>
          </div>

          <div className="dashboard-date">
            📅{" "}
            {new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </section>

        {/* WELCOME BANNER */}

        <section className="admin-welcome-banner">
          <div className="welcome-content">
            <span>ADMINISTRATOR DASHBOARD</span>

            <h2>
              Welcome back, {user.name?.split(" ")[0] || "Admin"}!
            </h2>

            <p>
              Manage your Sanskrit knowledge platform, organize glossary
              entries and monitor website activity from one place.
            </p>

            <button onClick={() => navigate("/admin/words")}>
              Manage Glossary →
            </button>
          </div>

          <div className="welcome-decoration">ॐ</div>
        </section>

        {/* STATISTICS */}

        <section className="admin-stats-section">
          <div className="section-heading">
            <div>
              <h2>Website Statistics</h2>
              <p>Overview of your platform</p>
            </div>
          </div>

          {statsLoading && <p>Loading dashboard statistics...</p>}

          {statsError && (
            <p className="dashboard-error">{statsError}</p>
          )}

          <div className="admin-stats-grid">
            {stats.map((item) => (
              <div className="admin-stat-card" key={item.title}>
                <div className="stat-card-top">
                  <div className={`stat-icon ${item.color}`}>
                    {item.icon}
                  </div>

                  <span className="stat-menu">•••</span>
                </div>

                <p>{item.title}</p>

                <div className="stat-card-bottom">
                  <h2>{statsLoading ? "..." : item.value}</h2>
                  <span>{item.change}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ANALYTICS AND QUICK ACTIONS */}

        <section className="admin-middle-grid">

          <div className="admin-panel analytics-panel">
            <div className="panel-heading">
              <div>
                <h2>Website Analytics</h2>
                <p>Live platform activity - Last 7 Days</p>
              </div>

              <div className="custom-dropdown">
                <button
                  className={`dropdown-button ${
                    dropdownOpen ? "active" : ""
                  }`}
                  onClick={() => setDropdownOpen((value) => !value)}
                >
                  {selectedOption?.label || "New Users"}
                  <span>{dropdownOpen ? "⌃" : "⌄"}</span>
                </button>

                {dropdownOpen && (
                  <>
                    <button
                      className="dropdown-backdrop"
                      aria-label="Close dropdown"
                      onClick={() => setDropdownOpen(false)}
                    />

                    <div className="dropdown-menu">
                      {metricOptions.map((option) => (
                        <button
                          key={option.value}
                          className={`dropdown-option ${
                            selectedMetric === option.value ? "selected" : ""
                          }`}
                          onClick={() => {
                            setSelectedMetric(option.value);
                            setDropdownOpen(false);
                          }}
                        >
                          {option.label}

                          {selectedMetric === option.value && " ✓"}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="chart-placeholder">
              {analyticsLoading ? (
                <p>Loading Analytics...</p>
              ) : analyticsError ? (
                <p className="dashboard-error">{analyticsError}</p>
              ) : analytics.length === 0 ? (
                <p>No analytics data available.</p>
              ) : (
                <>
                  <div className="chart-y-axis">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0</span>
                  </div>

                  <div className="chart-area">
                    {analytics.map((item, index) => {
                      const value = Number(item[selectedMetric] || 0);

                      const maxValue = Math.max(
                        1,
                        ...analytics.map((day) =>
                          Number(day[selectedMetric] || 0)
                        )
                      );

                      const height = (value / maxValue) * 100;

                      return (
                        <div
                          className="chart-column"
                          key={item.date || index}
                        >
                          <div
                            className="chart-bar"
                            style={{
                              height: `${height}%`,
                              minHeight: value > 0 ? "5px" : "0px",
                            }}
                            title={`${value} ${selectedMetric}`}
                          />

                          <span>
                            {new Date(
                              `${item.date}T00:00:00`
                            ).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                            })}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <p className="chart-note">
              * Live data from MongoDB for the last 7 days.
            </p>
          </div>

          {/* QUICK ACTIONS */}

          <div className="admin-panel quick-actions-panel">
            <div className="panel-heading">
              <div>
                <h2>Quick Actions</h2>
                <p>Frequently used tools</p>
              </div>
            </div>

            <button
              className="quick-action"
              onClick={() => navigate("/admin/words")}
            >
              <span className="quick-icon purple-icon">＋</span>

              <div>
                <h4>Add New Word</h4>
                <p>Add Sanskrit terminology</p>
              </div>

              <b>→</b>
            </button>

            <button
              className="quick-action"
              onClick={() => navigate("/admin/categories")}
            >
              <span className="quick-icon orange-icon">▤</span>

              <div>
                <h4>Add Category</h4>
                <p>Organize glossary content</p>
              </div>

              <b>→</b>
            </button>

            <button
              className="quick-action"
              onClick={() => navigate("/admin/messages")}
            >
              <span className="quick-icon green-icon">✉</span>

              <div>
                <h4>View Messages</h4>
                <p>Check user enquiries</p>
              </div>

              <b>→</b>
            </button>
          </div>
        </section>

        {/* RECENT ACTIVITY */}

        <section className="admin-panel activity-panel">
          <div className="panel-heading">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest platform activities</p>
            </div>

            <button
              className="view-all-button"
              onClick={() => fetchActivities(true)}
              disabled={activityLoading || activityRefreshing}
            >
              {activityRefreshing ? "Refreshing..." : "Refresh →"}
            </button>
          </div>

          <div className="activity-table-wrapper">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>ACTIVITY</th>
                  <th>DESCRIPTION</th>
                  <th>TIME</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>
                {activityLoading ? (
                  <tr>
                    <td colSpan="4">Loading activities...</td>
                  </tr>
                ) : activityError ? (
                  <tr>
                    <td colSpan="4">{activityError}</td>
                  </tr>
                ) : activities.length === 0 ? (
                  <tr>
                    <td colSpan="4">No activities found yet.</td>
                  </tr>
                ) : (
                  activities.map((activity) => (
                    <tr key={activity._id}>
                      <td>
                        <div className="activity-title">
                          <span>{getActivityIcon(activity.action)}</span>
                          {activity.action || "Activity"}
                        </div>
                      </td>

                      <td>
                        {activity.description}

                        {activity.performedBy?.name && (
                          <small>
                            {" "}— by {activity.performedBy.name}
                          </small>
                        )}
                      </td>

                      <td>{formatActivityTime(activity.createdAt)}</td>

                      <td>
                        <span className="activity-status">Completed</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="admin-footer">
          <span>© 2026 SanskritSetu. All rights reserved.</span>
          <span>॥ विद्या ददाति विनयं ॥</span>
        </footer>

      </main>
    </div>
  );
}

export default AdminDashboard;