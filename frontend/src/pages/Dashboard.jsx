import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(sessionStorage.getItem("user") || "null");
  const token = sessionStorage.getItem("token");

  const [favourites, setFavourites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const [totalWords, setTotalWords] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);

  const [loading, setLoading] = useState(true);
  const [recentLoading, setRecentLoading] = useState(true);
  const [removingId, setRemovingId] = useState(null);

  // Fetch Favourite Words
  const fetchFavourites = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/favourites", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load favourites.");
      }

      setFavourites(data.favourites || []);
    } catch (error) {
      console.error("Favourite Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Recently Viewed Words
  const fetchRecentlyViewed = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/recently-viewed",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load history.");
      }

      setRecentlyViewed(data.recentlyViewed || []);
    } catch (error) {
      console.error("Recently Viewed Error:", error);
    } finally {
      setRecentLoading(false);
    }
  };

  // Fetch Total Words and Categories
  const fetchGlossaryStats = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/words");

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load glossary statistics.");
      }

      const words = data.words || [];

      setTotalWords(words.length);

      const categories = [
        ...new Set(
          words
            .map((word) => word.category?.trim())
            .filter(Boolean)
        ),
      ];

      setTotalCategories(categories.length);
    } catch (error) {
      console.error("Glossary Stats Error:", error);
    }
  };

  // Load Dashboard Data
  useEffect(() => {
    if (token) {
      fetchFavourites();
      fetchRecentlyViewed();
      fetchGlossaryStats();
    } else {
      setLoading(false);
      setRecentLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Remove Favourite
  const handleRemoveFavourite = async (wordId) => {
    if (
      !window.confirm(
        "Are you sure you want to remove this favourite word?"
      )
    ) {
      return;
    }

    setRemovingId(wordId);

    try {
      const response = await fetch(
        `http://localhost:5000/api/favourites/remove/${wordId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to remove favourite.");
      }

      setFavourites((previous) =>
        previous.filter((word) => word._id !== wordId)
      );
    } catch (error) {
      window.alert(error.message || "Something went wrong.");
    } finally {
      setRemovingId(null);
    }
  };

  // Login Check
  if (!token) {
    return (
      <main className="dashboard-container">
        <div className="dashboard-empty-login">
          <span className="dashboard-empty-icon">🔐</span>

          <h2>Please log in to view your dashboard</h2>

          <p>
            Your favourite words and learning activity will appear here.
          </p>

          <Link to="/login" className="dashboard-primary-btn">
            Login Now
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard-container">

      {/* Welcome Section */}
      <section className="dashboard-welcome">
        <div className="dashboard-welcome-content">
          <span className="dashboard-eyebrow">
            YOUR PERSONAL LEARNING SPACE
          </span>

          <h1>
            Welcome back, {user?.name?.split(" ")[0] || "Learner"}!
          </h1>

          <p>
            Continue exploring Sanskrit words and the wisdom of Indian
            Knowledge Systems.
          </p>

          <Link to="/glossary" className="dashboard-welcome-btn">
            Explore Glossary <span>→</span>
          </Link>
        </div>

        <div className="dashboard-icon" aria-hidden="true">
          <span>सं</span>
          <small>SanskritSetu</small>
        </div>
      </section>

      {/* Statistics */}
      <section className="dashboard-stats">

        <article className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">📚</span>
            <span className="stat-label">GLOSSARY</span>
          </div>

          <h2>{totalWords}</h2>
          <p>Total Words</p>
        </article>

        <article className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">🪷</span>
            <span className="stat-label">KNOWLEDGE</span>
          </div>

          <h2>{totalCategories}</h2>
          <p>Total Categories</p>
        </article>

        <article className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">♥</span>
            <span className="stat-label">COLLECTION</span>
          </div>

          <h2>{favourites.length}</h2>
          <p>Favourite Words</p>
        </article>

      </section>

      {/* Quick Access */}
      <section className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <span className="dashboard-section-kicker">
              GET STARTED
            </span>

            <h2>Quick Access</h2>
          </div>
        </div>

        <div className="quick-access">

          <Link to="/glossary" className="quick-card">
            <span className="quick-card-icon">📚</span>

            <div>
              <h3>Explore Glossary</h3>
              <p>Discover Sanskrit words and their meanings.</p>
            </div>

            <span className="quick-card-arrow">→</span>
          </Link>

          <Link to="/categories" className="quick-card">
            <span className="quick-card-icon">🪷</span>

            <div>
              <h3>Browse Categories</h3>
              <p>Explore different areas of Indian knowledge.</p>
            </div>

            <span className="quick-card-arrow">→</span>
          </Link>

          <Link to="/favourites" className="quick-card">
            <span className="quick-card-icon">♥</span>

            <div>
              <h3>My Favourites</h3>
              <p>Return to the Sanskrit words you have saved.</p>
            </div>

            <span className="quick-card-arrow">→</span>
          </Link>

          <Link to="/profile" className="quick-card">
            <span className="quick-card-icon">👤</span>

            <div>
              <h3>My Profile</h3>
              <p>View and manage your account information.</p>
            </div>

            <span className="quick-card-arrow">→</span>
          </Link>

        </div>
      </section>

      {/* Favourite Words */}
      <section className="dashboard-section">

        <div className="dashboard-section-heading">
          <div>
            <span className="dashboard-section-kicker">
              YOUR COLLECTION
            </span>

            <h2>♥ My Favourite Words</h2>
          </div>

          <Link to="/favourites" className="dashboard-view-all">
            View All →
          </Link>
        </div>

        {loading ? (
          <div className="dashboard-loading">
            Loading favourite words...
          </div>
        ) : favourites.length > 0 ? (
          <>
            <div className="favourite-dashboard-grid">
              {favourites.slice(0, 3).map((word) => (
                <article
                  className="favourite-dashboard-card"
                  key={word._id}
                >
                  <span className="glossary-category">
                    {word.category || "General"}
                  </span>

                  <h3>{word.sanskritWord}</h3>

                  <p className="dashboard-word-transliteration">
                    {word.transliteration}
                  </p>

                  <h4>
                    {word.englishMeaning || "Meaning not available"}
                  </h4>

                  <p className="dashboard-word-hindi">
                    {word.hindiMeaning || ""}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleRemoveFavourite(word._id)}
                    className="remove-favourite-btn"
                    disabled={removingId === word._id}
                  >
                    {removingId === word._id
                      ? "Removing..."
                      : "♥ Remove Favourite"}
                  </button>
                </article>
              ))}
            </div>

            {favourites.length > 3 && (
              <div className="dashboard-more-link">
                <Link to="/favourites">
                  See all {favourites.length} saved words →
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="empty-dashboard">
            <span>♡</span>

            <h3>No Favourite Words Yet</h3>

            <p>
              Add your favourite Sanskrit words from the Glossary.
            </p>

            <Link to="/glossary" className="dashboard-explore-btn">
              Explore Words
            </Link>
          </div>
        )}

      </section>

      {/* Recently Viewed */}
      <section className="dashboard-section">

        <div className="dashboard-section-heading">
          <div>
            <span className="dashboard-section-kicker">
              KEEP LEARNING
            </span>

            <h2>◷ Recently Viewed Words</h2>
          </div>

          <Link to="/glossary" className="dashboard-view-all">
            Explore More →
          </Link>
        </div>

        {recentLoading ? (
          <div className="dashboard-loading">
            Loading recently viewed words...
          </div>
        ) : recentlyViewed.length > 0 ? (
          <div className="favourite-dashboard-grid">
            {recentlyViewed.slice(0, 3).map((word) => (
              <article
                className="favourite-dashboard-card"
                key={word._id}
              >
                <span className="glossary-category">
                  {word.category || "General"}
                </span>

                <h3>{word.sanskritWord}</h3>

                <p className="dashboard-word-transliteration">
                  {word.transliteration}
                </p>

                <h4>
                  {word.englishMeaning || "Meaning not available"}
                </h4>

                <p className="dashboard-word-hindi">
                  {word.hindiMeaning || ""}
                </p>

                <Link to="/glossary" className="dashboard-explore-btn">
                  Explore Glossary
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-dashboard">
            <span>📖</span>

            <h3>No Words Viewed Yet</h3>

            <p>
              Open Sanskrit words from the Glossary to see your history here.
            </p>

            <Link to="/glossary" className="dashboard-explore-btn">
              Explore Words
            </Link>
          </div>
        )}

      </section>

    </main>
  );
}

export default Dashboard;