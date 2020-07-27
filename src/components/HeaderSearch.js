import React, { useEffect } from 'react'
import M from 'materialize-css'

export default function HeaderSearch() {

    useEffect(() => {
        M.Dropdown.init(document.querySelector('.dropdown-trigger'), {});
    }, [])

    return (
        <div className="header-search  red lighten-3">
            <div className="header-search">
            
            
            <div className="search">
               
            
                </div>
                
                
            </div>
        </div>
    )
}
