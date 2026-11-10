import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/api";
import "./WordDetails.css";

function WordDetails() {
  const { id } = useParams();

  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteLoading, setFavouriteLoading] = useState(false);

  const token = sessionStorage.getItem("token");

  // Fetch Word Details
  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          API_URL(`/api/words/${id}`)
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Word not found!");
        }

        setWord(data.word);

        // Add to Recently Viewed
        if (token) {
          try {
            await fetch(
              API_URL("/api/recently-viewed/add"),
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  wordId: id,
                }),
              }
            );
          } catch (recentError) {
            console.error("Recently Viewed Error:", recentError);
          }
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWordDetails();
  }, [id, token]);

  // Check Favourite Status
  useEffect(() => {
    const fetchFavourites = async () => {
      if (!token) return;

      try {
        const response = await fetch(
          API_URL("/api/favourites"),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          const favouriteIds = (data.favourites || []).map(
            (item) => item._id
          );

          setIsFavourite(favouriteIds.includes(id));
        }
      } catch (error) {
        console.error("Favourite Fetch Error:", error);
      }
    };

    fetchFavourites();
  }, [id, token]);

  // Toggle Favourite
  const handleFavourite = async () => {
    if (!token) {
      alert("Please login to add favourites!");
      return;
    }

    try {
      setFavouriteLoading(true);

      const response = await fetch(
        isFavourite
          ? API_URL(`/api/favourites/remove/${id}`)
          : API_URL("/api/favourites/add"),
        {
          method: isFavourite ? "DELETE" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          ...(!isFavourite && {
            body: JSON.stringify({
              wordId: id,
            }),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setIsFavourite(!isFavourite);

    } catch (error) {
      alert(error.message);
    } finally {
      setFavouriteLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="word-details-status">
        <div className="word-details-loader"></div>
        <p>Loading Word Details...</p>
      </div>
    );
  }

  if (error || !word) {
    return (
      <div className="word-details-status">
        <h2>Word Not Found!</h2>
        <p>{error || "This word does not exist."}</p>
        <Link to="/glossary" className="back-glossary-btn">
          ← Back to Glossary
        </Link>
      </div>
    );
  }

  return (
    <div className="word-details-page">

      {/* Header */}
      <div className="word-details-header">
        <span> SANSKRITSETU / GLOSSARY </span>

        <h1>Word Details</h1>

        <p>
          Explore the meaning, knowledge and wisdom behind Sanskrit words.
        </p>
      </div>

      {/* Main Content */}
      <div className="word-details-container">

        <Link to="/glossary" className="word-back-link">
          ← Back to Glossary
        </Link>

        <div className="word-details-card">

          {/* Category */}
          <span className="word-details-category">
            {word.category}
          </span>

          {/* Sanskrit Word */}
          <div className="word-details-title">
            <h2>{word.sanskritWord}</h2>

            <p className="word-details-transliteration">
              {word.transliteration}
            </p>
          </div>

          <div className="word-details-divider"></div>

          {/* Meanings */}
          <div className="word-meaning-grid">

            <div className="word-meaning-box">
              <span>ENGLISH MEANING</span>
              <h3>{word.englishMeaning || "Not available"}</h3>
            </div>

            <div className="word-meaning-box">
              <span>HINDI MEANING</span>
              <h3>{word.hindiMeaning || "उपलब्ध नहीं है"}</h3>
            </div>

          </div>

          {/* Description */}
          <div className="word-details-description">
            <h3>About This Word</h3>

            <p>
              {word.description || "No description available."}
            </p>
          </div>

          {/* Favourite Button */}
          <div className="word-details-actions">
            <button
              className={`details-favourite-btn ${
                isFavourite ? "favourite-active" : ""
              }`}
              onClick={handleFavourite}
              disabled={favouriteLoading}
            >
              {favouriteLoading
                ? "Please Wait..."
                : isFavourite
                ? "♥ Remove from Favourites"
                : "♡ Add to Favourites"}
            </button>

            <Link to="/glossary" className="details-back-btn">
              Explore More Words →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WordDetails;