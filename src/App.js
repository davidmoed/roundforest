import React from "react";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import FunnyGif from "./pages/FunnyGif";

import "./App.scss";

function App() {
  return (
    <Container fluid className="App">
      <Header />

      <Routes>
        <Route path="/roundforest" element={<Homepage />} />
        <Route index element={<Homepage />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="funnyGif" element={<FunnyGif />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Container>
  );
}

export default App;
