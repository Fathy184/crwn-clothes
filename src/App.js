import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello From App.js</h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
