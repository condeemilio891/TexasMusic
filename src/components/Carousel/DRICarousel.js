import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import {trashardAccordionData} from "../utils/DRIContent"


const DRICarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#7c0000'}}>#4 Dirty Rotten Imbeciles</h1>
    <h2 className='selenah2' style={{color:'#ba0000'}}>DRI's style, known as crossover, switchs between the tight, stripped down and fast paced instrumentation of the Punk Genre and at times slows down to long distorted metal riffs.
      The adrenaline DRI invokes inspired the GTA-V and DOOM soundtracks and many moshpits.</h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#f80000'}}> #1. Thrashard </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=VirLJjG31kQ&ab_channel=D.R.I.-Topic'/>
          <div className="accordion" >
        {trashardAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#f80000'}}> #2. At Doom's Gate. </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=YNQ5wMc7LZ8'/>
          <div className="accordion" >
        {trashardAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> #3 Kill the Words </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=q76pqSXcstE'/>
        <div className="accordion" >
      {trashardAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default DRICarousel