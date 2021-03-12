import React from 'react'
import './style.css'



const Header = () => {
  return (
    <nav>   
    <input id="nav-toggle" type="checkbox"/>
    <div class="logo"><img src="./img/logo.png" alt="logo"/><strong>Site</strong></div>
    <ul class="links">
        <li><a href="">Home</a></li>
        <li><a href="">Artigos</a></li>
        <li><a href="">Podcasts</a></li>
        <li><a href="">Videos</a></li>       
        <li><a href="">Sobre</a></li>       
    </ul>
    <label for="nav-toggle" class="icon-burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </label>
</nav>
    
  )
}

export default Header