import React, { Component } from "react";
import Accident from "./Accident";
import AccidentForm from "./AccidentForm";
import PaginationController from "./Pagination";
import Header from "./Header";
import Navigation from "./NavBar";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lastIndex = this.props.state.currentPage * this.props.state.itemsPerPage;
    const firstIndex = lastIndex - this.props.state.itemsPerPage;
    const currentAccidents = this.props.state.accidents.slice(firstIndex, lastIndex);
    const backGround = this.props.form ? "blur" : "nonblur";
    return (
      <div className={backGround}>
        <Header />
        <Navigation />
        {/* <PaginationExampleCustomization /> */}
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
          />
        ) : (
          ""
        )}
        <div className="homeGrid">
          {currentAccidents.map((response, index) => {
            return (
              <Accident
                key={index}
                index={index}
                className="accident"
                latitude={response.latitude}
                longitude={response.longitude}
                date={response.date}
                number_of_persons_injured={response.number_of_persons_injured}
                number_of_persons_killed={response.number_of_persons_killed}
                contributing_factor_vehicle_1={response.contributing_factor_vehicle_1}
                on_street_name={response.on_street_name}
                confirmAccident={this.props.confirmAccident}
                accidents={this.props.state.accidents}
                showform={this.props.showform}
              />
            );
          })}
        </div>
        <div className="space" />
        <PaginationController
          handlePageChange={this.props.handlePageChange}
          jumpPagination={this.props.jumpPagination}
          currentPage={this.props.state.currentPage}
          itemsPerPage={this.props.state.itemsPerPage}
          accidents={this.props.state.accidents}
        />
      </div>
    );
  }
}

export default HomeComponent;
