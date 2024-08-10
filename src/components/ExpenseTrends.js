import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function ExpenseTrends({ expenses }) {
  const data = expenses.reduce((acc, expense) => {
    const existing = acc.find((item) => item.category === expense.category);
    if (existing) {
      existing.amount += expense.amount;
    } else {
      acc.push({ category: expense.category, amount: expense.amount });
    }
    return acc;
  }, []);

  return (
    <div>
      <h2>Expense Trends</h2>
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ExpenseTrends;
