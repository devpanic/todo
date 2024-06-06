import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/About';
import Board from './pages/Board/Board';
import Footer from "./components/Layout/Footer/Footer";
import Todo from "./pages/Todo/Todo";

function App() {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/board">CRUD Board</Link>
                        </li>
                        <li>
                            <Link to="/todos">Todo</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/board" element={<Board/>}/>
                    <Route path="/todos" element={<Todo/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;