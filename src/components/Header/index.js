import React from 'react'
import './style.css'
import {Navbar} from 'react-bootstrap'


const Header = () => {
  return (
    <header> 
         <Navbar className="navbar navbar-expand-lg navbar-dark " collapseOnSelect expand="lg" bg="dark" variant="dark">
         <div className="container-fluid "> 
         <a className="navbar-brand" href="#"> <img src="./img/logo.png" alt="logo da empresa"></img></a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item" className='bg-primary'>
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Artigos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Podcasts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Videos</a>
              </li>
            </ul>
                <div id="divBuscaHeader">
                {/*<input className="placeholder-inactive" type="text" id= "textoBusca" placeholder="Pesquisar"> */}
                <img src='./img/lupa-header.png' href="#" id="bntBusca" alt="Buscar"/>
                </div>
                </div>
         </div>
         </Navbar>
    </header>
  )
}

export default Header