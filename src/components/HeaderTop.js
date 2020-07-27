import React from 'react'
import './HeaderTop.scss'


export default function HeaderTop() {
    return (
        <div>
        <nav className="nav-top nav-wrapper red lighten-2" >
                <div className="nav-wrapper">
               

                    <ul  id="nav-mobile" className="left">
                        <li><a href="#">Register</a></li>
                        <li><a  href="#">Login</a></li>
                    </ul>
                 
               
                </div>
        </nav>

      {/* 
         <a href="#" className="sidebar-trigger" data-target="mobile-nav">
                         <i className="material-icons">menu</i>
                </a>
        <ul className="side-nav" id="mobile-nav">
        <li><a id="homeMenu" href="#">Home</a></li>
        <li><a id="searchMenu" href="#">Matches</a></li>
        </ul>
        */}
        </div>
    )
}
