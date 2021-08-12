import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class="container">
            <header className="d-flex flex-wrap justify-content-center align-items-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex flex-column align-items-start mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-5">University of Toronto <br/>Piano Pedagogy Program</span>
            </a>

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
            </header>
        </div>
    )
}

export default Navbar;
