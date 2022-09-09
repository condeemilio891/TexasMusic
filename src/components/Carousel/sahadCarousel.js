import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { blueVelvetAccordianData,alwaysOnMyMindAccordianData,clementineTreeAccordianData } from '../utils/sahadContent'


const SahadCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#D4F1F4'}}>Featured Daniel Sahad</h1>
    <h2 className='selenah2' style={{color:'#D4F1F4'}}> Daniel Sahad's unique, soulful music demonstrated why 
    the Black Pumas chose Nane as their protégé.
    Sahad has range: In his ability to falseto, In his style and in the diversity of emotions he makes you feel.
    
     
   </h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> #1.Clementine Tree</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=oduElbJDfHw'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {clementineTreeAccordianData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#189AB4'}}> #2. Blue Velvet </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=uG1onm9JXU0'/>
          <div className="accordion" style={{color:'#D4F1F4'}} >
        {blueVelvetAccordianData.map(({ title, content }) => (
          <Accordion style={{color:'#D4F1F4'}} title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> #3. Always on my Mind </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=buTfqkL2W04'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {alwaysOnMyMindAccordianData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>


    
  </Carousel>
  </>
  )
}

export default SahadCarousel