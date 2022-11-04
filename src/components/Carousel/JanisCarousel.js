import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { meAndBobbyMcgeeeAccordionData,maybeAccordionData,pieceOfMyHeartAccordionData,KozmicBluesAccordionData,cryBabyAccordionData,
          } from '../utils/janisContent'


let color = '#189AB4'
const JanisCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#FF7861'}}>Janis Joplin</h1>
    <h2 className='selenah2' style={{color:'#FFFFFF'}}> A cultural icon today, it's difficult to believe that
     Janis was nominated for "ugliest man on campus" by some random frat at UT. She showed them. 
     The way her voice alternates from powerful vocals to genuine vulnerabilty and saddness creates an unforgettable blues experience.</h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Me and Bobby Mcgee</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=sfjon-ZTqzU'/>
          <div className="accordion" >
        {meAndBobbyMcgeeeAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Maybe</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=zad3bDnjsII'/>
        <div className="accordion" >
      {maybeAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Piece of My Heart</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=sfjon-ZTqzU'/>
        <div className="accordion" >
      {pieceOfMyHeartAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Kozmic Blues</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=sfjon-ZTqzU'/>
        <div className="accordion" >
      {KozmicBluesAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Cry Baby</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=sfjon-ZTqzU'/>
        <div className="accordion" >
      {cryBabyAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default JanisCarousel