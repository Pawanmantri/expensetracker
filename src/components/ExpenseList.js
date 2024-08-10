import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

function ExpenseList({ expenses, editExpense, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - {expense.amount} - {expense.category} - {expense.date}
            <MdEdit onClick={() => editExpense(expense.id, expense)} />
            <MdDelete onClick={() => deleteExpense(expense.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
