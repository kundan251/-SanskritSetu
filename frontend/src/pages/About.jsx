import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <span className="about-label">
          OUR STORY & PURPOSE
        </span>

        <h1>About SanskritSetu</h1>

        <p>
          Connecting ancient Sanskrit wisdom with the modern
          world through a simple and accessible digital glossary.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="about-intro">

        <div className="about-symbol">
          ॐ
        </div>

        <div className="about-intro-content">

          <span className="about-label">
            WHO WE ARE
          </span>

          <h2>
            Bridging Sanskrit and Modern Knowledge
          </h2>

          <p>
            SanskritSetu is a digital glossary designed to help
            students, researchers, and knowledge seekers explore
            Sanskrit terms related to Indian Knowledge Systems (IKS).
          </p>

          <p>
            Our platform presents Sanskrit words with their
            English meanings, Hindi explanations, categories,
            and descriptions to make learning easier.
          </p>

        </div>
      </section>

      {/* Mission, Vision and Values */}
      <section className="about-mission">

        <div className="mission-card">
          <span>🎯</span>

          <h3>Our Mission</h3>

          <p>
            To make Sanskrit terminology and Indian traditional
            knowledge easier to discover, understand, and learn.
          </p>
        </div>

        <div className="mission-card">
          <span>📚</span>

          <h3>Our Vision</h3>

          <p>
            To build a useful digital resource that connects
            traditional wisdom with students and future generations.
          </p>
        </div>

        <div className="mission-card">
          <span>🌿</span>

          <h3>Our Values</h3>

          <p>
            We value learning, cultural preservation,
            accessibility, and clear explanations of
            Sanskrit terminology.
          </p>
        </div>

      </section>

      {/* Indian Knowledge Systems Section */}
      <section className="about-iks">

        <span className="about-label">
          INDIAN KNOWLEDGE SYSTEMS
        </span>

        <h2>
          Discover the Wisdom of India
        </h2>

        <p>
          Indian Knowledge Systems include diverse traditions
          of philosophy, mathematics, astronomy, yoga, Ayurveda,
          language, literature, and many other fields of knowledge.
        </p>

        <p>
          SanskritSetu helps learners explore important terms
          from these fields and understand their meanings
          in a structured way.
        </p>

        <Link to="/categories" className="about-button">
          Explore Categories →
        </Link>

      </section>

      {/* Sanskrit Quote Section */}
      <section className="about-quote">

        <h2>
          ॥ विद्या ददाति विनयं ॥
        </h2>

        <p>
          Knowledge gives humility.
        </p>

      </section>

    </main>
  );
}

export default About;