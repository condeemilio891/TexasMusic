import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { teenIdolAccordionData
          } from '../utils/noogyContent'


let color = '#189AB4'
const NoogyCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#FF7861'}}>Noogy</h1>
    <h2 className='selenah2' style={{color:'#9B9BA1'}}> </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Teen Idol</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=P6S5pSlASOk'/>
          <div className="accordion" >
        {teenIdolAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
    
  </Carousel>
  </>
  )
}

export default NoogyCarousel