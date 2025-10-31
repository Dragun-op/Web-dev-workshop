import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import Toast from '../components/Toast';

/**
 * Ledger Page Component (Main Page / index.html equivalent)
 * 
 * Enhanced with:
 * - Loading states with magical animations
 * - Vault statistics cards (total income, expenses, transaction count)
 * - Toast notifications for user actions
 * - Enhanced transaction display with badges
 * - Balance status indicators with emojis
 * 
 * Displays the main vault overview with:
 * - Current balance with thematic messages based on balance amount
 * - Complete transaction history from localStorage
 * - Individual transaction items with remove functionality
 * 
 * Features:
 * - Real-time balance calculation from all transactions
 * - Income (deposits) shown in green with + prefix
 * - Expenses (withdrawals) shown in red with - prefix
 * - Thematic balance messages (e.g., "Richer than a Malfoy!" for high balances)
 * - "Expelliarmus" button to remove transactions
 * - Fade-in animations for visual appeal
 * 
 * @param {Object} props - Component props
 * @param {Array} props.transactions - Array of all transaction objects
 * @param {Function} props.removeTransaction - Function to remove a transaction by ID
 * @returns {JSX.Element} The ledger page component
 */
const Ledger = ({ transactions, removeTransaction }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Simulate goblin calculation delay for magical effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [transactions]);

  /**
   * Calculates the current vault balance
   * Income transactions add to balance, expense transactions subtract
   * 
   * @returns {number} The current balance in Galleons
   */
  const calculateBalance = () => {
    return transactions.reduce((balance, tx) => {
      return balance + (tx.type === 'income' ? tx.amount : -tx.amount);
    }, 0);
  };

  /**
   * Generates a thematic message based on the current balance
   * Adds personality and fun to the financial tracking experience
   * 
   * @param {number} balance - The current balance amount
   * @returns {string} A themed message about the balance state
   */
  const getBalanceMessage = (balance) => {
    if (balance < 0) {
      return ' — Dementors are circling your vault!';
    } else if (balance > 1000) {
      return ' — Richer than a Malfoy!';
    } else if (balance > 500) {
      return ' — Gringotts goblins are pleased.';
    }
    return '';
  };

  /**
   * Calculate vault statistics
   */
  const stats = {
    totalIncome: transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0),
    totalExpenses: transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0),
    transactionCount: transactions.length
  };

  /**
   * Get balance status class and message
   */
  const getBalanceStatus = () => {
    if (balance > 1000) return { class: 'balance-positive', message: ' — Vault overflowing! 💰✨' };
    if (balance > 0) return { class: 'balance-positive', message: ' — Vault secured! 🏦' };
    if (balance === 0) return { class: '', message: ' — Vault empty! 🕳️' };
    return { class: 'balance-negative', message: ' — Vault in debt! ⚠️' };
  };

  /**
   * Handle transaction deletion with toast notification
   */
  const handleDelete = (id) => {
    removeTransaction(id);
    setToast({ message: 'Transaction banished! ⚡', type: 'success' });
  };

  const balance = calculateBalance();
  const balanceMessage = getBalanceMessage(balance);
  const balanceStatus = getBalanceStatus();

  return (
    <>
      <main>
        {/* Balance Display Section with Loading State */}
        <section id="balance" className="glass-card fade-in">
          <h2>🏦 Current Vault Balance</h2>
          {isLoading ? (
            <LoadingSpinner message="Consulting the goblins..." />
          ) : (
            <>
              <p id="balance-value" className={balanceStatus.class}>
                {balance.toFixed(2)} Galleons
              </p>
              <p style={{ fontSize: '1rem', opacity: 0.8, marginTop: '0.5rem' }}>
                {balanceStatus.message}
              </p>
            </>
          )}
        </section>

        {/* Vault Statistics Cards */}
        {!isLoading && transactions.length > 0 && (
          <section className="glass-card fade-in" style={{ animationDelay: '0.1s' }}>
            <h2>📊 Vault Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-value" style={{ color: '#82e27c' }}>
                  +{stats.totalIncome.toFixed(2)}
                </span>
                <span className="stat-label">Total Deposits 💰</span>
              </div>
              <div className="stat-card">
                <span className="stat-value" style={{ color: '#ff7b7b' }}>
                  -{stats.totalExpenses.toFixed(2)}
                </span>
                <span className="stat-label">Total Withdrawals 💸</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">
                  {stats.transactionCount}
                </span>
                <span className="stat-label">Transactions 📜</span>
              </div>
            </div>
          </section>
        )}

        {/* Transaction History Section */}
        <section 
          id="transactions" 
          className="glass-card fade-in" 
          style={{ animationDelay: '0.2s' }}
        >
          <h2>📜 Transaction History</h2>
          {transactions.length === 0 ? (
            <div className="empty-vault">
              <p>No transactions yet. Your vault awaits its first entry!</p>
            </div>
          ) : (
            <ul id="transaction-list">
              {transactions.map((tx) => (
                <li key={tx.id} className={`transaction-item ${tx.type}`}>
                  {/* Transaction Description with Badge */}
                  <span>
                    {tx.desc}
                    <span className={`transaction-badge ${tx.type}`}>
                      {tx.type === 'income' ? '📈 Deposit' : '📉 Withdrawal'}
                    </span>
                  </span>
                  
                  {/* Transaction Amount with +/- prefix */}
                  <span>
                    {tx.type === 'income' ? '+' : '-'}
                    {tx.amount.toFixed(2)} G
                    
                    {/* Expelliarmus (Remove) Button */}
                    <button onClick={() => handleDelete(tx.id)} title="Cast Expelliarmus">
                      Expelliarmus
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      {/* Footer with themed message */}
      <Footer message="I solemnly swear that I am up to no good. 👣" />

      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default Ledger;
