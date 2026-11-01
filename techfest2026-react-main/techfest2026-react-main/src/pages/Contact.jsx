
import { useState } from "react";

function Contact() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(feedback);
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <p>Email: techfest2026@mbcet.ac.in</p>
      <p>Phone: +91 98765 43210</p>
      <p>Venue: MBCET Campus, Thiruvananthapuram</p>

      <h2>XSS Security Test</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
        />

        <button type="submit">Submit Feedback</button>
      </form>

      {submitted && (
        <div>
          <h3>Submitted Feedback:</h3>
          <p>{submitted}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
