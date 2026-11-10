import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">✦ INDIAN KNOWLEDGE SYSTEMS ✦</span>

          <h1>
            Discover the Wisdom of
            <span> Sanskrit</span>
          </h1>

          <p>
            Explore Sanskrit words, discover their meanings, and connect with
            the timeless wisdom of Indian Knowledge Systems.
          </p>

          <div className="hero-search">
            <input type="text" placeholder="Search Sanskrit words..." />

            <Link to="/glossary" className="search-button">
              Explore
            </Link>
          </div>

          <div className="hero-features">
            <span>✓ Sanskrit Words</span>
            <span>✓ English Meanings</span>
            <span>✓ Indian Heritage</span>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <span>EXPLORE KNOWLEDGE</span>
          <h2>Discover Our Categories</h2>
          <p>
            Explore the different fields of Indian knowledge through Sanskrit
            terminology.
          </p>
        </div>

        <div className="category-grid">
          <div className="category-card yoga-card">
            <div className="category-icon">🧘</div>
            <h3>योग</h3>
            <h4>Yoga</h4>
            <p>Union, Discipline, Spiritual Practice</p>
            <Link to="/categories">Explore →</Link>
          </div>

          <div className="category-card philosophy-card">
            <div className="category-icon">📚</div>
            <h3>दर्शन</h3>
            <h4>Philosophy</h4>
            <p>Wisdom, Thought and Indian Philosophy</p>
            <Link to="/categories">Explore →</Link>
          </div>

          <div className="category-card ayurveda-card">
            <div className="category-icon">🌿</div>
            <h3>आयुर्वेद</h3>
            <h4>Ayurveda</h4>
            <p>Science of Life, Health and Healing</p>
            <Link to="/categories">Explore →</Link>
          </div>

          <div className="category-card spirituality-card">
            <div className="category-icon">ॐ</div>
            <h3>आध्यात्म</h3>
            <h4>Spirituality</h4>
            <p>Inner Peace, Consciousness and Self-Knowledge</p>
            <Link to="/categories">Explore →</Link>
          </div>
        </div>
      </section>

      <section className="popular-section">
        <div className="section-heading">
          <span>START YOUR JOURNEY</span>
          <h2>Popular Sanskrit Words</h2>
          <p>Begin exploring some important Sanskrit concepts.</p>
        </div>

        <div className="word-grid">
          <div className="word-card">
            <h3>धर्म</h3>
            <h4>Dharma</h4>
            <p>Duty, righteousness and ethical conduct.</p>
          </div>

          <div className="word-card">
            <h3>कर्म</h3>
            <h4>Karma</h4>
            <p>Action and its consequences.</p>
          </div>

          <div className="word-card">
            <h3>योग</h3>
            <h4>Yoga</h4>
            <p>A discipline involving mind and body.</p>
          </div>

          <div className="word-card">
            <h3>मोक्ष</h3>
            <h4>Moksha</h4>
            <p>Liberation from the cycle of rebirth.</p>
          </div>
        </div>

        <div className="glossary-link">
          <Link to="/glossary">Explore the Full Glossary →</Link>
        </div>
      </section>
      <section className="knowledge-banner">
        <h2>॥ विद्या ददाति विनयं ॥</h2>

        <p>Knowledge gives humility.</p>

        <Link to="/glossary" className="knowledge-button">
          Start Exploring →
        </Link>
      </section>


    </div>
  );
}

export default Home;