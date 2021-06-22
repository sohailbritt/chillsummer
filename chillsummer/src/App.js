import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AdventureSection from './components/AdventureSection'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App"> 
     <Navbar/>
     <Hero/>
     <AdventureSection/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
