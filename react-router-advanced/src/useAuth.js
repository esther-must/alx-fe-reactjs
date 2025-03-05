import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated from localStorage (or another method)
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const login = (cb) => {
    localStorage.setItem("user", "loggedIn"); // Simulating authentication
    setIsAuthenticated(true);
    if (cb) cb();
  };

  const logout = (cb) => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    if (cb) cb();
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
