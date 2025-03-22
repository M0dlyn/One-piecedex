import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import FruitsDex from "./components/FruitsDex";
import About from "./components/About";
import Credits from "./components/Credits";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<FruitsDex />} />
            <Route path="/about" element={<About />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
