import React, { Component } from "react";
import NYCMap from "./NYCMap";

class Map extends Component {
  state = {};
  map() {}

  render() {
    console.log("accidents props:", this.props.accidents);
    return (
      <div className="mapContainer">
        <NYCMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.props.accidents}
        />
      </div>
    );
  }
}

export default Map;
