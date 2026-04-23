import Navbar from './Navbar';
import CakeCard from './CakeCard';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Navbar />
      
      <div style={{ padding: '20px' }}>
        <h1>Our Delightful Cakes</h1>
        
        {/* This is our container for the cake cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          <CakeCard 
            name="Strawberry Dream" 
            price={450} 
            description="A fresh summer cake with organic strawberries and cream."
            image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500"
          />

          <CakeCard 
            name="Chocolate Heaven" 
            price={495} 
            description="Rich dark chocolate ganache with a hint of sea salt."
            image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
          />

          <CakeCard 
            name="Classic Princess" 
            price={395} 
            description="The traditional Swedish green marzipan masterpiece."
            image="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500"
          />

        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;