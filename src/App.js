import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katie from "./images/katie-zaferes.png"
import wedding from "./images/wedding-photography.png"
import bike from "./images/mountain-bike.png"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='experiences'>
      <Card 
        img={katie}
        rating="5.0"
        votes="(6)"
        country="USA"
        text="Life lessons with Katie Zaferes"
        price="136"
      />
      <Card 
        img={wedding}
        rating="5.0"
        votes="(6)"
        country="USA"
        text="Life lessons with Katie Zaferes"
        price="136"
      />
      </section>
    </div>
  );
}


export default App;
