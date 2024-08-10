import React, { useState } from 'react';

function WalletBalance() {
  const [balance, setBalance] = useState(1000); // Initial balance

  const handleAddBalance = () => {
    const amount = prompt('Enter amount to add:');
    if (amount && !isNaN(amount)) {
      setBalance(prevBalance => prevBalance + parseFloat(amount));
    }
  };

  return (
    <div className="wallet-balance">
      <h2>Wallet Balance</h2>
      <p>${balance.toFixed(2)}</p>
      <button onClick={handleAddBalance}>Add Balance</button>
    </div>
  );
}

export default WalletBalance;
