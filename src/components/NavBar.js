import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navigation extends Component {
  render() {
    return (
      <Menu className="navBar">
        <Link to="/">
          <Menu.Item>Home</Menu.Item>
        </Link>
        <Link to="/Flagged">
          <Menu.Item>Flagged Items</Menu.Item>
        </Link>
        <Link to="/Map">
          <Menu.Item>Map</Menu.Item>
        </Link>
        <Link to="/Stats">
          <Menu.Item>Stats</Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default Navigation;
