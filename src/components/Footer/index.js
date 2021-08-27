import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-text">
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/programs">Programs</Link>
                    <Link to="/people">Our People</Link>
                    <Link to="/media">Watch &amp; Listen</Link>
                    <Link to="/teacherportal">Teacher Portal</Link>
                </div>
                <p>
                    We wish to acknowledge this land on which the University of Toronto operates. 
                    For thousands of years it has been the traditional land of the Huron-Wendat, 
                    the Seneca, and the Mississaugas of the Credit. Today, this meeting place is 
                    still the home to many Indigenous people from across Turtle Island and we are 
                    grateful to have the opportunity to work on this land. 
                </p>
                <div className="footer-contact">
                    <span>Contact Us</span>
                </div>
            </div>
            
            <div className="footer-brand">
                <span>PIANO PEDAGOGY <br/> UNIVERSITY OF TORONTO </span>
            </div>
        </footer>
    )
}

export default Footer
