import '../styles/chart.css'
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";



export default function Chart({data}) {
  return (
    <div id="chart" style={{ width: "100%", height: 500,display:'flex',justifyContent:"center",alignItems:"center" }}>
      <ResponsiveContainer >
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Bmi" stroke="#000278" fill="blue" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
