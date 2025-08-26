import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
