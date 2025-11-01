import { useState, useEffect } from 'react';

/**
 * Custom React hook for managing state with localStorage persistence
 * 
 * This hook provides a stateful value that is automatically synchronized
 * with localStorage. It handles parsing/stringifying of JSON data and
 * provides the same interface as useState.
 * 
 * @param {string} key - The localStorage key to use for storing the value
 * @param {*} initialValue - The initial value to use if no stored value exists
 * @returns {[*, Function]} - A tuple containing the current value and a setter function
 * 
 * @example
 * const [transactions, setTransactions] = useLocalStorage('ledger', []);
 */
export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [storedValue, setValue];
}
