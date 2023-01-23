import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player/youtube'
import Accordion from '../Accordion/Accordion'
import { blueVelvetAccordianData,alwaysOnMyMindAccordianData,clementineTreeAccordianData,seventeenAccordianData,
pinkJagTreeAccordianData,ladyBirdAccordianData,buonaseraAccordianData, runAccordianData } from '../utils/sahadContent'


const SahadCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#D1FFBD'}}>Daniel Sahad</h1>
    <h2 className='selenah2' style={{color:'#D1FFBD'}}> Nané's lead singer, Daniel 
    Sahad, has range. His soulful voice swings in extremes, achieving Prince-like falseto's 
   and dipping into deep barrotone notes. This results in a well balanced experience for fans of funk and soul.
    
     
   </h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#D1FFBD'}}> Clementine Tree</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=oduElbJDfHw' 
        playsinline
        />
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {clementineTreeAccordianData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} borderColor="#006400" borderColor2="#006400" color="#ffffff" backgroundColorContent="#228B22" backgroundColor="#228B22" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#D4F1F4'}}> Blue Velvet </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=uG1onm9JXU0'
          playsinline/>
          <div className="accordion" style={{color:'#D4F1F4'}} >
        {blueVelvetAccordianData.map(({ title, content }) => (
         <Accordion style={{color:'#D4F1F4'}} borderColor="#006400" borderColor2="#006400" color="#ffffff" backgroundColorContent="#228B22" backgroundColor="#228B22" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#D1FFBD'}}>  Always on my Mind </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=buTfqkL2W04' playsinline/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {alwaysOnMyMindAccordianData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} borderColor="#006400" borderColor2="#006400" color="#ffffff" backgroundColorContent="#228B22" backgroundColor="#228B22" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#D1FFBD'}}>  Seventeen </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=5HKhip5GLIs' playsinline/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {seventeenAccordianData.map(({ title, content }) => (
       <Accordion style={{color:'#D4F1F4'}} borderColor="#006400" borderColor2="#006400" color="#ffffff" backgroundColorContent="#228B22" backgroundColor="#228B22" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#D1FFBD'}}>  Pink Jag </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=73ifam0ryY8' playsinline/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {pinkJagTreeAccordianData.map(({ title, content }) => (
 <Accordion style={{color:'#D4F1F4'}} borderColor="#006400" borderColor2="#006400" color="#ffffff" backgroundColorContent="#228B22" backgroundColor="#228B22" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#D1FFBD'}}>  Lady Bird </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Rg-sJwOwP1s' playsinline/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {ladyBirdAccordianData.map(({ title, content }) => (
     <Accordion style={{color:'#D4F1F4'}} borderColor="#006400" borderColor2="#006400" color="#ffffff" backgroundColorContent="#228B22" backgroundColor="#228B22" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#D1FFBD'}}>  Buona Sera </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=4Bkjn4hK0w8' playsinline/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {buonaseraAccordianData.map(({ title, content }) => (
  <Accordion style={{color:'#D4F1F4'}} borderColor="#006400" borderColor2="#006400" color="#ffffff" backgroundColorContent="#228B22" backgroundColor="#228B22" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#D1FFBD'}}>  Run</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=xgSZTeO0XM8' playsinline/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {runAccordianData.map(({ title, content }) => (
            <Accordion style={{color:'#D4F1F4'}} borderColor="#006400" borderColor2="#006400" color="#ffffff" backgroundColorContent="#228B22" backgroundColor="#228B22" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>



    
  </Carousel>
  </>
  )
}

export default SahadCarousel