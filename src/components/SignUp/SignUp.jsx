import React, { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Sign Up Successful!");
  };

  return (
    <div className="card">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} aria-label="Sign Up Form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          aria-label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          aria-label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          aria-label="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
