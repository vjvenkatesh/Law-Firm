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

      <div className="faq-container">
        <FaqSection/>
      </div>

      <div className="subscribe-container">
        <SubscripeSection/>
      </div>

      <div className="footer-container">
        <Footer/>
      </div>
    </div>

  );
}

export default App;
