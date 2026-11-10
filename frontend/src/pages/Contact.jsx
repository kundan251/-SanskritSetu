import { useState } from "react";
import "./Contact.css";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

// Handle Input Changes
function handleChange(event) {
const { name, value } = event.target;


setFormData((previous) => ({
  ...previous,
  [name]: value,
}));

setSubmitted(false);
setError("");


}

// Handle Form Submit
async function handleSubmit(event) {
event.preventDefault();

setLoading(true);
setSubmitted(false);
setError("");

try {
  const response = await fetch(
    "http://localhost:5000/api/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit message");
  }

  setSubmitted(true);

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
} catch (err) {
  setError(
    err.message || "Something went wrong. Please try again."
  );
} finally {
  setLoading(false);
}


}

return ( <main className="contact-page">


  {/* Contact Hero Section */}
  <section className="contact-hero">
    <span className="contact-label">
      WE WOULD LOVE TO HEAR FROM YOU
    </span>

    <h1>Contact Us</h1>

    <p>
      Have a question or suggestion? Get in touch with
      the SanskritSetu team. We are always happy to hear
      from you.
    </p>
  </section>

  {/* Contact Main Section */}
  <section className="contact-content">

    {/* Left Side Information */}
    <div className="contact-info">

      <span className="contact-label">
        GET IN TOUCH
      </span>

      <h2>Let's Connect</h2>

      <p>
        We welcome your feedback, questions, and
        suggestions to help improve this digital
        Sanskrit-English glossary and make Indian
        Knowledge Systems easier to explore.
      </p>

      <div className="contact-info-card">
        <span>📚</span>

        <div>
          <h3>Our Platform</h3>
          <p>
            SanskritSetu — Digital Sanskrit-English Glossary
          </p>
        </div>
      </div>

      <div className="contact-info-card">
        <span>🌿</span>

        <div>
          <h3>Our Purpose</h3>
          <p>
            Making Indian Knowledge Systems easier
            to explore and understand.
          </p>
        </div>
      </div>

      <div className="contact-info-card">
        <span>📖</span>

        <div>
          <h3>Our Vision</h3>
          <p>
            Connecting ancient Sanskrit knowledge
            with modern learners.
          </p>
        </div>
      </div>

    </div>

    {/* Right Side Contact Form */}
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >

      <h2>Send Us a Message</h2>

      {/* Name */}
      <label htmlFor="contact-name">
        Your Name
      </label>

      <input
        id="contact-name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Email */}
      <label htmlFor="contact-email">
        Email Address
      </label>

      <input
        id="contact-email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Subject */}
      <label htmlFor="contact-subject">
        Subject
      </label>

      <input
        id="contact-subject"
        name="subject"
        type="text"
        placeholder="What is your message about?"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      {/* Message */}
      <label htmlFor="contact-message">
        Message
      </label>

      <textarea
        id="contact-message"
        name="message"
        rows="5"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="contact-submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>

      {/* Success Message */}
      {submitted && (
        <p className="contact-success" role="status">
          ✓ Thank you! Your message has been saved successfully.
        </p>
      )}

      {/* Error Message */}
      {error && (
        <p className="contact-error" role="alert">
          ✕ {error}
        </p>
      )}

    </form>

  </section>
</main>


);
}

export default Contact;
