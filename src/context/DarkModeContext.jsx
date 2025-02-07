import { createContext, useState } from "react";

// Context 초기값을 false로 지정
export const DarkModeContext = createContext(); 

export const DarkModeProvider = ({ children, initDarkMode = true }) => {

  const [darkMode, setDarkMode] = useState(initDarkMode);
  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      { children }
    </DarkModeContext.Provider>
  )
}