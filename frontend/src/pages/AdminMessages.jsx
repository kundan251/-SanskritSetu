import { useEffect, useState } from "react";
import "./AdminMessages.css";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [statistics, setStatistics] = useState({
    totalMessages: 0,
    newMessages: 0,
    readMessages: 0,
    repliedMessages: 0,
  });

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messageText, setMessageText] = useState("");

  const token = sessionStorage.getItem("token");

  // Fetch All Messages
  const fetchMessages = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/messages",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch messages");
      }

      if (data.success) {
        setMessages(data.messages);
        setStatistics(data.statistics);
      }
    } catch (error) {
      setMessageText(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Search Messages
  const filteredMessages = messages.filter((message) =>
    message.name?.toLowerCase().includes(search.toLowerCase()) ||
    message.email?.toLowerCase().includes(search.toLowerCase()) ||
    message.subject?.toLowerCase().includes(search.toLowerCase())
  );

  // Update Status
  const handleStatusChange = async (id, status) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/messages/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to update status");
      }

      setMessageText(data.message);
      await fetchMessages();
    } catch (error) {
      setMessageText(error.message);
    }
  };

  // Delete Message
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/messages/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to delete message");
      }

      setMessageText(data.message);
      setSelectedMessage(null);
      await fetchMessages();
    } catch (error) {
      setMessageText(error.message);
    }
  };

  // Open Message Details
  const handleView = async (message) => {
    setSelectedMessage(message);

    if (message.status === "New") {
      await handleStatusChange(message._id, "Read");
      setSelectedMessage({ ...message, status: "Read" });
    }
  };

  return (
    <div className="admin-messages-page">

      {/* Header */}
      <div className="admin-messages-header">
        <div>
          <h1>Manage Messages</h1>
          <p>View and manage contact enquiries.</p>
        </div>

        <button
          className="refresh-messages-btn"
          onClick={fetchMessages}
        >
          ↻ Refresh
        </button>
      </div>

      {messageText && (
        <div className="messages-notice">
          {messageText}
          <button onClick={() => setMessageText("")}>×</button>
        </div>
      )}

      {/* Statistics */}
      <div className="message-stats-grid">

        <div className="message-stat-card">
          <span>📩</span>
          <p>Total Messages</p>
          <h2>{statistics.totalMessages}</h2>
        </div>

        <div className="message-stat-card">
          <span>🆕</span>
          <p>New Messages</p>
          <h2>{statistics.newMessages}</h2>
        </div>

        <div className="message-stat-card">
          <span>📖</span>
          <p>Read Messages</p>
          <h2>{statistics.readMessages}</h2>
        </div>

        <div className="message-stat-card">
          <span>✅</span>
          <p>Replied Messages</p>
          <h2>{statistics.repliedMessages}</h2>
        </div>

      </div>

      {/* Search */}
      <div className="messages-search">
        <input
          type="text"
          placeholder="Search by name, email or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Messages Table */}
      <div className="messages-table-container">

        {loading ? (
          <p className="messages-loading">Loading messages...</p>
        ) : (
          <table className="messages-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredMessages.length > 0 ? (
                filteredMessages.map((message) => (
                  <tr key={message._id}>
                    <td>{message.name}</td>
                    <td>{message.email}</td>
                    <td>{message.subject}</td>

                    <td>
                      {new Date(message.createdAt).toLocaleDateString()}
                    </td>

                    <td>
                      <span
                        className={`message-status ${message.status.toLowerCase()}`}
                      >
                        {message.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="view-message-btn"
                        onClick={() => handleView(message)}
                      >
                        View
                      </button>

                      <button
                        className="delete-message-btn"
                        onClick={() => handleDelete(message._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-messages">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        )}
      </div>

      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="message-modal-overlay">
          <div className="message-modal-card">

            <div className="message-modal-header">
              <h2>Message Details</h2>

              <button
                onClick={() => setSelectedMessage(null)}
                className="close-message-modal"
              >
                ×
              </button>
            </div>

            <div className="message-detail-item">
              <span>Sender Name</span>
              <strong>{selectedMessage.name}</strong>
            </div>

            <div className="message-detail-item">
              <span>Email Address</span>
              <strong>{selectedMessage.email}</strong>
            </div>

            <div className="message-detail-item">
              <span>Subject</span>
              <strong>{selectedMessage.subject}</strong>
            </div>

            <div className="message-detail-item">
              <span>Message</span>
              <p>{selectedMessage.message}</p>
            </div>

            <div className="message-detail-item">
              <span>Status</span>
              <strong>{selectedMessage.status}</strong>
            </div>

            <div className="message-modal-actions">

              <button
                onClick={() =>
                  handleStatusChange(selectedMessage._id, "Read")
                }
              >
                Mark as Read
              </button>

              <button
                onClick={() =>
                  handleStatusChange(selectedMessage._id, "Replied")
                }
              >
                Mark as Replied
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default AdminMessages;