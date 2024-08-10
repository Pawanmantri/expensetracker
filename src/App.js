import React from 'react';
import WalletBalance from './components/WalletBalance';
import Expenses from './components/Expenses';
import CustomPieChart from './components/CustomPieChart';
import RecentTransactions from './components/RecentTransactions';
import TopExpenses from './components/TopExpenses';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="horizontal-section">
        <WalletBalance />
        <Expenses />
        <CustomPieChart />
      </div>
      <div className="vertical-sections">
        <div className="recent-transactions">
          <h2>Recent Transactions</h2>
          <RecentTransactions />
        </div>
        <div className="top-expenses">
          <h2>Top Expenses</h2>
          <TopExpenses />
        </div>
      </div>
    </div>
  );
}

export default App;
