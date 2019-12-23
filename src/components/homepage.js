import React from "react";
import ReactDOM, { render } from "react-dom";

import Navbar from "./navbar";

export default class Home extends React.Component {
  state = {
    tags: [],
    articles: [],
    username: "",
    password: ""
  };
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(({ tags }) => this.setState({ tags }));
    fetch("https://conduit.productionready.io/api/articles")
      .then(res => res.json())
      .then(({ articles }) => this.setState({ articles }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="home-banner">
          <h1 className="home-1">conduit</h1>
          <p className="home-para"> A Place To Share Knowledge.</p>
        </div>
        <div>
          <div>
            <ul>
              {this.state.articles.map(article => (
                <li>{article.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <ul>
              {this.state.tags.map(tag => (
                <li>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
