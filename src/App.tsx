import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
