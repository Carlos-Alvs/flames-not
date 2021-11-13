import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import "./css/Unidades.css"
import "./css/menu.css"

function Unidades() {

    return (
        <nav id="menu">
            <ul>
                <li><img src="https://download.assistivecards.com/cards/fruits/mango.svg" className="logoMenu" alt="logoMenu" /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sucos">Sucos</Link></li>
                <li><Link to="/unidades">Unidades</Link></li>
                <li><Link to="/contatos">Contatos</Link></li>
            </ul>
        </nav>

    )

}

export default Unidades;