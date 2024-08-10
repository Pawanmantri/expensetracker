import React, { useState } from 'react';

function AddExpenseForm({ addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && category && date) {
      const newExpense = {
        id: Date.now(),
        title,
        amount: parseFloat(amount),
        category,
        date,
      };
      addExpense(newExpense);
      setTitle('');
      setAmount('');
      setCategory('');
      setDate('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
