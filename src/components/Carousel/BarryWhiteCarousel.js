import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { youSexyThingAccordionData
          } from '../utils/barryWhiteContent'


let color = '#189AB4'
const BarryWhiteCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#B30A14'}}>Barry White</h1>
    <h2 className='selenah2' style={{color:'#B30A14'}}> </h2>

  <Carousel>

      <CarouselItem>
        <h3 className='selenah6' style={{color:'#C51313'}}> You Sexy Thing</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=aOl4oeHZnBk'/>
          <div className="accordion" >
        {youSexyThingAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#D72058" borderColor2="#D72058" backgroundColor="#B61059" backgroundColorContent="#B61059" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      
    
  </Carousel>
  </>
  )
}

export default BarryWhiteCarousel

