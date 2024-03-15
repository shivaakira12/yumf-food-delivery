import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <NavBar />
    </div>
  );
}

export default App;
