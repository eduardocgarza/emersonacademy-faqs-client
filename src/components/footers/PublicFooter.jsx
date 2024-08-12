import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PublicFooter() {
  const location = useLocation();
  const navStyle = "mx-2 text-xs hover:underline opacity-75 cursor-pointer";

  const privacyStyles = `${navStyle} ${
    location.pathname === "/privacy" ? "underline" : ""
  }`;
  const termsStyles = `${navStyle} ${
    location.pathname === "/terms" ? "underline" : ""
  }`;

  const email = "hello@emersonacademy.org";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center py-4 bg-white border-t border-t-gray-300">
      <a
        className={termsStyles}
        href="https://ai.emersonacademy.org/privacy"
        target="_blank"
        rel="noreferrer"
      >
        Privacy
      </a>
      <button
        className="my-4 sm:my-0 sm:mx-2 text-xs opacity-75"
        onClick={copyToClipboard}
      >
        {email}
      </button>
      <a
        className={termsStyles}
        href="https://ai.emersonacademy.org/terms"
        target="_blank"
        rel="noreferrer"
      >
        Terms
      </a>
    </footer>
  );
}
