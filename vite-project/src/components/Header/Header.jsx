import React, { useState } from 'react'
import { FiMenu, FiShoppingCart } from 'react-icons/fi'
import './Header.css'
import { AiOutlineHeart } from 'react-icons/ai'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
        <div className="nav-container">
            <div className="menu-bar" onClick={toggleMenu}>
                <FiMenu size={30} />
            </div>
            <div className="logo">
                <h1>SHOP.CO</h1>
            </div>
            <div className={`nav-lists ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/product">Products</a></li>
                    <li><a href="/login">LogIn</a></li>
                </ul>
            </div>
            <div className="nav-icons">
                <AiOutlineHeart size={30} />
                <FiShoppingCart size={30} />
            </div>
        </div>
    </nav>
  )
}

export default Header
