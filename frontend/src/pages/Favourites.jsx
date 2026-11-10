import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";
import "./Favourites.css";

// Custom dropdown for matching the website theme
function CustomDropdown({ value, options, onChange, ariaLabel }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className={`custom-dropdown-trigger ${open ? "is-open" : ""}`}
        onClick={() => setOpen((previous) => !previous)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span>{selectedOption?.label || "Select option"}</span>
        <span className="custom-dropdown-arrow" aria-hidden="true">⌄</span>
      </button>

      {open && (
        <div className="custom-dropdown-menu" role="listbox">
          {options.map((option) => (
            <button
              type="button"
              role="option"
              aria-selected={value === option.value}
              key={option.value}
              className={`custom-dropdown-option ${
                value === option.value ? "selected" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <span>{option.label}</span>
              {value === option.value && (
                <span className="custom-dropdown-check">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search, Filter and Sort
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recent");

  // Modals
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordToRemove, setWordToRemove] = useState(null);

  const token = sessionStorage.getItem("token");

  // Fetch Favourite Words
  useEffect(() => {
    const fetchFavourites = async () => {
      if (!token) {
        setError("Please login to see your favourite words.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(API_URL("/api/favourites"), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch favourites.");
        }

        setFavourites(data.favourites || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();
  }, [token]);

  // Remove Favourite
  const handleRemoveFavourite = async (wordId) => {
    try {
      const response = await fetch(
        API_URL(`/api/favourites/remove/${wordId}`),
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to remove favourite.");
      }

      setFavourites((previous) =>
        previous.filter((word) => word._id !== wordId)
      );

      if (selectedWord?._id === wordId) {
        setSelectedWord(null);
      }

      setWordToRemove(null);
    } catch (error) {
      alert(error.message);
    }
  };

  // Get Categories
  const categories = [
    "All",
    ...new Set(
      favourites.map((word) => word.category).filter(Boolean)
    ),
  ];

  // Search and Category Filter
  const filteredFavourites = favourites.filter((word) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      (word.sanskritWord || "").toLowerCase().includes(searchText) ||
      (word.transliteration || "").toLowerCase().includes(searchText) ||
      (word.englishMeaning || "").toLowerCase().includes(searchText) ||
      (word.hindiMeaning || "").toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      word.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort Favourite Words
  const sortedFavourites = [...filteredFavourites].sort((a, b) => {
    if (sortBy === "az") {
      return (a.sanskritWord || "").localeCompare(
        b.sanskritWord || ""
      );
    }

    if (sortBy === "za") {
      return (b.sanskritWord || "").localeCompare(
        a.sanskritWord || ""
      );
    }

    // Recently Added: Keep original API order
    return 0;
  });

  return (
    <main className="favourites-page">

      {/* Hero Section */}
      <section className="favourites-heading">
        <span>♥ YOUR COLLECTION</span>

        <h1>My Favourite Words</h1>

        <p>
          Your personal collection of Sanskrit words from Indian Knowledge Systems.
        </p>
      </section>

      {/* Favourite Content */}
      <section className="favourites-content">

        <div className="favourites-header">
          <h2>Saved Words</h2>
          <span>
            {favourites.length}{" "}
            {favourites.length === 1 ? "word" : "words"} saved
          </span>
        </div>

        {loading ? (
          <p>Loading favourite words...</p>
        ) : error ? (
          <div className="favourites-empty">
            <h3>{error}</h3>
            <Link to="/login">Login Now</Link>
          </div>
        ) : favourites.length > 0 ? (

          <>

            {/* Search, Category Filter and Sort */}
            <div className="favourites-toolbar">

              <div className="favourites-search">
                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search your favourite words..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="favourites-category-filter">
                <CustomDropdown
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  ariaLabel="Filter by category"
                  options={categories.map((category) => ({
                    value: category,
                    label: category === "All" ? "All Categories" : category,
                  }))}
                />
              </div>

              {/* Sort By */}
              <div className="favourites-sort">
                <label htmlFor="sortWords">Sort By:</label>

                <CustomDropdown
                  value={sortBy}
                  onChange={setSortBy}
                  ariaLabel="Sort favourite words"
                  options={[
                    { value: "recent", label: "Recently Added" },
                    { value: "az", label: "A - Z" },
                    { value: "za", label: "Z - A" },
                  ]}
                />
              </div>

            </div>

            {/* Results Count */}
            <div className="favourites-results-count">
              Showing <strong>{sortedFavourites.length}</strong> of{" "}
              <strong>{favourites.length}</strong>{" "}
              {favourites.length === 1 ? "favourite word" : "favourite words"}
            </div>

            {/* Favourite Cards */}
            {sortedFavourites.length > 0 ? (

              <div className="favourites-grid">

                {sortedFavourites.map((word) => (

                  <article
                    className="favourite-page-card"
                    key={word._id}
                  >

                    <span className="glossary-category">
                      {word.category || "General"}
                    </span>

                    <h3>{word.sanskritWord}</h3>

                    <p className="favourite-transliteration">
                      {word.transliteration}
                    </p>

                    <h4>{word.englishMeaning}</h4>

                    <p>{word.hindiMeaning}</p>

                    <p className="favourite-description">
                      {word.description}
                    </p>

                    <div className="favourite-card-actions">

                      <button
                        className="favourite-view-btn"
                        onClick={() => setSelectedWord(word)}
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => setWordToRemove(word)}
                        className="favourite-remove-btn"
                      >
                        ♥ Remove
                      </button>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              <div className="favourites-empty">
                <span>⌕</span>

                <h3>No Matching Words Found</h3>

                <p>Try another search term or category.</p>

                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setSortBy("recent");
                  }}
                >
                  Clear Filters
                </button>
              </div>

            )}

          </>

        ) : (

          <div className="favourites-empty">
            <span>♡</span>

            <h3>No Favourite Words Yet</h3>

            <p>Start saving your favourite Sanskrit words.</p>

            <Link to="/glossary">
              Explore Glossary →
            </Link>
          </div>

        )}

      </section>

      {/* Word Details Modal */}
      {selectedWord && (

        <div
          className="favourite-modal-overlay"
          onClick={() => setSelectedWord(null)}
        >

          <div
            className="favourite-details-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="favourite-modal-close"
              onClick={() => setSelectedWord(null)}
            >
              ×
            </button>

            <span className="glossary-category">
              {selectedWord.category || "General"}
            </span>

            <h2>{selectedWord.sanskritWord}</h2>

            <p className="favourite-transliteration">
              {selectedWord.transliteration}
            </p>

            <div className="favourite-detail-item">
              <h4>English Meaning</h4>
              <p>{selectedWord.englishMeaning || "Not available"}</p>
            </div>

            <div className="favourite-detail-item">
              <h4>Hindi Meaning</h4>
              <p>{selectedWord.hindiMeaning || "Not available"}</p>
            </div>

            <div className="favourite-detail-item">
              <h4>Description</h4>
              <p>{selectedWord.description || "Not available"}</p>
            </div>

            {selectedWord.source && (
              <div className="favourite-detail-item">
                <h4>Source / Reference</h4>
                <p>{selectedWord.source}</p>
              </div>
            )}

            <button
              className="favourite-remove-btn"
              onClick={() => setWordToRemove(selectedWord)}
            >
              ♥ Remove Favourite
            </button>

          </div>

        </div>

      )}

      {/* Remove Confirmation Modal */}
      {wordToRemove && (

        <div
          className="remove-confirm-overlay"
          onClick={() => setWordToRemove(null)}
        >

          <div
            className="remove-confirm-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <span className="remove-confirm-icon">♥</span>

            <h2>Remove Favourite?</h2>

            <p>
              Are you sure you want to remove
              <strong> {wordToRemove.sanskritWord} </strong>
              from your favourites?
            </p>

            <div className="remove-confirm-actions">

              <button
                className="cancel-remove-btn"
                onClick={() => setWordToRemove(null)}
              >
                Cancel
              </button>

              <button
                className="confirm-remove-btn"
                onClick={() =>
                  handleRemoveFavourite(wordToRemove._id)
                }
              >
                Yes, Remove
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Favourites;