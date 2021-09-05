import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-text">
                <div className="footer-links">
                    <div className="footer-links-column">
                    <Link to="/">Home</Link>
                    <Link to="/programs">Programs</Link>
                    <Link to="/people">Our People</Link> 
                    </div>
                    <div className="footer-links-column">
                    <Link to="/media">Watch &amp; Listen</Link>
                    <Link to="/teacherportal">Teacher Portal</Link> 
                    </div>
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
                    <address>
                        Piano Pedagogy, Faculty of Music <br/>
                        Edward Johnson Building <br/>
                        80 Queen's Park
                    </address>
                </div>
            </div>
            
            <div className="footer-brand">
                <span>PIANO PEDAGOGY <br/> UNIVERSITY OF TORONTO </span>
            </div>
        </footer>
    )
}

export default Footer
