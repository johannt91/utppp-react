import React from 'react'

const Navbar = () => {
    return (
        <div class="container">
            <header className="d-flex flex-wrap justify-content-center align-items-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex flex-column align-items-start mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-5">University of Toronto <br/>Piano Pedagogy Program</span>
                {/* <span className="fs-5">Piano Pedagogy Program</span> */}
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Programs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">People</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Watch &amp; Listen</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Teacher Portal</a></li>
            </ul>
            </header>
        </div>
    )
}

export default Navbar;
