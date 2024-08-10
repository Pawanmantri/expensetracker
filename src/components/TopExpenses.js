import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { category: 'Rent', amount: 500 },
  { category: 'Car Payment', amount: 300 },
  { category: 'Grocery', amount: 200 },
];

function TopExpenses() {
  return (
    <BarChart
      width={300}
      height={200}
      data={data}
      layout="vertical"
      margin={{ top:2, right: 30, bottom: 5, left: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="category" type="category" width={150} />
      <Tooltip />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
}

export default TopExpenses;
