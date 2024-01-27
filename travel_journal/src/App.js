import React from 'react'
import Navbar from './components/navbar';
import travelData from './data'
import Card from './components/card'

function App() {

  const destinations = travelData.map(data=>{
    return(
      <Card 
        data = {data}
      />
    )
  })

  return (
    <div className="App">
      
      <Navbar />
      
      <div className='group--card'>
        {destinations}
      </div>
      
      
      
    </div>
  );
}

export default App;
