import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { thatWillBeTheDayAccordionData,trueLoveWaysAccordionData  } from '../utils/buddyContent'


const BuddyCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#E45826'}}>#3 Buddy Holly</h1>
    <h2 className='selenah2' style={{color:'#E6D5B8'}}> Buddy Holly's influnce can't be overstated. Not only did The Beatles derive their name from Buddy's band 'The Crickets'
    but their early performances rely heavily on Buddy Holly covers. Buddy also pioneered the 2 guitarist, 1 bassist and 1 drummer lineup that is considered standard today.
   </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#FFD700'}}> #1. That Will Be The Day </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=eq9FCBatl3A&ab_channel=JBProduction'/>
          <div className="accordion" >
        {thatWillBeTheDayAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> #2. True Love Ways </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=QjFRHIhSvwc&ab_channel=catman916'/>
        <div className="accordion" >
      {trueLoveWaysAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default BuddyCarousel