import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { thatWillBeTheDayAccordionData,trueLoveWaysAccordionData  } from '../utils/buddyContent'


const BuddyCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#D4F1F4'}}>#3 Buddy Holly</h1>
    <h2 className='selenah2' style={{color:'#D4F1F4'}}> Buddy Holly's influnce can't be overstated. Not only did The Beatles derive their name from Buddy's band 'The Crickets'
    but their early performances rely heavily on Buddy Holly covers. Buddy also pioneered the 2 guitarist, 1 bassist and 1 drummer lineup that is considered standard today.
   </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#189AB4'}}> #1. That Will Be The Day </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=eq9FCBatl3A&ab_channel=JBProduction'/>
          <div className="accordion" style={{color:'#D4F1F4'}} >
        {thatWillBeTheDayAccordionData.map(({ title, content }) => (
          <Accordion style={{color:'#D4F1F4'}} title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> #2. True Love Ways </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=QjFRHIhSvwc&ab_channel=catman916'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {trueLoveWaysAccordionData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default BuddyCarousel