import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<></>}/>
      </Routes>
    </div>
  );
}

export default App;
