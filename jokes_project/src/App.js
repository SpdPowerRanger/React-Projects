import React from 'react'
import Jokes from './components/jokes'
import jokesData from './components/jokesData'

export default function App() {
  
  //const colors = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet']
  const jokeElements = jokesData.map((joke)=>{
    return <Jokes 
              setup = {joke.setup}
              punchline={joke.punchline} 
           />
  })

  return(
    <div>
      <nav className='app--nav'>
        <h1>Puns For Fun</h1>
      </nav>

      {jokeElements}
    </div>
  )
}



     
    
      