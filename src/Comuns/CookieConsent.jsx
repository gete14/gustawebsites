// CookieConsent.jsx
import React, { useState, useEffect } from "react";
import "../styles/cookie-consent.css"; // vamos criar esse CSS

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Este site usa cookies para melhorar sua experiência e analisar o tráfego.
      </p>
      <button onClick={acceptCookies}>Aceitar</button>
    </div>
  );
}