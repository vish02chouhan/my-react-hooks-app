// File: src/UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext({
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userName) => {
    // Simulate a login by setting the user
    const userData = { name: userName };
    setUser(userData);
  };

  const logout = () => {
    // Simulate a logout by clearing the user
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
