import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Layout/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Via_Spiral from "./Layout/Via_Spiral";
import Via_Wave from "./Layout/Via_Wave";


const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Via_Wave/>} />
        <Route path="/wave" element={<Via_Wave />} />
        <Route path="/spiral" element={<Via_Spiral/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;