import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { Facebook,Twitter,Instagram,Slack,Youtube,Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <section className="section-footer"style={{color:"white"}}>
            <Container fluid>
             
                     <Row>
                         <Col><p>Website design and maintained by Sohail Copyright all right reserved  2021<sup>&copy;</sup></p></Col>
                         <Col><h6>Chillsummer</h6></Col>
                         <Col>
                             <div>
                             <li><a href="#" title="facebook"><Facebook color="white" size={30} /></a></li>
                              <li><a href="#" title="twitter"><Twitter color="white" size={30} /></a></li>
                              <li><a href="#"title="instagram"><Instagram color="white" size={30} /></a></li>
                              <li><a href="#" title="youtube">< Youtube color="white" size={30} /></a></li>
                              <li><a href="#"title="whatsapp"><Whatsapp color="white" size={30} /></a></li>
                              <li><a href="#" title="slack"><Slack color="white" size={30} /></a></li>
                             </div>
                             
                        </Col>
                    </Row>
            </Container>
        </section>
    )
}

export default Footer
