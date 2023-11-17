import Header from "./components/navBar/Header";
import "./App.css";

import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Home from "./pages/Home";
import New from "./pages/new/New";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new" element={<New />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
