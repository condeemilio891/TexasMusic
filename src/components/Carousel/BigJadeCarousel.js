import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { allGasNoBrakesAccordionData } from '../utils/bigJadeContent'



const BigJadeCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#59E255'}}> Big Jade</h1>
    <h2 className='selenah2' style={{color:'#59E255'}}> The Ferocity of Big Jades Flow could take on all of Three Six Mafia. </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#59E255'}}> #1. All Gas No Brakes </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=qH1B_TTxOjM&ab_channel=BigJade'/>
          <div className="accordion" >
        {allGasNoBrakesAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default BigJadeCarousel