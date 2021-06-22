import {useState} from 'react'
import {Button} from 'react-bootstrap'

const Hero = () => {
    const [video,setVideo]=useState([
            
            "https://vod-progressive.akamaized.net/exp=1624364902~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3776%2F17%2F443882065%2F1944356381.mp4~hmac=4ab85881aec55f14c6f925950e1d52fe68aa4a5c807b72763b76d779f840ff6f/vimeo-prod-skyfire-std-us/01/3776/17/443882065/1944356381.mp4?download=1&filename=production+ID%3A5006160.mp4",
        
            "https://vod-progressive.akamaized.net/exp=1624364885~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F529%2F17%2F427648079%2F1854990851.mp4~hmac=f94e659ba9457293b5d51d6451c0e45e3afa876a7d23b59ff5f37d6371963359/vimeo-prod-skyfire-std-us/01/529/17/427648079/1854990851.mp4?download=1&filename=production+ID%3A4611810.mp4",
            
            "https://vod-progressive.akamaized.net/exp=1624364668~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F530%2F17%2F427654991%2F1855027979.mp4~hmac=04d6478d0cf34f34421b61e836b45088b9425712c25da2945ee34d7d4112a880/vimeo-prod-skyfire-std-us/01/530/17/427654991/1855027979.mp4?download=1&filename=production+ID%3A4611986.mp4"

           
])
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
