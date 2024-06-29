import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Add from "./pages/Add/Add";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "../../frontend/src/pages/VerifyOrder/Verify";
const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url}></Add>}></Route>
          <Route path="/list" element={<List url={url}></List>}></Route>
          <Route path="/orders" element={<Orders url={url}></Orders>}></Route>
          <Route path="/verify" element={<Verify></Verify>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
