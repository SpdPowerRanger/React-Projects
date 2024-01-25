import NavBar from './components/navbar';
import Hero from './components/heroComponent';
import Card from './components/card'
import Contacts from './components/contacts'
import cardData from './data'



export default function App() {
  const dataElements = cardData.map(data=>{
    return(
      <Card
        key={data.id}
        data={data}
      />
    )
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className='app--cards'>
        {dataElements}
      </div>  

    </div>
  );
}

      


/** 
 *       <Contacts 
        img={MrWhiskerson}
        name='Mr. Whiskerson'
        phone='7895464175'
        email='mrwhis@catnip.meow'
      />
      <Contacts
        img={img2}
        name='Mr. Kipserson'
        phone='7895464455'
        email='mrwhis@catnid.meow' 
      />
      <Contacts 
        img={img3}
        name='Mr. Gibserson'
        phone='7897864455'
        email='mrgibis@catnid.meow'
      />
      <Contacts 
        img={MrWhiskerson}
        name='Mr. Siperson'
        phone='7895464595'
        email='mrsipis@catnid.meow'
      />

      */ 

/**
 *      <Card 
          img={katieZferes}
          rating={5.0}
          reviewCount={6}
          country="USA"
          title={"Life lessons with Katie Zaferes"}
          price={136}
        />
        <Card 
          img={MrWhiskerson}
          rating={2.0}
          reviewCount={1}
          country="USA"
          title={"Moonlight Meows of Mr. Whiskerson"}
          price={500}
        />
 */