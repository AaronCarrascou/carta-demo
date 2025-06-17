import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartaDemo from "./pages/carta/cartaDemo";
import Presentacion from "./pages/presentacion/presentacion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentacion />} />

        <Route path="/carta" element={<CartaDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
