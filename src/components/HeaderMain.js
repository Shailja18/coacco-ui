import React from 'react'
import './HeaderMain.scss'

export default function HeaderMain() {
    return (
        <nav className="nav-main nav-wrapper red lighten-3">
                <div className="header-main">
                 
                    <a href="#" className="brand-logo">
                        <span className="material-icons">hotel</span>
                        <span>CoAcco</span>
                    </a>
                    <ul className="navigation">
                    <li><a>HOME</a></li>
                    <li><a>LISTINGS</a></li>
                    <li><a>CONTACT</a></li>
                    <li><a>MORE</a></li>
                    
                        </ul>
                    </div>
                
        </nav>
    )
}
