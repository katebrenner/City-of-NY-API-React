import React, { Component } from "react";
import NYCMap from "./NYCMap";
import Navigation from "./NavBar";
import Header from "./Header";

class Map extends Component {
  state = {};
  map() {}
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="mapContainer">
          <NYCMap
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOLRfk3T0BsWDW-BX7w_6xSGM5uagqdFY&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            markers={this.props.accidents}
          />
        </div>
      </div>
    );
  }
}

export default Map;
