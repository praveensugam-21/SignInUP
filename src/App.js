import React from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthPage from "./components/AuthPage";

function App() {
  return (
    <>
      {/* Auth Page wrapper */}
      <AuthPage />

      {/* Direct SignIn + SignUp (for testing/display) */}
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}

export default App;
