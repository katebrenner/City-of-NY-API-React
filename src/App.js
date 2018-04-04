import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Flagged from "./components/Flagged";
import Map from "./components/Map";
import Stats from "./components/Stats";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Redirect: false,
      accidents: [],
      flagged: [],
      form: false,
      currentPage: 1,
      itemsPerPage: 9,
      id: "",
      date: "",
      time: "",
      borough: "",
      zip_code: "",
      latitude: "",
      longitude: "",
      number_of_persons_injured: "",
      number_of_persons_killed: "",
      notes: "",
      year: 2017
    };
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleYearChange(e) {
    this.setState({ year: e.target.value });
  }

  async componentDidMount() {
    try {
      const response = await axios.get("https://data.cityofnewyork.us/resource/qiz3-axqb.json");
      this.setState({ accidents: response.data });
      console.log(response.data);
    } catch (error) {
      console.log("Error retrieving NYC data!");
      console.log(error);
    }
    try {
      const response = await axios.get("/accidents");
      this.setState({
        flagged: response.data
      });
    } catch (error) {
      console.log("Error retrieving flagged accidents!");
      console.log(error);
    }
  }

  flagAccident = async (newAccident, index) => {
    try {
      console.log("inside flagAccident");
      const newFlaggedResponse = await axios.post("/accidents", newAccident);
      const updatedFlaggedList = [...this.state.flagged];
      updatedFlaggedList.push(newFlaggedResponse.data);
      this.setState({ flagged: updatedFlaggedList });
      console.log("Newaccident", newAccident);
      console.log("updatedFlaggedList", updatedFlaggedList);
      this.setState({ redirect: true });
    } catch (error) {
      console.log("Error posting an accident");
      console.log(error);
    }
    this.setState({ redirect: false, form: false });
  };

  removeFromFlag = async (accidentId, index) => {
    try {
      await axios.delete(`/accidents/${accidentId}`);
      const updatedFlagList = [...this.state.flagged];
      updatedFlagList.splice(index, 1);
      this.setState({ flagged: updatedFlagList });
    } catch (error) {
      console.log(`Error removing accident with ID of ${accidentId}`);
      console.log(error);
    }
  };

  updateNote = async (newAccident, id) => {
    try {
      await axios.patch(`/accidents/${id}`, newAccident);
      console.log("after .patch statement");
    } catch (error) {
      console.log("Error updating item!");
      console.log(error);
    }
  };

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
      longitude: object.longitude,
      number_of_persons_injured: object.number_of_persons_injured,
      number_of_persons_killed: object.number_of_persons_killed
    });
    console.log("inside flag accdient" + object.date);
  };

  confirmAccidentForUpdate = object => {
    this.setState({
      form: true,
      id: object.id,
      date: object.date,
      time: object.time,
      borough: object.borough,
      zip_code: object.zip_code,
      latitude: object.latitude,
      longitude: object.longitude,
      number_of_persons_injured: object.number_of_persons_injured,
      number_of_persons_killed: object.number_of_persons_killed
    });
    console.log(object.id);
  };

  handleChange = event => {
    this.setState({
      notes: event.target.value
    });
    console.log(this.state.notes);
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("inside handlesubmit");
    const newAccident = {
      id: this.state.id,
      date: this.state.date,
      time: this.state.time,
      borough: this.state.borough,
      zip_code: this.state.zip_code,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      number_of_persons_injured: this.state.number_of_persons_injured,
      number_of_persons_killed: this.state.number_of_persons_killed,
      notes: this.state.notes
    };
    this.flagAccident(newAccident);
  };

  handleUpdate = event => {
    event.preventDefault();
    console.log("inside handleUpdate");
    const newAccident = {
      id: this.state.id,
      date: this.state.date,
      time: this.state.time,
      borough: this.state.borough,
      zip_code: this.state.zip_code,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      number_of_persons_injured: this.state.number_of_persons_injured,
      number_of_persons_killed: this.state.number_of_persons_killed,
      notes: this.state.notes
    };
    this.updateNote(newAccident, this.state.id);
    this.closeForm();
  };
  closeForm = () => {
    this.setState({
      form: false
    });
  };
  changeRedirect = () => {
    this.setState({ redirect: false });
  };
  render() {
    const HomeComponent = () => (
      <Home
        state={this.state}
        flagAccident={this.flagAccident}
        confirmAccident={this.confirmAccident}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        currentPage={this.state.currentPage}
        itemsPerPage={this.state.itemsPerPage}
        jumpPagination={this.jumpPagination}
        handlePageChange={this.handlePageChange}
      />
    );
    const FlaggedItems = () => (
      <Flagged
        state={this.state}
        removeFromFlag={this.removeFromFlag}
        updateNote={this.updateNote}
        handleChange={this.handleChange}
        confirmAccidentForUpdate={this.confirmAccidentForUpdate}
        handleUpdate={this.handleUpdate}
        changeRedirect={this.changeRedirect}
      />
    );
    const statsPage = () => <Stats handleYearChange={this.handleYearChange} year={this.state.year} />;
    const MapComponent = () => <Map accidents={this.state.accidents} />;
    return (
      <Router>
        <div>
          {!this.state.redirect ? (
            <Switch>
              <Route exact path="/" render={HomeComponent} />
              <Route exact path="/Flagged" render={FlaggedItems} />
              <Route exact path="/Map" render={MapComponent} />
              <Route exact path="/Stats" render={statsPage} />
            </Switch>
          ) : (
            <Redirect exact to={{ pathname: "/Flagged" }} render={FlaggedItems} />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
