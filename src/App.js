import './App.css';
import Cards from './Components/Cards/Cards';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Food from "../src/Components/Food/Food"
import Category from './Components/Category/Category';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      <Category />
    </>
  );
}

export default App;
