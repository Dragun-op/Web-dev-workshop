import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Ledger from './pages/Ledger';
import AddTransaction from './pages/AddTransaction';
import Reports from './pages/Reports';
import { useLocalStorage } from './hooks/useLocalStorage';
import './styles.css';

/**
 * Main App Component
 * 
 * Root component of the Gringotts Ledger application.
 * Manages the global state for transactions and provides routing between pages.
 * 
 * Architecture:
 * - Uses React Router for client-side routing (SPA - Single Page Application)
 * - Manages transactions state with custom useLocalStorage hook
 * - Provides transaction management functions to child components via props
 * - Maintains consistent navigation across all pages
 * 
 * State Management:
 * - transactions: Array of all transaction objects stored in localStorage
 * - Automatically persists to localStorage on every state change
 * 
 * Routes:
 * - / : Main ledger page showing balance and transaction history
 * - /add : Add new transaction form page
 * - /reports : Vault analytics and reports page
 * 
 * @returns {JSX.Element} The main application component
 */
function App() {
  // Initialize transactions from localStorage with empty array as default
  // This is the single source of truth for all transactions
  const [transactions, setTransactions] = useLocalStorage('ledger', []);

  /**
   * Adds a new transaction to the ledger
   * Appends the transaction to the existing array and persists to localStorage
   * 
   * @param {Object} transaction - The transaction object to add
   * @param {number} transaction.id - Unique identifier (timestamp)
   * @param {string} transaction.desc - Description of the transaction
   * @param {number} transaction.amount - Amount in Galleons
   * @param {string} transaction.type - Either 'income' or 'expense'
   */
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  /**
   * Removes a transaction from the ledger by its ID
   * Filters out the transaction and updates localStorage
   * 
   * @param {number} id - The unique ID of the transaction to remove
   */
  const removeTransaction = (id) => {
    setTransactions(transactions.filter(tx => tx.id !== id));
  };

  return (
    <Router>
      {/* Navigation bar appears on all pages */}
      <Navigation />
      
      {/* Define application routes */}
      <Routes>
        {/* Main Ledger Page - Shows balance and transaction history */}
        <Route 
          path="/" 
          element={
            <Ledger 
              transactions={transactions} 
              removeTransaction={removeTransaction} 
            />
          } 
        />
        
        {/* Add Transaction Page - Form to create new transactions */}
        <Route 
          path="/add" 
          element={
            <AddTransaction 
              addTransaction={addTransaction} 
            />
          } 
        />
        
        {/* Reports Page - Vault analytics with transaction data */}
        <Route 
          path="/reports" 
          element={
            <Reports 
              transactions={transactions}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
