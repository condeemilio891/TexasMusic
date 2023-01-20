import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { sleepWhenDeadAccordionData,rollercoasterAccordionData,illcomecrashingAccordionData,photographAccordionData,chatterteethAccordionData
          } from '../utils/aGiantDogContent'


let color = '#189AB4'
const AGiantDogCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#ffffff'}}> A Giant Dog</h1>
    <h2 className='selenah2' style={{color:'#e75480'}}> Even though
psychedelia and punk have roots in counter-culture they are from different eras and 
    seem tough to mix. A Giant Dog does a great job blending these two anti-establishment fueled styles.</h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ffffff'}}> Sleep When Dead</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=FxLVO3XBWLc'/>
        <div className="accordion" >
      {sleepWhenDeadAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#e75480" backgroundColorContent="#e75480" color="#ffffff" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#ffffff'}}> Rollercoaster</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=eH9WhZLvHYY'/>
          <div className="accordion" >
        {rollercoasterAccordionData.map(({ title, content }) => (
                 <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#e75480" backgroundColorContent="#e75480" color="#ffffff" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ffffff'}}> I'll Come Crashing</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=FxLVO3XBWLc'/>
        <div className="accordion" >
      {illcomecrashingAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#e75480" backgroundColorContent="#e75480" color="#ffffff" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ffffff'}}> Photograph</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=O5CO6og5lA0'/>
        <div className="accordion" >
      {photographAccordionData.map(({ title, content }) => (
       <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#e75480" backgroundColorContent="#e75480" color="#ffffff" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ffffff'}}> ChatterTeeth</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=U80qYa3XWYU'/>
        <div className="accordion" >
      {chatterteethAccordionData.map(({ title, content }) => (
       <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#e75480" backgroundColorContent="#e75480" color="#ffffff" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
  
    
  </Carousel>
  </>
  )
}

export default AGiantDogCarousel