import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { crazyInLoveAccordionData,irreplaceableAccordionData,loveOnTopAccordionData,singleLadiesAccordionData,beautifulLiarAccordionData
          } from '../utils/beyonceContent'


let color = '#189AB4'
const BeyonceCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#D72058'}}>Beyonce</h1>
    <h2 className='selenah2' style={{color:'#D72058'}}> What can I say that everybody doesn't know. Beyonce has 
    Great dance routines, songs and music videos.</h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#EE9E1B'}}> Crazy In Love</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=5bnxJnYiMwk' playsinline/>
        <div className="accordion" >
      {crazyInLoveAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#D72058" backgroundColorContent="#D72058" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#EE9E1B'}}> Irreplacable</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=2EwViQxSJJQ' playsinline/>
        <div className="accordion" >
      {irreplaceableAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#D72058" backgroundColorContent="#D72058" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#EE9E1B'}}> Love on top</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Ob7vObnFUJc' playsinline/>
          <div className="accordion" >
        {loveOnTopAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#D72058" backgroundColorContent="#D72058" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#EE9E1B'}}> Single Ladies</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=4m1EFMoRFvY' playsinline/>
        <div className="accordion" >
      {singleLadiesAccordionData.map(({ title, content }) => (
    <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#D72058" backgroundColorContent="#D72058" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#EE9E1B'}}> Beautiful Liar</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=QrOe2h9RtWI' playsinline/>
        <div className="accordion" >
      {beautifulLiarAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#D72058" backgroundColorContent="#D72058" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    
  </Carousel>
  </>
  )
}

export default BeyonceCarousel