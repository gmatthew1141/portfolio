import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home title="home"/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
