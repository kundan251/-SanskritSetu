import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";
import "./Glossary.css";

function Glossary() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [words, setWords] = useState([]);
  const [favouriteIds, setFavouriteIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 20;

  // Sorting
  const [sortOrder, setSortOrder] = useState("default");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { value: "default", label: "Default Order" },
    { value: "az", label: "A - Z" },
    { value: "za", label: "Z - A" },
    { value: "latest", label: "Latest Added" },
    { value: "oldest", label: "Oldest Added" },
  ];

  // URL Category Management
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] =
    useState(categoryFromUrl);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const token = sessionStorage.getItem("token");

  // Sync Category with URL
  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  // Reset Page
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, sortOrder]);

  // Fetch All Words
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(API_URL("/api/words"));

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch words");
        }

        setWords(data.words);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  // Fetch Favourite Words
  useEffect(() => {
    const fetchFavourites = async () => {
      if (!token) return;

      try {
        const response = await fetch(API_URL("/api/favourites"), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setFavouriteIds(
            (data.favourites || []).map((word) => word._id)
          );
        }
      } catch (error) {
        console.error("Favourite Error:", error);
      }
    };

    fetchFavourites();
  }, [token]);

  // Add or Remove Favourite
  const handleFavourite = async (wordId) => {
    if (!token) {
      alert("Please login first!");
      return;
    }

    const isFavourite = favouriteIds.includes(wordId);

    try {
      const response = await fetch(
        isFavourite
          ? API_URL(`/api/favourites/remove/${wordId}`)
          : API_URL("/api/favourites/add"),
        {
          method: isFavourite ? "DELETE" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          ...(!isFavourite && {
            body: JSON.stringify({ wordId }),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setFavouriteIds((previousIds) =>
        isFavourite
          ? previousIds.filter((id) => id !== wordId)
          : [...previousIds, wordId]
      );
    } catch (error) {
      alert(error.message);
    }
  };

  // Recently Viewed + Navigate to Word Details Page
  const handleViewWord = async (word) => {
    if (token) {
      try {
        const response = await fetch(
          API_URL("/api/recently-viewed/add"),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              wordId: word._id,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.error("Recently Viewed Error:", data.message);
        }
      } catch (error) {
        console.error("Recently Viewed Error:", error);
      }
    }

    navigate(`/word/${word._id}`);
  };

  // Get Categories
  const categories = [
    "All",
    ...new Set(words.map((word) => word.category).filter(Boolean)),
  ];

  // Handle Category Selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);

    const newParams = new URLSearchParams(searchParams);

    if (category === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", category);
    }

    setSearchParams(newParams);
  };

  // Handle Sorting Selection
  const handleSortChange = (value) => {
    setSortOrder(value);
    setIsSortOpen(false);
  };

  // Search and Category Filter
  const filteredWords = words.filter((word) => {
    const query = search.toLowerCase();

    const matchesSearch =
      word.sanskritWord?.includes(search) ||
      word.transliteration?.toLowerCase().includes(query) ||
      word.englishMeaning?.toLowerCase().includes(query) ||
      word.hindiMeaning?.includes(search) ||
      word.category?.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "All" ||
      word.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sorting Logic
  const sortedWords = [...filteredWords].sort((a, b) => {
    switch (sortOrder) {
      case "az":
        return (a.sanskritWord || "").localeCompare(
          b.sanskritWord || "",
          "hi"
        );

      case "za":
        return (b.sanskritWord || "").localeCompare(
          a.sanskritWord || "",
          "hi"
        );

      case "latest":
        return (
          new Date(b.createdAt || 0) -
          new Date(a.createdAt || 0)
        );

      case "oldest":
        return (
          new Date(a.createdAt || 0) -
          new Date(b.createdAt || 0)
        );

      default:
        return 0;
    }
  });

  // Pagination Logic
  const totalPages = Math.ceil(
    sortedWords.length / wordsPerPage
  );

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;

  const currentWords = sortedWords.slice(
    indexOfFirstWord,
    indexOfLastWord
  );

  // Show Limited Page Numbers
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <main className="glossary-page">

      {/* Heading */}
      <section className="glossary-heading">

        <p className="glossary-label">
          EXPLORE INDIAN KNOWLEDGE
        </p>

        <h1>Sanskrit-English Glossary</h1>

        <p>
          Discover the meanings of Sanskrit words from Indian Knowledge Systems.
        </p>

        {/* Search */}
        <input
          type="search"
          className="glossary-search"
          placeholder="Search Sanskrit or English words..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {/* Custom Sorting Dropdown */}
        <div className="glossary-sorting">

          <label>Sort By:</label>

          <div className="custom-sort-dropdown">

            <button
              type="button"
              className={`sort-dropdown-btn ${
                isSortOpen ? "open" : ""
              }`}
              onClick={() => setIsSortOpen(!isSortOpen)}
              aria-expanded={isSortOpen}
            >

              <span>
                {sortOptions.find(
                  (option) => option.value === sortOrder
                )?.label}
              </span>

              <span className={`sort-arrow ${
                isSortOpen ? "rotate" : ""
              }`}>
                ⌄
              </span>

            </button>

            {isSortOpen && (

              <div className="sort-dropdown-menu">

                {sortOptions.map((option) => (

                  <button
                    type="button"
                    key={option.value}
                    className={`sort-option ${
                      sortOrder === option.value ? "selected" : ""
                    }`}
                    onClick={() => handleSortChange(option.value)}
                  >

                    <span>{option.label}</span>

                    {sortOrder === option.value && (
                      <span className="sort-check">✓</span>
                    )}

                  </button>

                ))}

              </div>

            )}

          </div>

        </div>

        {/* Custom Category Dropdown */}
        <div className="custom-category-dropdown">

          <button
            type="button"
            className={`category-dropdown-btn ${
              isCategoryOpen ? "open" : ""
            }`}
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            aria-expanded={isCategoryOpen}
          >

            <span>
              {selectedCategory === "All"
                ? "All Categories"
                : selectedCategory}
            </span>

            <span className="dropdown-arrow">
              {isCategoryOpen ? "⌃" : "⌄"}
            </span>

          </button>

          {isCategoryOpen && (

            <div className="category-dropdown-menu">

              {categories.map((category) => (

                <button
                  type="button"
                  key={category}
                  className={`category-option ${
                    selectedCategory === category ? "selected" : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >

                  <span>
                    {category === "All"
                      ? "All Categories"
                      : category}
                  </span>

                  {selectedCategory === category && (
                    <span>✓</span>
                  )}

                </button>

              ))}

            </div>

          )}

        </div>

      </section>

      {/* Glossary Results */}
      <section className="glossary-results">

        <div className="glossary-results-header">

          <h2>
            {selectedCategory === "All"
              ? "Explore Words"
              : selectedCategory}
          </h2>

          <span>{filteredWords.length} words found</span>

        </div>

        {loading ? (

          <p>Loading Sanskrit words...</p>

        ) : error ? (

          <p>{error}</p>

        ) : filteredWords.length > 0 ? (

          <>

            {/* Words Grid */}
            <div className="glossary-grid">

              {currentWords.map((word) => {

                const isFavourite = favouriteIds.includes(word._id);

                return (

                  <article className="glossary-card" key={word._id}>

                    <button
                      className={`favourite-btn ${
                        isFavourite ? "active" : ""
                      }`}
                      onClick={() => handleFavourite(word._id)}
                      aria-label={
                        isFavourite
                          ? "Remove from favourites"
                          : "Add to favourites"
                      }
                    >
                      {isFavourite ? "♥" : "♡"}
                    </button>

                    <span className="glossary-category">
                      {word.category}
                    </span>

                    <h3>{word.sanskritWord}</h3>

                    <p className="glossary-transliteration">
                      {word.transliteration}
                    </p>

                    <p className="glossary-english">
                      {word.englishMeaning}
                    </p>

                    <p className="glossary-hindi">
                      {word.hindiMeaning}
                    </p>

                    <p className="glossary-description">
                      {word.description}
                    </p>

                    <button
                      className="view-word-btn"
                      onClick={() => handleViewWord(word)}
                    >
                      View Details →
                    </button>

                  </article>

                );
              })}

            </div>

            {/* Pagination */}
            {totalPages > 1 && (

              <div className="pagination">

                <button
                  type="button"
                  className="pagination-btn"
                  onClick={() =>
                    setCurrentPage((page) => Math.max(page - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="pagination-pages">

                  {getPageNumbers().map((page, index) => (

                    page === "..." ? (

                      <span
                        key={`dots-${index}`}
                        className="pagination-dots"
                      >
                        ...
                      </span>

                    ) : (

                      <button
                        type="button"
                        key={page}
                        className={`pagination-btn ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>

                    )

                  ))}

                </div>

                <button
                  type="button"
                  className="pagination-btn"
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(page + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>

              </div>

            )}

          </>

        ) : (

          <div className="glossary-empty">

            <h3>No words found</h3>

            <p>
              Try searching for another Sanskrit or English word.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Glossary;