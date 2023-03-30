import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const accountFromLocalStorage = localStorage.getItem("account");
    if (accountFromLocalStorage) {
      setAccount(accountFromLocalStorage);
    }
  }, [setAccount]);

  // Update local storage when account value changes
  useEffect(() => {
    localStorage.setItem("account", account);
  }, [account]);

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
}
