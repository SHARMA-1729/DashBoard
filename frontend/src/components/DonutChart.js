// DonutChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './donutChart.css';
const DonutChart = ({ label, data, color }) => {
  return (
    <div className="donut-chart">
      <h4>{label}</h4>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="70%"
            outerRadius="90%"
            fill={color}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="donut-chart-label">
        <p>${data.reduce((acc, item) => acc + item.value, 0).toFixed(3)}</p>
      </div>
    </div>
  );
};

export default DonutChart;
