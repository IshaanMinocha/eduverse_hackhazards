import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Marketplace from "./Components/Marketplace";
import Visualization from "./Components/Visualization";
import Nft from "./Components/Nft";
import Features from "./Components/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generative from "./Components/Generative";

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <About />
            <Features />
          </>
          } />
          <Route path="/generative" element={<Generative />} />
          <Route path="/arlearning" element={<Marketplace />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/transactions" element={<Nft />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App


const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion />
  }
}

