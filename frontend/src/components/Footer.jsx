
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubscribe(event) {
    event.preventDefault();
    setMessage("");

    const trimmedEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.message || `Subscription failed (HTTP ${response.status}).`);
      }

      setMessage(result.message || "Subscription successful!");
      setEmail("");
    } catch (error) {
      setMessage(
        error instanceof TypeError
          ? "Unable to connect to the server. Please try again."
          : error.message || "Something went wrong. Please try again."
      );
    }
  }

  return (
    <footer className="site-footer" id="contact">
      <section className="newsletter" id="signup">
        <p className="section-label">STAY IN THE LOOP</p>
        <h2>Sign Up for Our Daily Insider</h2>
        <p>
          Subscribe to receive updates, articles, tutorials, and news from
          the DEV@Deakin community.
        </p>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            required
          />

          <button type="submit">Subscribe</button>
        </form>

        {message && (
          <p className="newsletter-message" role="status">
            {message}
          </p>
        )}
      </section>

      <div className="footer-columns">
        <div className="footer-about">
          <a href="#home" className="footer-brand">
            DEV<span>@</span>Deakin
          </a>
          <p>
            A community to share ideas, discover knowledge, and learn
            together through articles and tutorials.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#articles">Articles</a>
          <a href="#tutorials">Tutorials</a>
        </div>

        <div>
          <h3>Support</h3>
          <a href="#contact">Contact</a>
          <a href="#signup">Newsletter</a>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Use</a>
        </div>

        <div>
          <h3>Stay Connected</h3>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:contact@example.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DEV@Deakin. All rights reserved.</p>
        <div>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms</a>
          <a href="#home">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
