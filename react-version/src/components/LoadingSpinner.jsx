import React from 'react';

/**
 * LoadingSpinner Component
 * 
 * Displays a magical loading animation with floating galleon coins.
 * Used when calculating vault balance or loading transactions from Gringotts.
 * 
 * Features:
 * - Three floating coins with staggered animation
 * - Customizable loading message
 * - Themed styling consistent with Gringotts aesthetic
 * 
 * @param {Object} props - Component props
 * @param {string} props.message - The loading message to display (default: "Consulting the goblins...")
 * @returns {JSX.Element} The loading spinner component
 */
const LoadingSpinner = ({ message = "Consulting the goblins..." }) => {
  return (
    <div className="magical-loading">
      <div className="floating-coins">
        <span className="coin">🪙</span>
        <span className="coin">🪙</span>
        <span className="coin">🪙</span>
      </div>
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
