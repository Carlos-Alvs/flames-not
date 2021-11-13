import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./css/Land.css"
import "./css/menu.css"
import "./css/modal.css"

function Land() {
    const [ismodalopen, setismodalopen] = useState(false)
    return (

        <div className="Landpage">
            {
                ismodalopen && <>
                    <div className='background-mod'>
                        <div className='modal-cad'>
                            <div className='div-x'>
                                <button className='close-btn' onClick={() => setismodalopen(false)}>X</button>
                            </div>
                        </div>
                    </div>
                </>
            }

            <nav id="menu">
                <ul>
                    <li><img src="https://static.wixstatic.com/media/0fbf32_0b8feca532354252b3d4dd49fbcaf095~mv2.gif" className="logoMenu" alt="logoMenu" /></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sucos">#</Link></li>
                    <li><Link to="/unidades">Contato</Link></li>
                </ul>
            </nav>
            <div className="fundo1">
                <div class="outer">
                    <div class="mask">
                        <div class="ring" onClick={() => setismodalopen(true)}>

                        </div>
                    </div>
                </div>

                <h1 className="Name">
                    Flare Not
                </h1>
                <h2 className="Frase">
                    Clique no botão para denunciar um incêndio!
                </h2>
            </div>

            <div className="slogan">
                <p>

                </p>
            </div>
            <div className="fall">
                <div className="about">
                    <p className="p-common"> Nosso projeto consiste em facilitar e icentivar as pessoas a denunciarem quaisquer foco de incêndio! </p>
                    <Link to="/sucos" className="ref">
                        Conheça nossos colaboradores!
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Land;