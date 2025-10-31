import React, { useEffect } from 'react';
import Footer from '../components/Footer';

/**
 * Ledger Page Component (Main Page / index.html equivalent)
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

  const balance = calculateBalance();
  const balanceMessage = getBalanceMessage(balance);

  return (
    <>
      <main>
        {/* Balance Display Section */}
        <section id="balance" className="glass-card fade-in">
          <h2>🏦 Current Vault Balance</h2>
          <p id="balance-value">
            {balance.toFixed(2)} Galleons{balanceMessage}
          </p>
        </section>

        {/* Transaction History Section */}
        <section 
          id="transactions" 
          className="glass-card fade-in" 
          style={{ animationDelay: '0.2s' }}
        >
          <h2>📜 Transaction History</h2>
          <ul id="transaction-list">
            {transactions.length === 0 ? (
              <li style={{ textAlign: 'center', padding: '20px', opacity: 0.7 }}>
                No transactions yet. Visit the vault to add your first entry!
              </li>
            ) : (
              transactions.map((tx) => (
                <li key={tx.id} className={`transaction-item ${tx.type}`}>
                  {/* Transaction Description */}
                  <span>{tx.desc}</span>
                  
                  {/* Transaction Amount with +/- prefix */}
                  <span>
                    {tx.type === 'income' ? '+' : '-'}
                    {tx.amount} G
                  </span>
                  
                  {/* Expelliarmus (Remove) Button */}
                  <button onClick={() => removeTransaction(tx.id)}>
                    Expelliarmus
                  </button>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>

      {/* Footer with themed message */}
      <Footer message="I solemnly swear that I am up to no good. 👣" />
    </>
  );
};

export default Ledger;
