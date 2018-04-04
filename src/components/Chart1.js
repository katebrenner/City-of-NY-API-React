import React, { Component } from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

class Chart1 extends Component {
  state = {};
  render() {
    const data = this.props.byTheMonth.map(data => {
      return {
        name: data.month
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
          .replace("9", "Sept"),
        count: parseInt(data.count, 10)
      };
    });
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="count" stroke="#a4bfe4 " />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart1;
