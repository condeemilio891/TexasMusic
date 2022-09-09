import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { myChurchAccordionData } from '../utils/marenContent'


let color = '#189AB4'
const MarenCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#D4F1F4'}}>#2 Maren Morris</h1>
    <h2 className='selenah2' style={{color:'#D4F1F4'}}> Releasing her debut album at 15 after only taking 3 years to learn guitar
    Maren Morris's country style blends perfectly when she decides to add elements of Pop, House and even Soul.  </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#189AB4'}}> #1. My Church </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=MiDJOrOFu1k&ab_channel=MarenMorrisVEVO'/>
          <div className="accordion" >
        {myChurchAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default MarenCarousel