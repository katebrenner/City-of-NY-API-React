import React, { Component } from "react";
import Accident from "./Accident";
import Navigation from "./NavBar";
import Header from "./Header";

class Flagged extends Component {
  state = {};

  render() {
    console.log(this.props.Flagged);
    return (
      <div>
        <Header />
        <Navigation />
        <div className="grid">
          {this.props.Flagged.map((flagged, index) => {
            return (
              <Accident
                key={index}
                className="accident"
                latitude={flagged.latitude}
                longitude={flagged.longitude}
                date={flagged.date}
                contributing_factor_vehicle_1={flagged.contributing_factor_vehicle_1}
                on_street_name={flagged.on_street_name}
                number_of_persons_injured={flagged.number_of_persons_injured}
                number_of_persons_killed={flagged.number_of_persons_killed}
                id={flagged.id}
                notes={flagged.notes}
                removeFromFlag={this.props.removeFromFlag}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Flagged;
