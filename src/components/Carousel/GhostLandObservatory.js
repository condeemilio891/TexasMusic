import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { sadCityAccordionData, giveMeTheBeatAccordionData, strangerLoverAccordionData,sometimesAccordionData
          } from '../utils/ghostlandContent'


let color = '#189AB4'
const GhostlandCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#87CEEB'}}>Ghostland Observatory</h1>
    <h2 className='selenah2' style={{color:'white'}}> </h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Sad Sad City</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Ij0-IdQhnyg' playsinline/>
        <div className="accordion" >
      {sadCityAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#330066" backgroundColorContent="#330066" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Give Me the Beat</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=VRFehrdIb6c' playsinline/>
          <div className="accordion" >
        {giveMeTheBeatAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#330066" backgroundColorContent="#330066" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Sometimes</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=xVKx0xM5tjk' playsinline/>
        <div className="accordion" >
      {sometimesAccordionData.map(({ title, content }) => (
 <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#330066" backgroundColorContent="#330066" color="#D2C0B8" title={title} content={content} />
      ))}-
      </div>
    </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Stranger Lover</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=tMrNQNcI5TE' playsinline/>
        <div className="accordion" >
      {strangerLoverAccordionData.map(({ title, content }) => (
       <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#330066" backgroundColorContent="#330066" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
 
   
    
  </Carousel>
  </>
  )
}

export default GhostlandCarousel