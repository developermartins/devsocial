import { createContext, useEffect, useState } from "react";

export const ThemifyContext = createContext();

export const ThemifyContextProvider = ({ children }) => {
     const [theme, setTheme] = useState(
          JSON.parse(localStorage.getItem("darkMode")) || false
     );

     const toggleTheme = () => {
          setTheme(!theme);
     };

     useEffect(() => {
          localStorage.setItem("darkMode", theme)
     }, [theme]);

     return (
          <ThemifyContext.Provider value={{  theme, toggleTheme  }}>
               { children }
          </ThemifyContext.Provider>
     );
};