import "./App.css";
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Je definie home commme page par défaut  */}
        <Route path="/" element={<Home />} />
        {/* Je definis une route avec un id dynamique  */}
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;
