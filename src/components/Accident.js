import React, { Component } from "react";
class Accident extends Component {
  state = {};
  render() {
    return (
      <div className="accident">
        <h1>{this.props.contributing_factor_vehicle_1}</h1>
        <p>{this.props.date}</p>
        <p>{this.props.on_street_name}</p>
        <p>{this.props.latitude}</p>
        <p>{this.props.longitude}</p>
        <p>injuries: {this.props.number_of_persons_injured}</p>
        <p>fatilites: {this.props.number_of_persons_killed}</p>
        {this.props.notes ? (
          <input
            name="notes"
            onChange={event => this.props.handleChange}
            onBlur={() => this.props.updateFlagged(this.props.index)}
            defaultValue={this.props.notes}
          />
        ) : (
          ""
        )}

        {this.props.confirmUpdate ? (
          <div>
            <button onClick={() => this.props.removeFromFlag(this.props.id)}>delete</button>
            <button onClick={() => this.props.confirmAccident(this.props.flagged[this.props.index])}>
              udpate note
            </button>
          </div>
        ) : (
          <button onClick={() => this.props.confirmAccident(this.props.accidents[this.props.index])}>
            flag this accident
          </button>
        )}
      </div>
    );
  }
}

export default Accident;
