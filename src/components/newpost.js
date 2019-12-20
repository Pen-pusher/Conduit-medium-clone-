import React from "react";
import ReactDOM, { render } from "react-dom";
import { IoIosSettings } from "react-icons/io";
import Navbar from "./navbar";

export default function NewPost(props) {
  return (
    <div>
      <Navbar />
      <form>
        <fieldset className="field">
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Article Title"
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Whats this article about"
            />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              type="text"
              className="form-control big"
              placeholder="Write your article (in markdown)"
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Tags"
            />
          </fieldset>
        </fieldset>
        <button className="btn1">Publish Article</button>
      </form>
    </div>
  );
}
