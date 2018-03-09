import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

class Shelfs extends Component {
  render() {
    return (
      <div className="Shelfs">
        <Header {...this.props} />
        <Link className="Shelfs__link" to="/bins/A">
          Shelf A
        </Link>
        <Link className="Shelfs__link" to="/bins/B">
          Shelf B
        </Link>
        <Link className="Shelfs__link" to="/bins/C">
          Shelf C
        </Link>
        <Link className="Shelfs__link" to="/bins/D">
          Shelf D
        </Link>
      </div>
    );
  }
}

export default Shelfs;
