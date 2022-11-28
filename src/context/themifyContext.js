import { createContext, useEffect } from "react";

export const ThemifyContext = createContext();

export const ThemifyContextProvider = ({ children }) => {
     const [theme, setTheme] = useState(
          localStorage.getItem("darkMode") || false
     );

     const toggleTheme = () => {
          setTheme(!theme);
     };

     useEffect(() => {
          localStorage.setItem("darkMode", theme)
     }, [darkMode]);

     return (
          <ThemifyContext.Provider value={{  theme, toggleTheme  }}>
               { children }
          </ThemifyContext.Provider>
     );
};