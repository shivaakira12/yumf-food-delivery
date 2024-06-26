import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import NavBar from "./components/Navbar/NavBar";
import Cart from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";
import MyOrders from "./pages/MyOrders/MyOrders";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Verify from "./pages/VerifyOrder/Verify";
function App() {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
      {showLogin ? (
        <LoginPopup setshowLogin={setshowLogin}></LoginPopup>
      ) : (
        <></>
      )}
      <div className="app">
        <NavBar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/order" element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path="/verify" element={<Verify />}></Route>
          <Route path="/myorders" element={<MyOrders></MyOrders>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
