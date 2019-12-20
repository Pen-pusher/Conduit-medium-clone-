import React from "react";
import ReactDOM, { render } from "react-dom";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-bar">
        <a className="navbar-brand" href="#/">
          conduit
        </a>
        <ul className="nav-right ">
          <li className="nav-item">
            <Link className="home" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/signin">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/signup">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/setting">
              Setting
            </Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/newarticle">
              New Article
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
