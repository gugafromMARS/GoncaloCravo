import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/about/About.jsx";
import Home from "./pages/home/Home.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/GoncaloCravo" element={<Home />} />
        <Route path="/GoncaloCravo/about" element={<About />} />
        <Route path="/GoncaloCravo/portfolio" element={<Portfolio />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
