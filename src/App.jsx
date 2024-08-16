import Hero from "./components/hero";
import './App.css'
import Header from './components/Header/Header'
import HireMe from "./components/HireMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Portfolio />
      <HireMe />
    </>
  );
}

export default App;
