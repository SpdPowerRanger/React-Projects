import React from 'react'
import location from '../images/location.png'
export default function Card(props){
    return(
        <div className='card'>
            <img src={`../images/${props.data.img}`} alt='' className='card--image'/>
            <div className='card--stats'>
                <img src={location} alt='' className='card--locationImg'/>
                
                <span className='card--location'>{props.data.location}</span>
                <span className='padding'><a href={`${props.data.googleMapsUrl}`}>View on Google Maps</a></span>
                <br></br>
                <span className='card--title'>{props.data.title}</span>
                
                <br></br>
                <div className='padding--date'>
                    <span className='distance'>{props.data.startDate}</span>
                    <span className='distance'>-</span>
                    <span className='distance'>{props.data.endDate}</span>
                </div>
            
                <p className='text--width'>{props.data.description}</p>
                <hr /> 
               
            </div>   
                           
        </div>
        
            
    )
}