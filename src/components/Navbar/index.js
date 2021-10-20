import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
    <Navbar collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand href="/" className="ms-5 logo">PIANO PEDAGOGY<br/><span>Faculty of Music, University of Toronto</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="me-5"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="text-dark"
                style={{ maxHeight: '200px' }}
                navbarScroll
                >
                <Nav.Link exact activeClassName="active" as={NavLink} to="/" eventKey="1">Home</Nav.Link>
                <Nav.Link activeClassName="active" as={NavLink} to="/degrees" eventKey="2">Programs</Nav.Link>
                <Nav.Link activeClassName="active" as={NavLink} to="/people" eventKey="3">People</Nav.Link>
                <Nav.Link activeClassName="active" as={NavLink} to="/media" eventKey="4">Watch &amp; Listen</Nav.Link>
                <Nav.Link activeClassName="active" as={NavLink} to="/teacherportal" eventKey="5">Teacher Portal</Nav.Link>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}


export default Navigation;
