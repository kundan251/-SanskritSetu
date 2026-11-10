import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 6;

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          API_URL("/api/categories")
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Failed to load categories."
          );
        }

        setCategories(data.categories || []);
      } catch (error) {
        console.error("Categories Error:", error);
        setError(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Pagination Calculation
  const totalPages = Math.ceil(
    categories.length / categoriesPerPage
  );

  const lastIndex = currentPage * categoriesPerPage;
  const firstIndex = lastIndex - categoriesPerPage;

  const currentCategories = categories.slice(
    firstIndex,
    lastIndex
  );

  // Change Page
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };

  // Pagination Numbers
  const getPaginationPages = () => {
    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    if (currentPage <= 2) {
      return [1, 2, "...", totalPages];
    }

    if (currentPage >= totalPages - 1) {
      return [
        1,
        "...",
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <main className="categories-page">

      {/* Hero Section */}
      <section className="categories-hero">

        <span className="categories-eyebrow">
          DISCOVER ANCIENT WISDOM
        </span>

        <h1>Explore Categories</h1>

        <p>
          Explore Sanskrit words organized into different
          fields of Indian Knowledge Systems.
        </p>

        <div className="categories-divider">
          <span>✦</span>
        </div>

      </section>

      {/* Categories Content */}
      <section className="categories-content">

        {/* Section Heading */}
        <div className="categories-heading">

          <div>
            <span className="section-label">
              KNOWLEDGE COLLECTION
            </span>

            <h2>Browse by Category</h2>
          </div>

          <p>
            Find meaningful Sanskrit terms and discover
            the wisdom behind every word.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="categories-status">
            Loading categories...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="categories-status categories-error">
            {error}
          </div>
        )}

        {/* Empty Categories */}
        {!loading && !error && categories.length === 0 && (
          <div className="categories-status">
            No categories available yet.
          </div>
        )}

        {/* Category Cards */}
        {!loading && !error && categories.length > 0 && (
          <>
            <div className="category-grid">

              {currentCategories.map((category, index) => (

                <article
                  className="category-card"
                  key={category._id}
                >

                  <div className="category-card-top">

                    <span className="category-number">
                      {String(firstIndex + index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3>{category.name}</h3>

                  <p className="category-description">
                    {category.description ||
                      "Explore Sanskrit words and discover the knowledge behind them."}
                  </p>

                  <div className="category-words">

                    <span>Total Words</span>

                    <p>
                      {category.wordCount ?? 0} Words
                    </p>

                  </div>

                  <Link
                    to={`/glossary?category=${encodeURIComponent(
                      category.name
                    )}`}
                    className="category-explore"
                  >
                    Explore Words
                    <span>→</span>
                  </Link>

                </article>

              ))}

            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="categories-pagination">

                <button
                  className="pagination-btn"
                  onClick={() =>
                    handlePageChange(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="pagination-numbers">

                  {getPaginationPages().map((page, index) => (

                    page === "..." ? (

                      <span
                        key={`dots-${index}`}
                        className="pagination-dots"
                      >
                        ...
                      </span>

                    ) : (

                      <button
                        key={page}
                        className={`pagination-number ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>

                    )

                  ))}

                </div>

                <button
                  className="pagination-btn"
                  onClick={() =>
                    handlePageChange(currentPage + 1)
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>

              </div>
            )}

          </>
        )}

        {/* Bottom Note */}
        <div className="categories-note">

          <span>॥</span>

          <p>
            Every Sanskrit word carries a story of knowledge,
            culture, and timeless wisdom.
          </p>

          <span>॥</span>

        </div>

      </section>

    </main>
  );
}

export default Categories;