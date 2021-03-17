import React from 'react'
import './style.css'



const Header = () => {
  return (
    <nav>   
    <input id="nav-toggle" type="checkbox"/>
    <div className="logo"><img src="./img/logo.png" alt="logo"/><strong>Site</strong></div>
    <ul className="links">
      {/*  <li><a href="">Home</a></li>
        <li><a href="">Artigos</a></li>
        <li><a href="">Podcasts</a></li>
        <li><a href="">Videos</a></li>       
        <li><a href="">Sobre</a></li>    */ }  
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