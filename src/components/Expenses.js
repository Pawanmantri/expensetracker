import React, { useState } from 'react';

function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Food', amount: 50 },
    { id: 2, category: 'Transport', amount: 20 }
  ]);

  const handleAddExpense = () => {
    const category = prompt('Enter expense category:');
    const amount = prompt('Enter expense amount:');
    if (category && amount && !isNaN(amount)) {
      setExpenses(prevExpenses => [
        ...prevExpenses,
        { id: prevExpenses.length + 1, category, amount: parseFloat(amount) }
      ]);
    }
  };

  return (
    <div className="expenses">
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.category}: ${expense.amount.toFixed(2)}</li>
        ))}
      </ul>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default Expenses;
