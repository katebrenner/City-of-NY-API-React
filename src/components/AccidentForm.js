import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AccidentForm extends Component {
  state = {
    redirect: true
  };

  handleSubmit = event => {
    event.preventDefault();
    const newAccident = {
      date: this.props.date,
      time: this.props.time,
      borough: this.props.borough,
      zip_code: this.props.zip_code,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      number_of_persons_injured: this.props.number_of_persons_injured,
      number_of_persons_killed: this.props.number_of_persons_killed,
      notes: this.props.notes
    };
    this.props.flagAccident(newAccident);
  };

  render() {
    console.log("injury:", this.props.injuryNo);
    console.log("death:", this.props.number_of_persons_killed);
    return (
      <div className="form">
        <form>
          <button onClick={() => this.props.closeForm}>
            <i className="fas fa-window-close" />
          </button>
          <input className="inline-block hidden" name="date" type="text" defaultValue={this.props.date} />
          <input className="inline-block hidden" name="time" type="text" defaultValue={this.props.time} />
          <input className="inline-block hidden" name="borough" type="text" defaultValue={this.props.borough} />
          <input className="inline-block hidden" name="zip_code" type="text" defaultValue={this.props.zip_code} />
          <input className="inline-block hidden" name="latitude" type="text" defaultValue={this.props.latitude} />
          <input className="inline-block hidden" name="longitude" type="text" defaultValue={this.props.longitude} />
          <input
            className="inline-block hidden"
            name="number_of_persons_injured"
            type="text"
            defaultValue={this.props.number_of_persons_injured}
          />
          <input
            className="inline-block hidden"
            name="number_of_persons_killed"
            type="text"
            defaultValue={this.props.number_of_persons_killed}
          />
          <label className="inline-block" htmlFor="notes">
            Add Notes:
          </label>
          <textarea className="inline-block textarea" name="notes" type="textarea" onChange={this.props.handleChange} />
          <input type="submit" value="Save" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default AccidentForm;
