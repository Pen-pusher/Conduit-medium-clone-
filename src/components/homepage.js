import React from "react";
import ReactDOM, { render } from "react-dom";

import Navbar from "./navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-banner">
        <h1 className="home-1">conduit</h1>
        <p className="home-para"> A Place To Share Knowledge.</p>
      </div>
    </div>
  );
}
