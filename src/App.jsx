import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <Router>
      <Header isConnected={isConnected} setIsConnected={setIsConnected} />
      <Routes>
        {/* Je definie home commme page par défaut  */}
        <Route path="/" element={<Home />} />
        {/* Je definis une route avec un id dynamique  */}
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login isConnected={isConnected} setIsConnected={setIsConnected} />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
