import React from "react";
import ReactDOM, { render } from "react-dom";

import Navbar from "./navbar";

export default function Setting(props) {
  return (
    <div>
      <Navbar />
      <div className="setting-page">
        <h1 className="head">Your Settings</h1>
        <form>
          <fieldset>
            <fieldset className="email">
              <input
                className="input"
                type="email"
                placeholder="URL of profile picture"
              />
            </fieldset>
            <fieldset className="email">
              <input className="input" type="email" placeholder="User Name " />
            </fieldset>
            <fieldset className="email">
              <textarea
                className="input setting"
                type="email"
                placeholder="Short bio about you"
              />
            </fieldset>
            <fieldset className="email">
              <input className="input" type="email" placeholder="Email" />
            </fieldset>
            <fieldset className="email">
              <input
                className="input"
                type="email"
                placeholder="New Password"
              />
            </fieldset>
          </fieldset>
          <button className="btn2">Update Setting</button>
        </form>
        <hr />
        <button className="btn3">Or click here to logout</button>
      </div>
    </div>
  );
}
