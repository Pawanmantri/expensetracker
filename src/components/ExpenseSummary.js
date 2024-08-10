import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

function ExpenseSummary({ expenses }) {
  const categories = [...new Set(expenses.map((expense) => expense.category))];
  const data = categories.map((category) => ({
    name: category,
    value: expenses
      .filter((expense) => expense.category === category)
      .reduce((acc, expense) => acc + expense.amount, 0),
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div>
      <h2>Expense Summary</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default ExpenseSummary;
