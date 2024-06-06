import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/test">TEST</Link>
            <Link to="/todos">TODO</Link>
        </>
    );
}

export default Header;