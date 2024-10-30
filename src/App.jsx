import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Insight from "./components/Insight";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Landingpage />
            <Marquee />
            <About />
            <Eyes />
            <Feature />
            <Cards />
            <Footer />
          </>
        } />
        <Route path="/aboutus" element={<About />} />
        <Route path="/ourwork" element={<Feature />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/insights" element={<Insight/>} />
      </Routes>
    </Router>
  );
}

export default App;
