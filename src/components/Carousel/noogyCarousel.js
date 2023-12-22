import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { teenIdolAccordionData
          } from '../utils/noogyContent'


let color = '#189AB4'
const NoogyCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#1560BD'}}>Noogy</h1>
    <h2 className='selenah2' style={{color:'white'}}>Noogy has the high energy of a classic UK punk band with a blend of dallas thrashmetal. </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Teen Idol</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=P6S5pSlASOk' playsinline/>
          <div className="accordion" >
        {teenIdolAccordionData.map(({ id, title, content }) => (
          <Accordion borderColor="#3B6DC2" borderColor2="#3B6DC2" backgroundColor="#000080" backgroundColorContent="#000080" color="#ffffff" key={id} title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Grandmas House</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=jPxtTr5czsk' playsinline/>
        <div className="accordion" >
      {teenIdolAccordionData.map(({ id, title, content }) => (
          <Accordion borderColor="#3B6DC2" borderColor2="#3B6DC2" backgroundColor="#000080" backgroundColorContent="#000080" color="#ffffff" key={id} title={title} content={content} />
        ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> 2017</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=TQXbmh5NZG8' playsinline/>
        <div className="accordion" >
      {teenIdolAccordionData.map(({ id, title, content }) => (
          <Accordion borderColor="#3B6DC2" borderColor2="#3B6DC2" backgroundColor="#000080" backgroundColorContent="#000080" color="#ffffff" key={id} title={title} content={content} />
        ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> ACAB</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=mW5BN9MHDlQ' playsinline/>
        <div className="accordion" >
      {teenIdolAccordionData.map(({ id, title, content }) => (
          <Accordion borderColor="#3B6DC2" borderColor2="#3B6DC2" backgroundColor="#000080" backgroundColorContent="#000080" color="#ffffff" key={id} title={title} content={content} />
        ))}
      </div>
    </CarouselItem>
    
    
  </Carousel>
  </>
  )
}

export default NoogyCarousel