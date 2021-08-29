import React from 'react'
import './Header.css'
import Navigation from '../Navbar'

const Header = () => {
    return (
        <header className="navigation d-flex flex-wrap justify-content-center align-items-end py-3">
            <a href="/" className="d-flex flex-column align-items-start mb-3 mb-md-0 me-md-auto text-dark">
                <span className="fs-3">University of Toronto <br/>Piano Pedagogy Program</span>
            </a>
            <a href="https://music.utoronto.ca/applying-auditions.php" target="_blank" rel="noreferrer" className="apply-button">APPLY NOW</a>
            <Navigation/>
        </header>
    )
}



export default Header
