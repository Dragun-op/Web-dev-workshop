import React, { useEffect } from 'react';

/**
 * Toast Notification Component
 * 
 * Displays temporary feedback messages to the user with magical styling.
 * Automatically dismisses after 3 seconds with a fade-out animation.
 * 
 * Features:
 * - Success and error message types with appropriate icons
 * - Slide-in from right animation
 * - Auto-dismiss with fade-out
 * - Gringotts themed styling
 * 
 * @param {Object} props - Component props
 * @param {string} props.message - The message to display
 * @param {string} props.type - The type of message ('success' or 'error')
 * @param {Function} props.onClose - Optional callback when toast closes
 * @returns {JSX.Element} The toast notification component
 */
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    // Auto-dismiss after 3 seconds
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast-notification ${type}`}>
      {message}
    </div>
  );
};

export default Toast;
