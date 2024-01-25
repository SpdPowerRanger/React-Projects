import React from 'react'
import star from '../images/star.png'
import products from '../images/bird.jpg'

export default function Card(props){
    let badgeText
    if(props.data.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.data.country === 'Online'){
        badgeText = "ONLINE"
    }
    return(
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`./images/${props.data.img}`} className='card--image'/>
            <div className='card--stats'>
                <img src={star} className='card--starImage'/>
                <span>{props.data.rating}</span>
                <span className='gray'>({props.data.reviewCount}) •</span>
                <span className='gray'>{props.data.country}</span>
                <p>{props.data.title}</p>
                <p><b>From {props.data.price}$</b> / person</p>
            </div>
        </div>
    )
}