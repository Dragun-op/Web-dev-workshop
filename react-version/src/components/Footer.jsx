import React from 'react';

/**
 * Footer Component
 * 
 * Displays themed footer messages that vary by page.
 * Maintains the Harry Potter Marauder's Map aesthetic.
 * 
 * @param {Object} props - Component props
 * @param {string} props.message - The footer message to display
 * @returns {JSX.Element} The footer component
 */
const Footer = ({ message }) => {
  return (
    <footer>
      <p>{message}</p>
    </footer>
  );
};

export default Footer;
