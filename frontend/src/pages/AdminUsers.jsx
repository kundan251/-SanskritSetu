import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../config/api";
import "./AdminUsers.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);

  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch All Users
  const fetchUsers = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setMessage("");

      const token = sessionStorage.getItem("token");

      const response = await fetch(
        API_URL("/api/users"),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch users");
      }

      if (data.success) {
        setUsers(data.users || []);
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Search Users
  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase())
  );

  // Delete User
  const handleDelete = async (user) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${user.name}" (${user.email})?`
    );

    if (!confirmDelete) return;

    try {
      setDeletingUserId(user._id);
      setMessage("");

      const token = sessionStorage.getItem("token");

      const response = await fetch(
        API_URL(`/api/users/${user._id}`),
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to delete user");
      }

      setMessage(data.message);
      setSelectedUser(null);

      await fetchUsers(true);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setDeletingUserId(null);
    }
  };

  return (
    <div className="admin-users-page">

      {/* Header */}
      <div className="admin-users-header">
        <div>
          <h1>Manage Users</h1>
          <p>View and manage all registered users.</p>
        </div>

        <button
          className="refresh-users-btn"
          onClick={() => fetchUsers(true)}
          disabled={loading || refreshing}
        >
          {refreshing ? "Refreshing..." : "Refresh Users"}
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className="users-message">
          {message}
        </div>
      )}

      {/* Summary */}
      <div className="users-summary">
        <div>
          <h3>Total Registered Users</h3>
          <h1>{users.length}</h1>
        </div>

        <div className="users-summary-icon">
          👥
        </div>
      </div>

      {/* Search */}
      <div className="users-search">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="users-table-container">

        {loading ? (
          <p className="users-loading">Loading users...</p>
        ) : (
          <table className="users-table">

            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>User Name</th>
                <th>Email Address</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={user._id}>

                    <td>{index + 1}</td>

                    <td>{user.name}</td>

                    <td>{user.email}</td>

                    <td>
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>

                    <td>
                      <button
                        className="view-user-btn"
                        onClick={() => setSelectedUser(user)}
                        disabled={deletingUserId !== null}
                      >
                        View
                      </button>

                      <button
                        className="delete-user-btn"
                        onClick={() => handleDelete(user)}
                        disabled={deletingUserId !== null}
                      >
                        {deletingUserId === user._id
                          ? "Deleting..."
                          : "Delete"}
                      </button>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-users">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        )}
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="user-modal-overlay">

          <div className="user-modal-card">

            <div className="user-modal-header">
              <h2>User Details</h2>

              <button
                className="close-user-modal"
                onClick={() => setSelectedUser(null)}
              >
                ×
              </button>
            </div>

            <div className="user-avatar">
              {selectedUser.name?.charAt(0).toUpperCase()}
            </div>

            <div className="user-detail-item">
              <span>Full Name</span>
              <strong>{selectedUser.name}</strong>
            </div>

            <div className="user-detail-item">
              <span>Email Address</span>
              <strong>{selectedUser.email}</strong>
            </div>

            <div className="user-detail-item">
              <span>Registration Date</span>

              <strong>
                {selectedUser.createdAt
                  ? new Date(selectedUser.createdAt).toLocaleDateString()
                  : "N/A"}
              </strong>
            </div>

            <button
              className="close-details-btn"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default AdminUsers;