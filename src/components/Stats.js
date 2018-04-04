import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import axios from "axios";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAccidents: "",
      totalInjuries: "",
      totalFatalities: "",
      byTheMonth: [],
      byTheBorough: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=sum(number_of_persons_injured) WHERE date_extract_y(date) = ${
          this.props.year
        }`
      );
      this.setState({ totalInjuries: response.data[0].sum_number_of_persons_injured });
      console.log(response.data[0].sum_number_of_persons_injured);
    } catch (error) {
      console.log("Error retrieving NYC data!");
      console.log(error);
    }
    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=sum(number_of_persons_killed) WHERE date_extract_y(date) = ${
          this.props.year
        }`
      );
      this.setState({ totalFatalities: response.data[0].sum_number_of_persons_killed });
      console.log(response.data[0].sum_number_of_persons_killed);
    } catch (error) {
      console.log("Error retrieving NYC data!");
      console.log(error);
    }

    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=count(*) WHERE date_extract_y(date) = ${
          this.props.year
        }`
      );
      this.setState({ totalAccidents: response.data[0].count });
      console.log(response.data[0].count);
    } catch (error) {
      console.log("Error retrieving NYC data!");
      console.log(error);
    }

    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=date_extract_m(date) as month, count(*) WHERE date_extract_y(date) = ${
          this.props.year
        }&$group=month`
      );
      this.setState({ byTheMonth: response.data });
      console.log(response.data);
    } catch (error) {
      console.log("Error retrieving NYC data!");
      console.log(error);
    }
  }

  async componentWillReceiveProps() {
    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=sum(number_of_persons_injured) WHERE date_extract_y(date) = ${
          this.props.year
        }`
      );
      this.setState({ totalInjuries: response.data[0].sum_number_of_persons_injured });
    } catch (error) {
      console.log("Error retrieving data!");
      console.log(error);
    }
    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=sum(number_of_persons_killed) WHERE date_extract_y(date) = ${
          this.props.year
        }`
      );
      this.setState({ totalFatalities: response.data[0].sum_number_of_persons_killed });
    } catch (error) {
      console.log("Error retrieving data!");
      console.log(error);
    }

    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=count(*) WHERE date_extract_y(date) = ${
          this.props.year
        }`
      );
      this.setState({ totalAccidents: response.data[0].count });
    } catch (error) {
      console.log("Error retrieving data!!");
      console.log(error);
    }

    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=date_extract_m(date) as month, count(*) WHERE date_extract_y(date) = ${
          this.props.year
        }&$group=month`
      );
      this.setState({ byTheMonth: response.data });
    } catch (error) {
      console.log("Error retrieving data!!");
      console.log(error);
    }
    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=borough, count(*) WHERE date_extract_y(date) = ${
          this.props.year
        }&$group=borough`
      );
      this.setState({ byTheBorough: response.data });
    } catch (error) {
      console.log("Error retrieving NYC data!");
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <h1>Collision Stats</h1>
        <h1> Select Year:</h1>
        <select id="years" onChange={this.props.handleYearChange}>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
        </select>
        <div className="statsGrid">
          <div className="box1">
            <h1>Total Number of Accidents in {this.props.year}</h1>
            <h1>{this.state.totalAccidents}</h1>
          </div>
          <div className="box2">
            <h1>Accidents by the month in {this.props.year}:</h1>
            {this.state.byTheMonth.map((data, index) => {
              return (
                <div key={index}>
                  <h3>
                    {" "}
                    {data.month
                      .replace("10", "Oct")
                      .replace("11", "Nov")
                      .replace("12", "Dec")
                      .replace("1", "Jan")
                      .replace("2", "Feb")
                      .replace("3", "Mar")
                      .replace("4", "April")
                      .replace("5", "May")
                      .replace("6", "June")
                      .replace("7", "July")
                      .replace("8", "Aug")
                      .replace("9", "Sept")}: {data.count}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="box3">
            <h1>Total Injuries in {this.props.year}</h1>
            <h1>{this.state.totalInjuries}</h1>
          </div>
          <div className="box4">
            <h1>Total Fatalities in {this.props.year}</h1>
            <h1>{this.state.totalFatalities}</h1>
          </div>
          <div className="box5">
            <h1>Accidents by the borough in {this.props.year}:</h1>
            {this.state.byTheBorough.map((data, index) => {
              console.log(data.borough);
              if (data.borough === undefined) {
                data.borough = "NOT SPECIFIED";
              }
              return (
                <div key={index}>
                  <h3>
                    {" "}
                    {data.borough}: {data.count}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="box6">{this.state.year}</div>
        </div>
      </div>
    );
  }
}

export default Stats;
