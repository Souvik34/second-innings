import React from "react";
import "./styles/error.css";
import gif from "./images/err1.gif";

export default function Error() {
  return (
    <div className="error-page">
      {/* Left side - GIF */}
      <div className="error-gif-container">
        <img src={gif} alt="Error GIF" className="error-gif" />
      </div>

      {/* Right side - Error message */}
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page Not Found</p>
        <p className="error-description">
          The page you are looking for might have been removed or doesn't exist.
        </p>
        <a href="/" className="error-button">Go Home</a>
      </div>
    </div>
  );
}
