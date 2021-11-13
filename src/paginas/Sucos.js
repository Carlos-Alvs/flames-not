import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Suco.css"
import "./css/menu.css"

function Sucos() {
  return (
    <nav id="menu">
      <ul>
        <li><img src="https://download.assistivecards.com/cards/fruits/mango.svg" className="logoMenu" alt="logoMenu" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sucos">Sucos</Link></li>
        <li><Link to="/unidades">Unidades</Link></li>
      </ul>
    </nav>
  )
}

export default Sucos;