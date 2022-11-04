import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { youSexyThingAccordionData
          } from '../utils/barryWhiteContent'


let color = '#189AB4'
const ExplosionsInTheSkyCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#C0C0C0'}}>Explosions In The Sky</h1>
    <h2 className='selenah2' style={{color:'#FFFFFF'}}>Creating moving soundtracks for movies like Lone Survivor and shows like Friday Night Lights,
    this quartet have mastery over the theming and patience.  </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#DC1D44'}}> Your Hand In Mine</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=cdiY6kijYHE'/>
          <div className="accordion" >
        {youSexyThingAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
    
  </Carousel>
  </>
  )
}

export default ExplosionsInTheSkyCarousel