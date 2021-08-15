import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav nav-pills">
                <Link to="/">
                    <li className="nav-item nav-link active" aria-current="page">Home</li>
                </Link>
                <Link to="/programs">
                    <li className="nav-item nav-link">Programs</li>
                </Link>
                <Link to="/people">
                    <li className="nav-item nav-link">People</li>
                </Link>
                <Link to="/media">
                    <li className="nav-item nav-link">Watch &amp; Listen</li>
                </Link>
                <Link to="/teacherportal">
                    <li className="nav-item nav-link">Teacher Portal</li>
                </Link> 
            </ul>

        </nav>
    )
}

export default Navbar;
