// Dashboard.js
import React from 'react';
import DonutChart from './DonutChart';
import './Dashboard.css';
const Dashboard = () => {
  const storeData = [
    { name: 'Store1', value: 0.2, color: '#8884d8' },
    { name: 'Store2', value: 0.213, color: '#82ca9d' },
  ];

  const countryData = [
    { name: 'Country1', value: 0.1, color: '#8884d8' },
    { name: 'Country2', value: 0.313, color: '#00C49F' },
  ];

  return (
    <div className="dashboard">
      <div className="chart-container">
        <DonutChart label="Stores" data={storeData} color="#8884d8" />
        <DonutChart label="Country" data={countryData} color="#00C49F" />
      </div>
    </div>
  );
};

export default Dashboard;
