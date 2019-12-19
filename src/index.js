import React from "react";
import ReactDOM from "react-dom";
import "./assets/reset.scss";
import "./assets/main.scss";
import "../src/components/sign-in";
import SignIn from "../src/components/sign-in";
import SignUp from "../src/components/sign-up";

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      <SignUp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// {           //  <h1> {`${props.name}`}</h1>
//  <img className="img" src="/images/pic.jpg" alt="bike" />}
