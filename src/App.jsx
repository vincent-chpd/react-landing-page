import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {

  return (
    <div className="App">
     
     <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
