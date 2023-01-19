import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { teenIdolAccordionData
          } from '../utils/noogyContent'


let color = '#189AB4'
const GhostlandCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#FF7861'}}>Ghostland Observatory</h1>
    <h2 className='selenah2' style={{color:'white'}}>sda </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Give Me the Beat</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=-T7ez6dzIUA'/>
          <div className="accordion" >
        {teenIdolAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Sad Sad City</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=-T7ez6dzIUA'/>
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

export default GhostlandCarousel