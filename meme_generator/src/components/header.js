import React from 'react'
import trollFace from '../images/trollFace.png'
export default function Header(){
    return(
        <nav className='header'>
            <img src={trollFace} alt='' className='header--image'/>
            <h1 className='header--text'>Meme Generator</h1>
        </nav>
    )
}