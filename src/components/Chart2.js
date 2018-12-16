import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

class Chart2 extends Component {
  render() {
    const data = this.props.byTheBorough.map(data => {
      if (data.borough === undefined) {
        data.borough = 'Not Specified';
      }
      return { name: data.borough, count: parseInt(data.count, 10) };
    });
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={100} height={600} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Bar type="monotone" dataKey="count" fill="#a4bfe4 " />
          <CartesianGrid strokeDasharray=" 3" />
          <Tooltip />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart2;
