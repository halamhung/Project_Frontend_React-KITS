
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Product from "./pages/Product/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
