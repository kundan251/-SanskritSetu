import { useEffect, useState } from "react";
import "./AdminCategories.css";

function AdminCategories() {
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");

const [showForm, setShowForm] = useState(false);
const [editingId, setEditingId] = useState(null);
const [form, setForm] = useState({
name: "",
description: "",
});

const [saving, setSaving] = useState(false);
const [message, setMessage] = useState("");

const token = sessionStorage.getItem("token");

// Fetch Categories
const fetchCategories = async () => {
try {
setLoading(true);


  const response = await fetch(
    "http://localhost:5000/api/categories"
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch categories");
  }

  if (data.success) {
    setCategories(data.categories);
  }
} catch (error) {
  setMessage(error.message);
} finally {
  setLoading(false);
}


};

useEffect(() => {
fetchCategories();
}, []);

// Search Categories
const filteredCategories = categories.filter((category) =>
category.name.toLowerCase().includes(search.toLowerCase())
);

// Add Category
const handleAdd = () => {
setEditingId(null);
setForm({ name: "", description: "" });
setMessage("");
setShowForm(true);
};

// Edit Category
const handleEdit = (category) => {
setEditingId(category._id);


setForm({
  name: category.name,
  description: category.description || "",
});

setMessage("");
setShowForm(true);


};

// Input Change
const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value,
});
};

// Save Category
const handleSubmit = async (e) => {
e.preventDefault();
setSaving(true);
setMessage("");


try {
  const url = editingId
    ? `http://localhost:5000/api/categories/${editingId}`
    : "http://localhost:5000/api/categories";

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
    throw new Error(data.message || "Unable to save category");
  }

  setMessage(data.message);
  setShowForm(false);
  setForm({ name: "", description: "" });
  setEditingId(null);

  await fetchCategories();
} catch (error) {
  setMessage(error.message);
} finally {
  setSaving(false);
}


};

// Delete Category
const handleDelete = async (id) => {
const confirmDelete = window.confirm(
"Are you sure you want to delete this category?"
);


if (!confirmDelete) return;

setMessage("");

try {
  const response = await fetch(
    `http://localhost:5000/api/categories/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Unable to delete category");
  }

  setMessage(data.message);
  await fetchCategories();
} catch (error) {
  setMessage(error.message);
}


};

return ( <div className="admin-categories-page">


  <div className="admin-categories-header">
    <div>
      <h1>Manage Categories</h1>
      <p>Add and organize Sanskrit glossary categories.</p>
    </div>

    <button className="add-category-btn" onClick={handleAdd}>
      + Add Category
    </button>
  </div>

  {message && (
    <div className="category-message">
      {message}
    </div>
  )}

  <div className="category-summary">
    <h3>Total Categories: {categories.length}</h3>
  </div>

  <div className="category-search">
    <input
      type="text"
      placeholder="Search categories..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {/* Add / Edit Form */}
  {showForm && (
    <div className="category-form-overlay">
      <div className="category-form-card">

        <div className="category-form-header">
          <h2>{editingId ? "Edit Category" : "Add Category"}</h2>

          <button
            type="button"
            className="close-category-form"
            onClick={() => setShowForm(false)}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="category-form-group">
            <label>Category Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Example: Philosophy"
              required
            />
          </div>

          <div className="category-form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write category description..."
              rows="4"
            />
          </div>

          <div className="category-form-actions">
            <button
              type="button"
              className="cancel-category-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-category-btn"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update Category"
                : "Save Category"}
            </button>
          </div>

        </form>
      </div>
    </div>
  )}

  {/* Categories Table */}
  <div className="category-table-container">

    {loading ? (
      <p className="category-loading">Loading categories...</p>
    ) : (
      <table className="category-table">

        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Total Words</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>{category.description || "—"}</td>
                <td>{category.wordCount}</td>

                <td>
                  <button
                    className="edit-category-btn"
                    onClick={() => handleEdit(category)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-category-btn"
                    onClick={() => handleDelete(category._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-categories">
                No categories found.
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

export default AdminCategories;
