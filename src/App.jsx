import { createRoot } from "react-dom/client";
import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);