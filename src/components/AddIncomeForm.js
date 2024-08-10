import React, { useState } from 'react';

function AddIncomeForm({ addIncome }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      addIncome(parseFloat(amount));
      setAmount('');
    } else {
      alert('Please enter an amount.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Income</button>
    </form>
  );
}

export default AddIncomeForm;
