import React from "react";
import ReactDOM from "react-dom";
import "./assets/reset.scss";
import "./assets/main.scss";
import "../src/components/sign-in";

import { BrowserRouter as Router, Route } from "react-router-dom";

import SignIn from "../src/components/sign-in";
import SignUp from "../src/components/sign-up";
import Home from "../src/components/homepage";
import Navbar from "../src/components/navbar";
import Setting from "../src/components/setting";
import NewPost from "../src/components/newpost";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/setting" component={Setting} />
        <Route path="/newarticle" component={NewPost} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// {           //  <h1> {`${props.name}`}</h1>
//  <img className="img" src="/images/pic.jpg" alt="bike" />}
