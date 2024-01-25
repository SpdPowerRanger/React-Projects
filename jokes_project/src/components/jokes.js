import React from 'react'

export default function Jokes(props){
    return(
        <div className='jokes'>
            {props.setup && <p>{props.setup}<br></br></p>}
                <br></br>
            <p>{props.punchline}</p>
               <hr />
        </div>
    )
}