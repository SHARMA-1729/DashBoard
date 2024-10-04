// LineChartComponent.js
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const data = [
  { date: 'Apr 24', earnings: 0 },
  { date: 'May 24', earnings: 0 },
  { date: 'Jun 24', earnings: 0.18 },
  { date: 'Jul 24', earnings: 0.22 },
  { date: 'Aug 24', earnings: 0.21 },
  { date: 'Sep 24', earnings: 0 }
];

const LineChartComponent = () => {
  return (
    <div className="line-chart-container">
      <h4>Earning over time (USD)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorEarnings)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
