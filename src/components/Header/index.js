import React from 'react'
import './style.css'



const Header = () => {
    return (
        <nav>
            <input id="nav-toggle" type="checkbox"></input>
            <div className="logo"><a href="#home"><strong>Site</strong></a></div>
            <ul className="links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#portfolio">Podcast</a></li>
                <li><a href="#about">Artigo</a></li>
                <li><a href="#about">Video</a></li>
                <li><a href="#about">Sobre</a></li>
            </ul>
            <label for="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav>
    )

}

export default Header