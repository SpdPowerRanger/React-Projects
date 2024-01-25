import React from 'react'
import airbnb from '../images/airbnb.png'

export default function NavBar(){
    return(
        <nav>
            <img src={airbnb} className='nav--logo'/>
        </nav>
    )
}  