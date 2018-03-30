import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AccidentForm extends Component {
  state = {};

  render() {
    console.log("injury:", this.props.number_of_persons_injured);
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
          {this.props.updateFlagged ? (
            <input type="submit" value="update" onClick={this.props.updateNote(this.props.index)} />
          ) : (
            <input type="submit" value="Save" onClick={this.props.handleSubmit} />
          )}
        </form>
      </div>
    );
  }
}

export default AccidentForm;
