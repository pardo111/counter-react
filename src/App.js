import Counter from "./components/counter";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Counter />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
