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
    <h1 className='selenah1' style={{color:'#FF7861'}}>Noogy</h1>
    <h2 className='selenah2' style={{color:'white'}}>Noogy has the high energy of a classic UK punk band with blend of dallas thrashmetal. </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Teen Idol</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=P6S5pSlASOk'/>
          <div className="accordion" >
        {teenIdolAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Grandmas House</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=jPxtTr5czsk'/>
        <div className="accordion" >
      {teenIdolAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> 2017</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=TQXbmh5NZG8'/>
        <div className="accordion" >
      {teenIdolAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> ACAB</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=mW5BN9MHDlQ'/>
        <div className="accordion" >
      {teenIdolAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    
    
  </Carousel>
  </>
  )
}

export default NoogyCarousel