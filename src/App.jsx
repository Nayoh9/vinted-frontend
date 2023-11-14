import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  // Si à l'ouverture d'une page nos cookies contiennent token2 alors on est toujours connecté, sinon non
  const [isConnected, setIsConnected] = useState(
    Cookies.get("token2") ? true : false
  );
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
        <Route path="/publish" element={<Publish />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}
export default App;
