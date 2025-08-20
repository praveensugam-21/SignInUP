import React, { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    alert("Sign In Successful!");
  };

  return (
    <div className="card">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} aria-label="Sign In Form">
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
