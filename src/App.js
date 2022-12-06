import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SIgnUp from "./pages/SIgnUp";
import SignIn from "./pages/SignIn";
import Notifications from "./pages/Notifications";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />

          <Route exact path="/signup" element={<SIgnUp />} />

          <Route exact path="/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
