import { createContext, useEffect, useState } from "react";
import { loginUser } from "../api/login";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState(
          JSON.parse(localStorage.getItem("user")) || null
     );

     const login = async (inputsData) => {
          const res = await loginUser(inputsData);

          setCurrentUser(res.data);
     };

     useEffect(() => {
          localStorage.setItem("user", JSON.stringify(currentUser))
     }, [currentUser]);

     return (
          <AuthContext.Provider value={{ currentUser, login }}>
               { children }
          </AuthContext.Provider>
     );
};