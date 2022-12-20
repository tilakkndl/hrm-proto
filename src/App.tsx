import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GridComponent from "./components/gridHome/GridComponent";
// import GridComponent from "./components/gridHome/GridComponent";
import NabBarTest from "./components/NabBarTest";
import Home from "./view/Home";
import Request from "./view/Request.Staff";

function App() {
  return (
    <>
      <Router>
        <NabBarTest />
        <Routes>
          <Route path="/" element={<GridComponent />}></Route>
          <Route path="/request" element={<Request />}></Route>
        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  );
}

export default App;
