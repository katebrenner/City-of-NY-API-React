import React, { Component } from "react";
import Accident from "./Accident";
import Form from "./Form";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      date: "",
      time: "",
      borough: "",
      zip_code: "",
      latitude: "",
      longitude: "",
      notes: ""
    };
    this.confirmAccident = this.confirmAccident.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  confirmAccident = object => {
    this.setState({
      form: true,
      date: object.date,
      time: object.time,
      borough: object.borough,
      zip_code: object.zip_code,
      latitude: object.latitude,
      longitude: object.longitude
    });
  };

  handleChange = event => {
    this.setState({
      notes: event.target.value
    });
    console.log(this.state.notes);
  };

  render() {
    return (
      <div>
        Home component
        <Link to="/Flagged">Flagged Items</Link>
        {this.state.date ? (
          <Form
            className="form"
            date={this.state.date}
            time={this.state.time}
            borough={this.state.time}
            zip_code={this.state.zip_code}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            notes={this.state.notes}
            handleChange={this.handleChange}
            flagAccident={this.props.flagAccident}
          />
        ) : (
          ""
        )}
        <div className="grid">
          {this.props.accidents.map((response, index) => {
            return (
              <Accident
                key={index}
                index={index}
                className="accident"
                latitude={response.latitude}
                longitude={response.longitude}
                date={response.date}
                contributing_factor_vehicle_1={response.contributing_factor_vehicle_1}
                on_street_name={response.on_street_name}
                confirmAccident={this.confirmAccident}
                accidents={this.props.accidents}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomeComponent;
