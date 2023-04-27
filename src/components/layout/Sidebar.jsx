import { useState } from 'react'

import {BsArrowRight,
        BsSearch,
        BsHouse,
        BsBarChart,
        BsBell,
        BsGraphUp,
        BsHeart,
        BsWallet,
        BsBoxArrowLeft,
        BsMoon,
        BsSun,
        BsArrowLeft,
      } 
      from 'react-icons/bs'

import Logo from '../../assets/react.svg'

import './Sidebar.css'

import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'

const Sidebar = () => {

  const {theme, toggleTheme, openClosed, openCloseButton} = useContext(ThemeContext)
  console.log(toggleTheme)
  console.log(openCloseButton)

  /*const [openClosed, setOpenClosed] = useState('open')*/

  return (
    <nav className={`sidebar ${openClosed}`}>
        <header>
            <div className='image-text'>
                <span className='image'>
                    <img src={Logo} alt='logo' />
                </span>
                <div className="text header-text">
                  <span className='side'>Sidebar </span>
                  <span className='darkmode'>+ Dark Mode</span>
                </div>
                <div className='arrow' onClick={/*() => {
                  setOpenClosed(openClosed === 'open' ? 'close' : 'open')*/
                  openCloseButton
                }>
                  <BsArrowLeft />
                </div>
            </div>            
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className='search-box'>
              <span className="icon">
                <BsSearch />
              </span>
              <input type='search' placeholder='Pesquisar...' />
            </li>
            <ul className='menu-links'>
              <li className='nav-link'>
                <a  href='#'>
                  <span className="icon">
                    <BsHouse />
                  </span>
                  <span className='text nav-text'>Dashboard</span>
                </a>
              </li>
          
              <li className='nav-link'>
                <a  href='#'>
                  <span className="icon">
                    <BsBarChart />
                  </span>
                  <span className='text nav-text'>Revenue</span>
                </a>
              </li>
              <li className='nav-link'>
                <a  href='#'>
                  <span className="icon">
                    <BsBell />
                  </span>
                  <span className='text nav-text'>Notification</span>
                </a>
              </li>
              <li className='nav-link'>
                <a  href='#'>
                  <span className="icon">
                    <BsGraphUp />
                  </span>
                  <span className='text nav-text'>Analytics</span>
                </a>
              </li>
              <li className='nav-link'>
                <a  href='#'>
                  <span className="icon">
                    <BsHeart />
                  </span>
                  <span className='text nav-text'>Likes</span>
                </a>
              </li>
              <li className='nav-link'>
                <a  href='#'>
                  <span className="icon">
                    <BsWallet />
                  </span>
                  <span className='text nav-text'>Wallets</span>
                </a>
              </li>
            </ul> 
          </div>

          <div className="bottom-content">
            <li className='nav-link'>
              <a  href='#'>
                <span className="icon">
                  <BsBoxArrowLeft />
                </span>
                <span className='text nav-text'>Logout</span>
              </a>
            </li>

            <li className='mode'>
              <div className="moon-sun">
                <span className="moon icon"><BsMoon /></span>
                <span className="sun icon"><BsSun /></span> 
              </div>
              <span className="mode-text text">{theme} theme</span>

              <div className="toggle-switch" onClick={toggleTheme}>
                <span className="switch"></span>
              </div>
            </li>

          </div>
        </div>
    </nav>
  )
}

export default Sidebar