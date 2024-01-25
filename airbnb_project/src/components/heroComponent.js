import React from 'react'
import airbnbExperiences from '../images/airbnbExperiences.png'
export default function Hero(){
    return(
        <div className='hero'>
            <img src={airbnbExperiences} className='hero--image'/>
            <div className='hero--texts'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activiyies led by <br></br>
                one-of-a-kind hosts-all without leaving <br></br> home.</p>
            </div>
            
        </div>
    )
}