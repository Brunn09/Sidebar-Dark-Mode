import React from 'react'

import './Home.css'

import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext' 

const Home = () => {

  const {openClosed} = useContext(ThemeContext)

  return (
    <h1 className={`text ${openClosed}`}>Home</h1>
  )
}

export default Home