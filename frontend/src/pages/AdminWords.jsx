import { useEffect, useState } from "react";
import "./AdminWords.css";

const initialForm = {
  sanskritWord: "",
  transliteration: "",
  englishMeaning: "",
  hindiMeaning: "",
  category: "",
  description: "",
};

function AdminWords() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const token = sessionStorage.getItem("token");

  // Fetch all words
  const fetchWords = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/words");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch words");
      }

      if (data.success) {
        setWords(data.words);
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  // Search words
  const filteredWords = words.filter((word) => {
    const searchText = search.toLowerCase();

    return (
      word.sanskritWord?.toLowerCase().includes(searchText) ||
      word.transliteration?.toLowerCase().includes(searchText) ||
      word.englishMeaning?.toLowerCase().includes(searchText) ||
      word.category?.toLowerCase().includes(searchText)
    );
  });

  // Open Add Form
  const handleAdd = () => {
    setEditingId(null);
    setForm(initialForm);
    setMessage("");
    setShowForm(true);
  };

  // Open Edit Form
  const handleEdit = (word) => {
    setEditingId(word._id);

    setForm({
      sanskritWord: word.sanskritWord || "",
      transliteration: word.transliteration || "",
      englishMeaning: word.englishMeaning || "",
      hindiMeaning: word.hindiMeaning || "",
      category: word.category || "",
      description: word.description || "",
    });

    setMessage("");
    setShowForm(true);
  };

  // Handle Form Input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Save New or Updated Word
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const url = editingId
        ? `http://localhost:5000/api/words/${editingId}`
        : "http://localhost:5000/api/words";

      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to save word");
      }

      setMessage(data.message);
      setShowForm(false);
      setForm(initialForm);
      setEditingId(null);

      await fetchWords();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  };

  // Delete Word
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this word?",
    );

    if (!confirmDelete) return;

    setMessage("");

    try {
      const response = await fetch(`http://localhost:5000/api/words/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to delete word");
      }

      setMessage(data.message);
      await fetchWords();
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="admin-words-page">
      <div className="admin-words-header">
        <div>
          <h1>Manage Words</h1>
          <p>Add, edit and manage Sanskrit glossary words.</p>
        </div>

        <button className="add-word-btn" onClick={handleAdd}>
          + Add New Word
        </button>
      </div>

      {message && <div className="words-message">{message}</div>}

      <div className="words-summary">
        <h3>Total Words: {words.length}</h3>
      </div>

      <div className="words-search">
        <input
          type="text"
          placeholder="Search Sanskrit, English or Category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <div className="word-form-overlay">
          <div className="word-form-card">
            <div className="word-form-header">
              <h2>{editingId ? "Edit Word" : "Add New Word"}</h2>

              <button
                type="button"
                className="close-form-btn"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="word-form-grid">
                <div className="word-form-group">
                  <label>Sanskrit Word *</label>
                  <input
                    name="sanskritWord"
                    value={form.sanskritWord}
                    onChange={handleChange}
                    placeholder="उदाहरण: धर्म"
                    required
                  />
                </div>

                <div className="word-form-group">
                  <label>Transliteration *</label>
                  <input
                    name="transliteration"
                    value={form.transliteration}
                    onChange={handleChange}
                    placeholder="Example: Dharma"
                    required
                  />
                </div>

                <div className="word-form-group">
                  <label>English Meaning *</label>
                  <input
                    name="englishMeaning"
                    value={form.englishMeaning}
                    onChange={handleChange}
                    placeholder="Meaning in English"
                    required
                  />
                </div>

                <div className="word-form-group">
                  <label>Hindi Meaning</label>
                  <input
                    name="hindiMeaning"
                    value={form.hindiMeaning}
                    onChange={handleChange}
                    placeholder="हिंदी अर्थ"
                  />
                </div>

                <div className="word-form-group">
                  <label>Category *</label>
                  <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="Example: Philosophy"
                    required
                  />
                </div>

                <div className="word-form-group full-width">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Write word description..."
                    rows="4"
                  />
                </div>
              </div>

              <div className="word-form-actions">
                <button
                  type="button"
                  className="cancel-word-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-word-btn"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingId
                      ? "Update Word"
                      : "Save Word"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Words Table */}
      <div className="words-table-container">
        {loading ? (
          <p className="words-loading">Loading words...</p>
        ) : (
          <table className="words-table">
            <thead>
              <tr>
                <th>Sanskrit Word</th>
                <th>Transliteration</th>
                <th>English Meaning</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredWords.length > 0 ? (
                filteredWords.map((word) => (
                  <tr key={word._id}>
                    <td>{word.sanskritWord}</td>
                    <td>{word.transliteration}</td>
                    <td>{word.englishMeaning}</td>
                    <td>{word.category}</td>

                    <td>
                      <button
                        className="edit-word-btn"
                        onClick={() => handleEdit(word)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-word-btn"
                        onClick={() => handleDelete(word._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-words">
                    No words found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminWords;
