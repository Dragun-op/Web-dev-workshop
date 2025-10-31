import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Toast from '../components/Toast';

/**
 * AddTransaction Page Component (add.html equivalent)
 * 
 * Enhanced with:
 * - Toast notifications for success/error feedback
 * - Improved form validation with helpful error messages
 * - Visual feedback on form submission
 * 
 * Provides a form interface for adding new transactions to the Gringotts ledger.
 * Supports both income (vault credits/deposits) and expenses (vault debits/withdrawals).
 * 
 * Features:
 * - Form validation to ensure valid description and positive amount
 * - Dropdown to select transaction type (income or expense)
 * - Automatic redirect to ledger page after successful submission
 * - Themed error messages for invalid inputs
 * - Fade-in animation for visual appeal
 * 
 * Form Fields:
 * - Description: Text input for transaction reason (e.g., "Potion Ingredients")
 * - Amount: Number input for Galleons amount (must be positive)
 * - Type: Select dropdown for income/expense classification
 * 
 * @param {Object} props - Component props
 * @param {Function} props.addTransaction - Function to add a new transaction
 * @returns {JSX.Element} The add transaction page component
 */
const AddTransaction = ({ addTransaction }) => {
  // Navigate hook for programmatic navigation after form submission
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // Form state management
  const [formData, setFormData] = useState({
    desc: '',
    amount: '',
    type: 'income' // Default to income
  });

  /**
   * Handles input changes for all form fields
   * Updates the corresponding field in formData state
   * 
   * @param {Event} e - The input change event
   */
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  /**
   * Handles select dropdown changes for transaction type
   * 
   * @param {Event} e - The select change event
   */
  const handleSelectChange = (e) => {
    setFormData(prev => ({
      ...prev,
      type: e.target.value
    }));
  };

  /**
   * Handles form submission
   * Validates input, creates transaction object, shows toast, and redirects to ledger
   * 
   * @param {Event} e - The form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim and parse input values
    const desc = formData.desc.trim();
    const amount = parseFloat(formData.amount.trim());
    const type = formData.type;

    // Validate inputs
    if (!desc || isNaN(amount) || amount <= 0) {
      setToast({ message: 'Mischief not managed! Please provide a valid description and amount.', type: 'error' });
      return;
    }

    // Create new transaction object with unique ID
    const transaction = {
      id: Date.now(), // Unique ID spell using timestamp
      desc,
      amount,
      type,
    };

    // Add transaction and show success message
    addTransaction(transaction);
    setToast({ message: `Transaction added successfully! ${type === 'income' ? '💰' : '💸'}`, type: 'success' });
    
    // Redirect after short delay to show toast
    setTimeout(() => {
      navigate('/'); // Redirect to main ledger page
    }, 1000);
  };

  return (
    <>
      <main>
        {/* Add Transaction Form Section */}
        <section id="add-transaction" className="glass-card fade-in">
          <h2>💰 Add New Transaction</h2>
          <form id="transaction-form" onSubmit={handleSubmit}>
            {/* Description Input */}
            <input
              type="text"
              id="desc"
              placeholder="Reason (e.g., Potion Ingredients)"
              value={formData.desc}
              onChange={handleInputChange}
              required
            />

            {/* Amount Input */}
            <input
              type="number"
              id="amount"
              placeholder="Amount in Galleons"
              value={formData.amount}
              onChange={handleInputChange}
              step="0.01"
              min="0.01"
              required
            />

            {/* Transaction Type Select */}
            <select
              id="type"
              value={formData.type}
              onChange={handleSelectChange}
            >
              <option value="income">Deposit (Vault Credit)</option>
              <option value="expense">Withdrawal (Vault Debit)</option>
            </select>

            {/* Submit Button */}
            <button type="submit">Commit to Ledger ⚡</button>
          </form>
        </section>
      </main>

      {/* Footer with themed message */}
      <Footer message="Mischief Managed. ✨" />

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

export default AddTransaction;
