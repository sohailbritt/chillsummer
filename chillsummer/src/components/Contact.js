import React from 'react'
import {Row,Col,Container,Form,Button} from "react-bootstrap"

const Contact = () => {
    return (
        <section id="contact"className="section-contact"style={{color:"white"}} >
                <h2 className="section-heading">Contact Us</h2>
         <Container>
             <Row>
                <Col>
                <img src="https://i.ibb.co/fGmqDKD/undraw-Profile-data-re-v81r.png" alt="Contact Us" style={{width:"600px",height:"360px",marginTop:"5%",borderRadius:"6px"}} /></Col>
                <Col style={{marginTop:"2%",marginLeft:"2rem"}} >   
                                <Container fluid>
                                    <Row>
                                      <Col>

                                      <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Please enter your name" />
                                            </Form.Group>
                                        </Form>  
                                      <Form >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Please enter your email" />
                                            </Form.Group>
                                        </Form>   
                                        <Form >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control type="Phone" placeholder="Please enter your Phone no." />
                                            </Form.Group>
                                        </Form> 
                                        <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Please type your Message" />
                                        </Form.Group>
                                        </Form>
                                        <Button variant="outline-light" size="md" style={{width:"95%",marginTop:"220px"}}>
                                            Submit
                                        </Button>
                                        </Col>
                                    </Row>
                                 </Container>
                
                </Col>
           </Row>
        </Container>
        </section>
       
    )
}

export default Contact
