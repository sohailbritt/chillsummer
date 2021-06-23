import {useState} from 'react'
import {Button} from 'react-bootstrap'

const Hero = () => {
   const video=[ vid1,vid2,vid3 ]
  function refresh(){
   
     window.var = Math.floor(Math.random() *  4);
  
    }
    window.onbeforeunload = refresh();


 

    return (
        <section className='hero-section-background'>
            <video className='hero-background-video' autoPlay loop muted>
             <source src={video[window.var]} type='video/mp4' />
            </video>
            <Button ClassName="btn" href="#explore"size="lg" variant="outline-secondary">Explore More</Button>{' '}
       </section>
    )
}


export default Hero
