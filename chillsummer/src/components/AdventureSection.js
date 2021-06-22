import React from 'react'
import {Card,CardGroup} from 'react-bootstrap';

const AdventureSection = () => {
    return (
   
     <section id="explore"className="adventure-section" style={{color:"white"}}>
         <h2 className="section-heading">Explore More</h2>
        <CardGroup style={{backgroundColor: 'white' }}>
  <Card style={{marginLeft: '0.25rem' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
    <Card.Body>
      <Card.Title>Florida Beach</Card.Title>
      <Card.Text>
      Florida is the southeasternmost U.S. state, with the Atlantic on one side and the Gulf of Mexico on the other. It has hundreds of miles of beaches. The city of Miami is known for its Latin-American cultural influences and notable arts scene, as well as its nightlife, especially in upscale South Beach.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 1 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginLeft: '0.25rem' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
    <Card.Body>
      <Card.Title>Miami Beach</Card.Title>
      <Card.Text>
      Miami Beach is a south Florida island city, connected by bridges to mainland Miami. Wide beaches stretch from North Shore Open Space Park, past palm-lined Lummus Park to South Pointe Park.The southern end, South Beach, is known for its international cachet with models and celebrities.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 2 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{marginLeft: '0.25rem',marginRight: '0.25rem' }}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Kentucky Beach</Card.Title>
      <Card.Text>
      Kentucky is a southeastern state bounded by the Ohio River in the north and the Appalachian Mountains in the east, with Frankfort the state capital. The state's largest city, Louisville, is home to the Kentucky Derby, the renowned horse race held at Churchill Downs on the first Saturday in May.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </section>



   )
}

export default AdventureSection
