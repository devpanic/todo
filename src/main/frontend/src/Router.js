import React from "react";
import {Route, Routes} from 'react-router-dom'
import Test from "./components/Test";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Todo from "./pages/Todo/Todo";

function Router() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path="/todos" element={<Todo/>}/>
                </Routes>
            </Layout>
        </>
    );
}

export default Router;