import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SIgnUp from "./pages/SIgnUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />

          <Route exact path="/signup" element={<SIgnUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
