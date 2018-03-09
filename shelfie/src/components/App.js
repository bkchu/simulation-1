import React, { Component } from "react";
import routes from "../routes";
import "../styles/reset.css";
import "../styles/normalize.css";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container--inner">
          <div className="App__child">{routes}</div>
        </div>
      </div>
    );
  }
}

export default App;
