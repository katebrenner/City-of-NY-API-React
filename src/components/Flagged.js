import React, { Component } from "react";
import Accident from "./Accident";
import Navigation from "./NavBar";
import AccidentForm from "./AccidentForm";
import Header from "./Header";

class Flagged extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Navigation />
        {this.props.state.form ? (
          <AccidentForm
            className="form"
            date={this.props.state.date}
            time={this.props.state.time}
            borough={this.props.state.borough}
            zip_code={this.props.state.zip_code}
            latitude={this.props.state.latitude}
            longitude={this.props.state.longitude}
            number_of_persons_injured={this.props.state.number_of_persons_injured}
            number_of_persons_killed={this.props.state.number_of_persons_killed}
            notes={this.props.state.notes}
            handleChange={this.props.handleChange}
            flagAccident={this.props.flagAccident}
            closeForm={this.props.closeForm}
            handleSubmit={this.props.handleSubmit}
            updateNote={this.props.updateNote}
            confirmUpdate={true}
            handleUpdate={this.props.handleUpdate}
            stateIndex={this.props.state.stateIndex}
          />
        ) : (
          ""
        )}
        <div className="grid">
          {this.props.state.flagged.map((flagged, index) => {
            return (
              <Accident
                key={flagged.id}
                index={flagged.id}
                className="accident"
                latitude={flagged.latitude}
                longitude={flagged.longitude}
                date={flagged.date}
                id={flagged.id}
                contributing_factor_vehicle_1={flagged.contributing_factor_vehicle_1}
                on_street_name={flagged.on_street_name}
                number_of_persons_injured={flagged.number_of_persons_injured}
                number_of_persons_killed={flagged.number_of_persons_killed}
                notes={flagged.notes}
                removeFromFlag={this.props.removeFromFlag}
                updateNote={this.props.updateNote}
                handleChange={this.props.handleChange}
                confirmAccidentForUpdate={this.props.confirmAccidentForUpdate}
                confirmUpdate={true}
                flagged={this.props.state.flagged}
                handleUpdate={this.props.handleUpdate}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Flagged;
