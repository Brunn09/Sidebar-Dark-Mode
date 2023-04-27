import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

  const [openClosed, setOpenClosed] = useState('open')
  const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const openCloseButton = () => {
      setOpenClosed(openClosed === 'open' ? 'close' : 'open')
    }

  return <ThemeContext.Provider value={{theme, toggleTheme, openClosed, openCloseButton}}>{children}</ThemeContext.Provider>
}

