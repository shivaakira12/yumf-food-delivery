import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Cart from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/order" element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
  );
}

export default App;
