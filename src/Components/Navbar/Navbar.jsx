import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'


export default function Navbar() {


  function changeBacground(e){


    if(e.target.id == "aboutPageLink"){
      document.getElementById('aboutPageLink').style.backgroundColor='#1ABC9C'
    }else{
      document.getElementById('aboutPageLink').style.backgroundColor='#2C3E50'
    }


    if(e.target.id == "portfolioPageLink"){
      document.getElementById('portfolioPageLink').style.backgroundColor='#1ABC9C'
    }else{
      document.getElementById('portfolioPageLink').style.backgroundColor='#2C3E50'
    }


    if(e.target.id == "contactPageLink"){
      document.getElementById('contactPageLink').style.backgroundColor='#1ABC9C'
    }else{
      document.getElementById('contactPageLink').style.backgroundColor='#2C3E50'
    }

  }










  return (
    <nav className={`${style.navbar} navbar navbar-expand-lg fixed-top`}>
  <div className="container">
    <Link onClick={(e)=>{changeBacground(e)}} className={`${style.navbarTitle} text-white navbar-brand `}   to=" ">START FRAMEWORK</Link>
    <button className={`navbar-toggler ${style.navbarBotton}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse`} id="navbarNav">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <Link id='aboutPageLink' onClick={(e)=>{changeBacground(e)}} className={` nav-link  ${style.navbarLinks} ${style.navbarLinks1} text-white me-3`} aria-current="page" to="ABOUT">ABOUT</Link>
        </li>

        <li className="nav-item">
          <Link id='portfolioPageLink' onClick={(e)=>{changeBacground(e)}} className={`${style.navbarLinks} ${style.navbarLinks2} nav-link text-white me-3`} to="PORTFOLIO">PORTFOLIO</Link>
        </li>

        <li className="nav-item">
          <Link id='contactPageLink' onClick={(e)=>{changeBacground(e)}} className={`${style.navbarLinks} ${style.navbarLinks3} nav-link text-white me-3`} to="CONTACT">CONTACT</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}
