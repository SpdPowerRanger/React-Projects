import React from 'react'
import globe from '../images/globe.png'


export default function Navbar(){
    return(
        <nav className='nav'>
            <div className='nav--div'>
                <img src= {globe} alt='' className='nav--img'/>
                <span className='nav--text'>my travel journal.</span>
            </div>
            
        </nav>
    )
}