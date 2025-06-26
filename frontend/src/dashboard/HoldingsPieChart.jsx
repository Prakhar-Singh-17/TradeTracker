// src/components/HoldingsPieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HoldingsPieChart({ holdings }) {
  const labels = holdings.map(item => item.stock.symbol || item.stock.name);
  const data = holdings.map(item => item.stock.price * item.quantity);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#8AFFC1', '#C78BFF', '#FF9F40',
          '#00C49F', '#FF8042', '#FFBB28', '#4CAF50', '#2196F3', '#FFC107',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '100%', maxWidth: 400, margin: 'auto' }}>
      <Pie data={chartData} />
    </div>
  );
}
