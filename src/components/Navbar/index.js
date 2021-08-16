import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav">    
                <li className="nav-item nav-link"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li className="nav-item nav-link"><NavLink activeClassName="active" to="/programs">Programs</NavLink></li>
                <li className="nav-item nav-link"><NavLink activeClassName="active" to="/people">People</NavLink></li>
                <li className="nav-item nav-link"><NavLink activeClassName="active" to="/media">Watch &amp; Listen</NavLink></li>
                <li className="nav-item nav-link"><NavLink activeClassName="active" to="/teacherportal">Teacher Portal</NavLink> </li>
            </ul>
        </nav>
    )
}

export default Navbar;
