import React from "react";
import {Route, Routes} from 'react-router-dom'
import Test from "./components/Test";
import Home from "./pages/Home";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
    );
}

export default Router;