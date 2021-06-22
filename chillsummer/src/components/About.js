import React from 'react'
import {Row,Col,Container} from "react-bootstrap"

const About = () => {
    return (
        <section id="about"className="section-about" style={{color:"white"}}>
              <h2 className="section-heading">About</h2>
            <Container>
                <Row>
                    <Col>
                    <h4>&#8220; Let us show you the world &#8221;</h4>
                    <p>Our team of travel insiders is obsessed with finding the best things to do everywhere: we travel. From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have something for every kind of traveler. And we are proud to say that after 17 experience-packed years, we are the world leader.</p></Col>
                    <Col><img src="https://i.ibb.co/92j2D2L/chillsummer.png" alt="Chillsummer" style={{width:'600px',marginLeft:'0.25rem' }}/></Col>
                </Row>
                {/* <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row> */}
            </Container>
        </section>
    )
}

export default About
