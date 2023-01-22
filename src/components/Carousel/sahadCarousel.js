import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player/youtube'
import Accordion from '../Accordion/Accordion'
import { blueVelvetAccordianData,alwaysOnMyMindAccordianData,clementineTreeAccordianData,seventeenAccordianData,
pinkJagTreeAccordianData,ladyBirdAccordianData,buonaseraAccordianData, runAccordianData } from '../utils/sahadContent'


const SahadCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#ffffff'}}>Daniel Sahad</h1>
    <h2 className='selenah2' style={{color:'#FFFFFF'}}> Nané's lead singer, Daniel 
    Sahad, has range. His soulful voice swings achieving Prince-like falseto's 
   and dips into deep barrotone notes. This results in a well balanced experience for fans of funk and soul.
    
     
   </h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> Clementine Tree</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=oduElbJDfHw' 
        width='40%'
        />
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {clementineTreeAccordianData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#ffffff" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#189AB4'}}> Blue Velvet </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=uG1onm9JXU0'/>
          <div className="accordion" style={{color:'#D4F1F4'}} >
        {blueVelvetAccordianData.map(({ title, content }) => (
         <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#ffffff" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}>  Always on my Mind </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=buTfqkL2W04'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {alwaysOnMyMindAccordianData.map(({ title, content }) => (
         <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#ffffff" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}>  Seventeen </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=5HKhip5GLIs'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {seventeenAccordianData.map(({ title, content }) => (
        <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#ffffff" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}>  Pink Jag </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=73ifam0ryY8'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {pinkJagTreeAccordianData.map(({ title, content }) => (
      <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#ffffff" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}>  Lady Bird </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Rg-sJwOwP1s'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {ladyBirdAccordianData.map(({ title, content }) => (
    <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#ffffff" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}>  Buona Sera </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=4Bkjn4hK0w8'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {buonaseraAccordianData.map(({ title, content }) => (
   <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#ffffff" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}>  Run</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=xgSZTeO0XM8'/>
        <div className="accordion" style={{color:'#D4F1F4'}} >
      {runAccordianData.map(({ title, content }) => (
            <Accordion style={{color:'#D4F1F4'}} borderColor="#c9c19f" borderColor2="#630330" color="#ffffff" backgroundColorContent="#acacde" backgroundColor="#acacde" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>



    
  </Carousel>
  </>
  )
}

export default SahadCarousel