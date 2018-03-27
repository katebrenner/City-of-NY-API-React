import React, { Component } from "react";
import axios from "axios";
import Accident from "./Accident";
class Flagged extends Component {
  state = {};

  render() {
    return (
      <div className="grid">
        {this.props.Flagged.map(flagged => {
          return (
            <Accident
              className="accident"
              latitude={flagged.latitude}
              longitude={flagged.longitude}
              date={flagged.date}
              contributing_factor_vehicle_1={flagged.contributing_factor_vehicle_1}
              on_street_name={flagged.on_street_name}
              removeFromFlag={this.props.removeFromFlag}
              id={flagged.id}
              notes={flagged.notes}
            />
          );
        })}{" "}
      </div>
    );
  }
}

export default Flagged;
