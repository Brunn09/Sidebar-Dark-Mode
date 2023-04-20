import Home from './components/Home'
import Sidebar from './components/layout/Sidebar'

import './App.css'

import { useContext } from 'react'
import { ThemeContext } from './context/themeContext'


function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
