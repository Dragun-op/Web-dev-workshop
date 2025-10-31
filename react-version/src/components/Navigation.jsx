import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navigation Component
 * 
 * Displays the Marauder's Map themed navigation bar with links to all pages.
 * Uses React Router's NavLink for automatic active state management.
 * 
 * Features:
 * - Fixed position navigation bar with glassmorphism effect
 * - Gringotts logo with magical glow effect
 * - Three navigation links: Ledger, Add Transaction, and Reports
 * - Automatic active state styling via NavLink
 * - Fully responsive design (mobile-friendly)
 * 
 * @returns {JSX.Element} The navigation bar component
 */
const Navigation = () => {
  return (
    <nav className="marauders-nav">
      {/* Gringotts Logo with Cinzel Decorative font and magical glow */}
      <div className="nav-logo">Gringotts</div>
      
      {/* Navigation Links */}
      <ul>
        <li>
          {/* NavLink automatically adds 'active' class when route matches */}
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            📜 Ledger
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className={({ isActive }) => isActive ? 'active' : ''}>
            💰 Add Transaction
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className={({ isActive }) => isActive ? 'active' : ''}>
            📈 Reports
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
