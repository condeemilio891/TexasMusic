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
    <h1 className='selenah1' style={{color:'#FF7861'}}>Barry White</h1>
    <h2 className='selenah2' style={{color:'#9B9BA1'}}> </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> You Sexy Thing</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=37FGwDMMZEg'/>
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

export default BarryWhiteCarousel

