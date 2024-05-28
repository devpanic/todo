import './App.css';
import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";
import React from "react";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/test" element={<Test/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
