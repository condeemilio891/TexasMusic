import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import {prideAndJoyAccordionData,loveStruckBabyAccordionData } from '../utils/StevieContent'


let color = '#189AB4'
const StevieCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#ae647f'}}>#5 Stevie Ray Vaughan</h1>
    <h2 className='selenah2' style={{color:'#ae647f'}}> Guitar Afficianado Stevie Ray Vaughan's jazzy and funky blues guitar hit like heavy metal while creating a psychedelic atmosphere similar to that of Jimi.</h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#ae647f'}}> #1. Love Struck Baby </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=GlR4HYaCI1M&ab_channel=stevierayvaughnVEVO'/>
          <div className="accordion" >
        {loveStruckBabyAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>

      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> #1. Pride And Joy </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=esVMLLL6Gg4&ab_channel=stevierayvaughnVEVO'/>
        <div className="accordion" >
      {prideAndJoyAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default StevieCarousel