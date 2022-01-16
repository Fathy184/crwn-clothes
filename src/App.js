import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
