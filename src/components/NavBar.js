import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navigation extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/Flagged">Flagged Items</Link>
        <Link to="/Map">Map</Link>
      </div>
    );
  }
}

export default Navigation;
