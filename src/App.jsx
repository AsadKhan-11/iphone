import { useState } from "react";

import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;
