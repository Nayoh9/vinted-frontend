import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
export default App;
