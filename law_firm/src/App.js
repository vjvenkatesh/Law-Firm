import "./App.css";
import AreaSection from "./components/AreaSection/AreaSection";
import ClientFeedback from "./components/ClientFeedback/ClientFeedback";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import SubscripeSection from "./components/SubscripeSection/SubscripeSection";
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
        <WhySection />
        <AreaSection />
        <ClientFeedback />
        <Team />
        <FaqSection />
        <SubscripeSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;























{/* <div className="why-container">
      
      </div>

      <div className="area-container">
        
      </div>

      <div className="client-review-container">
        
      </div>


      <div className="team-container">
       
      </div>

      <div className="faq-container">
        
      </div>

      <div className="subscribe-container">
        
      </div>

      <div className="footer-container">
        
      </div> */}