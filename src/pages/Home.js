import React from 'react';
import { ChevronDown } from 'react-bootstrap-icons'

const Home = () => {
    return (
        <>
        <section className="hero">
            <h1>UNIVERSITY OF TORONTO <br/> PIANO PEDAGOGY</h1>
            <a href="#philosophy"> 
                <ChevronDown className="chevron"/>
            </a>
        </section>

        <section className="philosophy" id={"philosophy"}>
            <h2>Our Philosophy</h2>
            <p>Piano Pedagogy at the University of Toronto is 
                an innovative program, which combines the strengths of 
                the Piano Performance department, the Music Education 
                research area, and the new Pedagogy seminar and teaching 
                practicum offerings.
            </p>
        </section>

        <section className="discover">
            <div>
                <h3>Our Programs</h3>
                <img 
                src={require(`../assets/images/FrontPage/walterhall.jpeg`).default}
                alt={"Walter Hall"}
                />
            </div>
            <div>
                <h3>Our People</h3>
                <img 
                src={require(`../assets/images/FrontPage/midori.jpeg`).default}
                alt={"Midori Koga"}
                />
            </div>
            <div>
                <h3>Study with Us</h3>
                <img 
                src={require(`../assets/images/FrontPage/utso.jpeg`).default}
                alt={"University of Toronto Symphony Orchestra"}
                />
            </div>
        </section>
        </>
    )
}

export default Home;
