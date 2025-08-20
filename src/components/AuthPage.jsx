import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        {!isSignup ? (
          <>
            <h2>Sign In</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
            </form>
            <p>
              Don’t have an account?{" "}
              <span className="switch-link" onClick={() => setIsSignup(true)}>
                Create New Account
              </span>
            </p>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account?{" "}
              <span className="switch-link" onClick={() => setIsSignup(false)}>
                Sign In
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
