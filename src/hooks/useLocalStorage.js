import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(`Error reading localStorage key:${(key, error)}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));

      if (key === "theme") {
        document.documentElement.setAttribute("data-theme", storedValue);
      }
    } catch (error) {
      console.log(`Error Saving LocalStorage: ${(key, error)}`);
    }
  }, [key, storedValue]);

  const removeStoredValue = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(`Error Removing LocalStorage key: ${(key, error)}`);
    }
  };

  return [storedValue, setStoredValue, removeStoredValue];
};