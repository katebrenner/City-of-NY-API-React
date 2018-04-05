import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <img
          src="https://img.lcpdfr.com/uploads/monthly_2017_02/nypd.thumb.png.b7ab77009838124183c6d4598509cd43.png"
          alt="NYPD"
          className="NYPD"
        />
        <h1 className="black">Motor Vehicle Collisions</h1>
      </div>
    );
  }
}

export default Header;
