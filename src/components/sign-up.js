import React from "react";
import ReactDOM, { render } from "react-dom";

export default function SignUp() {
  return (
    <div>
      <nav>
        <div className="nav-bar">
          <a className="navbar-brand" href="#/">
            conduit
          </a>
          <ul className="nav-right ">
            <li className="nav-item">
              <a className="home" href="#/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="home" href="#/">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="home" href="#/">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-container">
        <div className="rows">
          <h1>Sign Up</h1>
          <p className="text-center">
            <a className="account" href="#register">
              Need an account?
            </a>
          </p>
          <form>
            <fieldset>
              <fieldset className="email">
                <input className="input" type="email" placeholder="Username" />
              </fieldset>
              <fieldset className="email">
                <input className="input" type="password" placeholder="Email" />
              </fieldset>
              <fieldset className="email">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
            </fieldset>
            <button className="btn_primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
