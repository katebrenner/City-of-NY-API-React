import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Flagged from "./components/Flagged";
import Map from "./components/Map";
import "./App.css";

class App extends Component {
  state = {
    accidents: [],
    flagged: []
  };

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
    console.log(this.state.flagged);
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
    } catch (error) {
      console.log("Error posting an accident");
      console.log(error);
    }
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

  // updateFood = async index => {
  //   try {
  //     const foodToUpate = this.state.foods[index];
  //     await axios.patch(`/foods/${foodToUpate.id}`, foodToUpate);
  //   } catch (error) {
  //     console.log("Error updating food!");
  //     console.log(error);
  //   }
  render() {
    const HomeComponent = () => <Home accidents={this.state.accidents} flagAccident={this.flagAccident} />;
    const FlaggedItems = () => <Flagged Flagged={this.state.flagged} removeFromFlag={this.removeFromFlag} />;
    const MapComponent = () => <Map />;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/Flagged" render={FlaggedItems} />
          <Route exact path="/Map" render={MapComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
