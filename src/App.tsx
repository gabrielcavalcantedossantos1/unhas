import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<PortfolioDetail />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/servicos/:id" element={<ServiceDetail />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
