import "./App.css";
import AreaSection from "./components/AreaSection/AreaSection";
import ClientFeedback from "./components/ClientFeedback/ClientFeedback";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
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

      <div className="area-container">
        <AreaSection/>
      </div>

      <div className="client-review-container">
        <ClientFeedback/>
      </div>


      <div className="team-container">
        <Team/>
      </div>
    </div>
  );
}

export default App;
