import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./NavBar";
class Map extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <h1>Map Page</h1>
      </div>
    );
  }
}

export default Map;
