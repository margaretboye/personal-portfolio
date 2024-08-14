import Hero from "./components/hero";
import HireMe from "./components/HireMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Services />
      <Portfolio />
      <HireMe />
    </>
  );
}

export default App;
