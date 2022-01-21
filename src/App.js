import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'


function App() {
  const cardData = data.map(item => {
    return (
    <Card 
      key={item.id}
      coverImg={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      price={item.price}
      title={item.title}
    />)
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='experiences'>
      {cardData}
      </section>
      
    </div>
  );
}


export default App;
