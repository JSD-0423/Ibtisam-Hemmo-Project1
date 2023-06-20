import React, { createContext, useState, useEffect, useMemo } from "react";

export const ThemeContext = createContext();

const getStoredTheme = () => {
  try {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  } catch (error) {
    console.error("Error while retrieving theme from localStorage:", error);
    return false;
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getStoredTheme());

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      try {
        localStorage.setItem("theme", JSON.stringify(newTheme));
      } catch (error) {
        console.error("Error while storing theme in localStorage:", error);
      }
      return newTheme;
    });
  };

  useEffect(() => {
    try {
      localStorage.setItem("theme", JSON.stringify(isDarkTheme));
      document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    } catch (error) {
      console.error("Error while updating theme in localStorage:", error);
    }
  }, [isDarkTheme]);

  const themeValue = useMemo(
    () => ({ isDarkTheme, toggleTheme }),
    [isDarkTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
