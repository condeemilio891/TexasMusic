import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { allMyExesLiveInTexasAccordionData } from '../utils/georgeContent'


let color = '#189AB4'
const JanisCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#7380A2'}}>Janis Joplin</h1>
    <h2 className='selenah2' style={{color:'#9B9BA1'}}> </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#7380A2'}}> #1. Me and Bobby Mcgee</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=sfjon-ZTqzU'/>
          <div className="accordion" >
        {allMyExesLiveInTexasAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#7F6451" borderColor2="#7F6451" backgroundColor="#9B9BA1" backgroundColorContent="#BCADA1" color="#312826" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default JanisCarousel