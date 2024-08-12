
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Product from "./pages/Product/Product";
import NotFound from "./pages/404/NotFound";
import Cartpage from "./pages/Cartpage/Cartpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
