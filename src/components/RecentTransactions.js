import React from 'react';

function RecentTransactions() {
  const transactions = [
    { id: 1, name: 'Grocery', amount: '$50' },
    { id: 2, name: 'Electricity', amount: '$70' },
    { id: 3, name: 'Rent', amount: '$500' },
  ];

  return (
    <div>
      {transactions.map(transaction => (
        <div key={transaction.id}>
          <p>{transaction.name}: {transaction.amount}</p>
        </div>
      ))}
      {/* Add carousel component for more transactions */}
    </div>
  );
}

export default RecentTransactions;
