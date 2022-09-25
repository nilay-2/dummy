import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import HomeSignup from "./pages/HomeSignup";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<HomeSignup />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
