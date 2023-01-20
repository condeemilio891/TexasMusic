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
    <h1 className='selenah1' style={{color:'#FF7861'}}> A Giant Dog</h1>
    <h2 className='selenah2' style={{color:'#9B9BA1'}}> The blending of psychedlia and punk seem like a bad combination until A Giant Dog Plays</h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Sleep When Dead</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=FxLVO3XBWLc'/>
        <div className="accordion" >
      {sleepWhenDeadAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Rollercoaster</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=eH9WhZLvHYY'/>
          <div className="accordion" >
        {rollercoasterAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> I'll Come Crashing</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=FxLVO3XBWLc'/>
        <div className="accordion" >
      {illcomecrashingAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Photograph</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=O5CO6og5lA0'/>
        <div className="accordion" >
      {photographAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> ChatterTeeth</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=U80qYa3XWYU'/>
        <div className="accordion" >
      {chatterteethAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
  
    
  </Carousel>
  </>
  )
}

export default AGiantDogCarousel