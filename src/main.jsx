import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./styles.css";

function StaticPageFrame() {
  const location = useLocation();

  const pageMap = {
    "/": "/site/index.html",
    "/blog": "/site/blog.html",
    "/contact": "/site/contact.html",
    "/privacy": "/site/privacy.html",
    "/terms": "/site/terms.html"
  };

  const src = pageMap[location.pathname] ?? "/site/index.html";

  return (
    <div className="app-shell">
      <iframe key={src} className="site-frame" src={src} title="gyrusiq Site" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StaticPageFrame />} />
        <Route path="/blog" element={<StaticPageFrame />} />
        <Route path="/contact" element={<StaticPageFrame />} />
        <Route path="/privacy" element={<StaticPageFrame />} />
        <Route path="/terms" element={<StaticPageFrame />} />
        <Route path="*" element={<StaticPageFrame />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
