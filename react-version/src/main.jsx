import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Application Entry Point
 * 
 * This is the main entry file for the React application.
 * It initializes the React app and mounts it to the DOM.
 * 
 * Process:
 * 1. Import React and ReactDOM for rendering
 * 2. Import the main App component
 * 3. Create a root element attached to the 'root' div in index.html
 * 4. Render the App component inside React.StrictMode
 * 
 * React.StrictMode:
 * - Activates additional checks and warnings for development
 * - Helps identify potential problems in the application
 * - Does not render any visible UI
 * - Only runs in development mode
 */

// Create root and render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
