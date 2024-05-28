import './App.css';
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import React from "react";
import Header from "./components/Header";

function App() {
  return(
      <>
          <Header />
          <Routes>
              <Route path="/test" element={<Test />} />
          </Routes>
      </>
  );
}

export default App;
