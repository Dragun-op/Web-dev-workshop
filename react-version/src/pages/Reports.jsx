import React from 'react';
import Footer from '../components/Footer';

/**
 * Reports Page Component (reports.html equivalent)
 * 
 * Displays comprehensive vault analytics based on transaction data.
 * Provides insights into spending patterns, income sources, and financial health.
 * 
 * Features:
 * - Financial summary with total income, expenses, and net balance
 * - Transaction statistics (count, averages)
 * - Spending vs Income comparison
 * - Largest transactions tracking
 * - All analytics calculated in real-time from transaction data
 * 
 * @param {Object} props - Component props
 * @param {Array} props.transactions - Array of all transaction objects
 * @returns {JSX.Element} The reports page component
 */
const Reports = ({ transactions = [] }) => {
  /**
   * Calculate comprehensive analytics from transactions
   */
  const calculateAnalytics = () => {
    const income = transactions.filter(t => t.type === 'income');
    const expenses = transactions.filter(t => t.type === 'expense');
    
    const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);
    const netBalance = totalIncome - totalExpenses;
    
    const avgIncome = income.length > 0 ? totalIncome / income.length : 0;
    const avgExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;
    
    const largestIncome = income.length > 0 
      ? income.reduce((max, t) => t.amount > max.amount ? t : max, income[0])
      : null;
    
    const largestExpense = expenses.length > 0
      ? expenses.reduce((max, t) => t.amount > max.amount ? t : max, expenses[0])
      : null;
    
    return {
      totalIncome,
      totalExpenses,
      netBalance,
      incomeCount: income.length,
      expenseCount: expenses.length,
      totalCount: transactions.length,
      avgIncome,
      avgExpense,
      largestIncome,
      largestExpense,
      savingsRate: totalIncome > 0 ? ((netBalance / totalIncome) * 100) : 0
    };
  };

  const analytics = calculateAnalytics();

  return (
    <>
      <main>
        {/* Vault Analytics Section */}
        <section id="analytics" className="glass-card fade-in">
          <h2>📈 Vault Analytics</h2>
          
          {transactions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.7 }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</p>
              <p>No transaction data available yet.</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Start adding transactions to see your vault analytics!
              </p>
            </div>
          ) : (
            <>
              {/* Financial Summary */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#b1e0f0', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  💰 Financial Summary
                </h3>
                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-value" style={{ color: '#82e27c' }}>
                      +{analytics.totalIncome.toFixed(2)}
                    </span>
                    <span className="stat-label">Total Income 📈</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value" style={{ color: '#ff7b7b' }}>
                      -{analytics.totalExpenses.toFixed(2)}
                    </span>
                    <span className="stat-label">Total Expenses 📉</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value" style={{ color: analytics.netBalance >= 0 ? '#82e27c' : '#ff7b7b' }}>
                      {analytics.netBalance >= 0 ? '+' : ''}{analytics.netBalance.toFixed(2)}
                    </span>
                    <span className="stat-label">Net Balance 💼</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value" style={{ color: analytics.savingsRate >= 0 ? '#82e27c' : '#ff7b7b' }}>
                      {analytics.savingsRate.toFixed(1)}%
                    </span>
                    <span className="stat-label">Savings Rate 🎯</span>
                  </div>
                </div>
              </div>

              {/* Transaction Statistics */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#b1e0f0', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  📊 Transaction Statistics
                </h3>
                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-value">
                      {analytics.totalCount}
                    </span>
                    <span className="stat-label">Total Transactions 📜</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value" style={{ color: '#82e27c' }}>
                      {analytics.incomeCount}
                    </span>
                    <span className="stat-label">Income Entries 💰</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value" style={{ color: '#ff7b7b' }}>
                      {analytics.expenseCount}
                    </span>
                    <span className="stat-label">Expense Entries 💸</span>
                  </div>
                </div>
              </div>

              {/* Averages */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#b1e0f0', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  📐 Average Transactions
                </h3>
                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-value" style={{ color: '#82e27c' }}>
                      {analytics.avgIncome.toFixed(2)}
                    </span>
                    <span className="stat-label">Avg Income per Entry �</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value" style={{ color: '#ff7b7b' }}>
                      {analytics.avgExpense.toFixed(2)}
                    </span>
                    <span className="stat-label">Avg Expense per Entry 📊</span>
                  </div>
                </div>
              </div>

              {/* Largest Transactions */}
              <div>
                <h3 style={{ color: '#b1e0f0', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  🏆 Notable Transactions
                </h3>
                <div className="stats-grid">
                  {analytics.largestIncome && (
                    <div className="stat-card" style={{ textAlign: 'left' }}>
                      <span style={{ display: 'block', fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.5rem' }}>
                        Largest Income 🥇
                      </span>
                      <span className="stat-value" style={{ color: '#82e27c', fontSize: '1.5rem' }}>
                        +{analytics.largestIncome.amount.toFixed(2)} G
                      </span>
                      <span style={{ display: 'block', fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
                        {analytics.largestIncome.desc}
                      </span>
                    </div>
                  )}
                  {analytics.largestExpense && (
                    <div className="stat-card" style={{ textAlign: 'left' }}>
                      <span style={{ display: 'block', fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.5rem' }}>
                        Largest Expense 🥈
                      </span>
                      <span className="stat-value" style={{ color: '#ff7b7b', fontSize: '1.5rem' }}>
                        -{analytics.largestExpense.amount.toFixed(2)} G
                      </span>
                      <span style={{ display: 'block', fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
                        {analytics.largestExpense.desc}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </section>
      </main>

      {/* Footer with themed message */}
      <Footer message="Secrets revealed. 📜" />
    </>
  );
};

export default Reports;
