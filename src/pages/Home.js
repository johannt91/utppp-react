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
        <div className="video">
            <div>
                <iframe src={"https://player.vimeo.com/video/350799297?h=667ed0ea4f&title=0&byline=0&portrait=0"} title="Midori Koga's Teaching studio" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
            

        <section className="discover">

        </section>
        </>
    )
}

export default Home;
