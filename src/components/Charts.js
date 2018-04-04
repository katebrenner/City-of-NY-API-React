import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

class Charts extends Component {
  render() {
    // const data = [
    //   { name: "Page A", uv: 4000 },
    //   { name: "Page B", uv: 3000 },
    //   { name: "Page C", uv: 2000 },
    //   { name: "Page D", uv: 2780 },
    //   { name: "Page E", uv: 1890 },
    //   { name: "Page F", uv: 2390 },
    //   { name: "Page G", uv: 3490 }
    // ];

    const data = this.props.byTheBorough.map(data => {
      return { name: data.borough, count: parseInt(data.count) };
    });
    console.log(data);
    return (
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    );
  }
}

export default Charts;
