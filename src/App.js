import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Showcase1 from "./components/Showcase1/Showcase1";
import Showcase2 from "./components/Showcase2/Showcase2";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <Showcase1/>
      <Showcase2/>
    </div>
  );
}

export default App;
