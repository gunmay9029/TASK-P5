
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Validate the details, create the account and save its profile.
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (fullName.trim().split(/\s+/).length < 2) {
      setError("Please enter your first and last name.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    let createdUser = null;

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      createdUser = result.user;

      await setDoc(doc(db, "users", createdUser.uid), {
        fullName: fullName.trim(),
        email: email.trim(),
        createdAt: serverTimestamp(),
      });

      await signOut(auth);

      navigate("/login", {
        state: {
          message: "Account created successfully. Please log in.",
        },
      });
    } catch (err) {
      if (createdUser) {
        setError(
          "Your account was created, but its profile could not be saved. Check Firestore rules."
        );
      } else if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please log in.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        setError("Choose a stronger password.");
      } else {
        setError("Registration failed. Please check your details.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create a DEV@Deakin Account</h1>

        <label htmlFor="signup-name">Name*</label>
        <input
          id="signup-name"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          autoComplete="name"
          required
        />

        <label htmlFor="signup-email">Email*</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />

        <label htmlFor="signup-password">Password*</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
          minLength={6}
          required
        />

        <label htmlFor="signup-confirm">Confirm password*</label>
        <input
          id="signup-confirm"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          autoComplete="new-password"
          minLength={6}
          required
        />

        {error && (
          <p className="auth-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Create"}
        </button>

        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </main>
  );
}
