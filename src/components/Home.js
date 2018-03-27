import React, { Component } from "react";
import Accident from "./Accident";
import AccidentForm from "./AccidentForm";
import PaginationController from "./Pagination";
import Header from "./Header";
import Navigation from "./NavBar";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      currentPage: 1,
      itemsPerPage: 9,
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
  handlePageChange = event => {
    if (event.target.value === "next") {
      this.setState({ currentPage: this.state.currentPage + 1 });
    } else if (event.target.value === "last") {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };
  jumpPagination = value => {
    this.setState({
      currentPage: value
    });
  };
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
  closeForm = () => {
    this.setState({
      form: false
    });
  };

  render() {
    const lastIndex = this.state.currentPage * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;
    const currentAccidents = this.props.accidents.slice(firstIndex, lastIndex);
    return (
      <div>
        <Header />
        <Navigation />
        {/* <PaginationExampleCustomization /> */}
        {this.state.form ? (
          <AccidentForm
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
            closeForm={this.closeForm}
          />
        ) : (
          ""
        )}
        <div className="grid">
          {currentAccidents.map((response, index) => {
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
        <PaginationController
          handlePageChange={this.handlePageChange}
          jumpPagination={this.jumpPagination}
          currentPage={this.state.currentPage}
          itemsPerPage={this.state.itemsPerPage}
          accidents={this.props.accidents}
        />
      </div>
    );
  }
}

export default HomeComponent;
