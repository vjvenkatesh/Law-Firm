import "./App.css";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import WhySection from "./components/WhySection/WhySection";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="intro-container">
        <IntroSection />
      </div>
      <div className="why-container">
        <WhySection />
      </div>
    </div>
  );
}

export default App;