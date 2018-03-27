import React, { Component } from "react";

class AccidentForm extends Component {
  state = {};
  handleSubmit = event => {
    event.preventDefault();
    const newAccident = {
      date: this.props.date,
      time: this.props.time,
      borough: this.props.borough,
      zip_code: this.props.zip_code,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      notes: this.props.notes
    };
    this.props.flagAccident(newAccident);
  };

  render() {
    return (
      <div className="form">
        <form>
          <button onClick={() => this.props.closeForm}>
            <i className="fas fa-window-close" />
          </button>
          <label htmlFor="date">Date </label>
          <input name="date" type="text" value={this.props.date} />
          <label htmlFor="time">time</label>
          <input name="time" type="text" value={this.props.time} />
          <label htmlFor="borough">Borough</label>
          <input name="borough" type="text" value={this.props.borough} />
          <label htmlFor="zip_code">Zip Code: </label>
          <input name="zip_code" type="text" value={this.props.zip_code} />
          <label htmlFor="latitude">Latitude: </label>
          <input name="latitude" type="text" value={this.props.latitude} />
          <label htmlFor="longitude">Longitude: </label>
          <input name="longitude" type="text" value={this.props.longitude} />
          <label htmlFor="day">Note:</label>
          <textarea name="notes" type="textarea" onChange={this.props.handleChange} />
          <input type="submit" value="Save" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default AccidentForm;
