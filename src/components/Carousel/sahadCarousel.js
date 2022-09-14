import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { blueVelvetAccordianData,alwaysOnMyMindAccordianData,clementineTreeAccordianData } from '../utils/sahadContent'


const SahadCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#189AB4'}}>Featured Daniel Sahad</h1>
    <h2 className='selenah2' style={{color:'#c9c19f'}}> Daniel 
    Sahad has range and and managers to hit extremes at no cost of balance. Sahad's voice is delicate yet powerful. Poignant and precise.  
    
     
   </h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> Clementine Tree</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=oduElbJDfHw'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {clementineTreeAccordianData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#b8336a" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#189AB4'}}> Blue Velvet </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=uG1onm9JXU0'/>
          <div className="accordion" style={{color:'#D4F1F4'}} >
        {blueVelvetAccordianData.map(({ title, content }) => (
          <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#b8336a" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}>  Always on my Mind </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=buTfqkL2W04'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {alwaysOnMyMindAccordianData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#b8336a" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>


    
  </Carousel>
  </>
  )
}

export default SahadCarousel