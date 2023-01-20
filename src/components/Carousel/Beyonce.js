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
    <h1 className='selenah1' style={{color:'#FF7861'}}>Beyonce</h1>
    <h2 className='selenah2' style={{color:'white'}}>Beyonce</h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Crazy In Love</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=5bnxJnYiMwk'/>
        <div className="accordion" >
      {crazyInLoveAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Irreplacable</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=2EwViQxSJJQ'/>
        <div className="accordion" >
      {irreplaceableAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Love on top</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Ob7vObnFUJc'/>
          <div className="accordion" >
        {loveOnTopAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Single Ladies</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=4m1EFMoRFvY'/>
        <div className="accordion" >
      {singleLadiesAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Beautiful Liar</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=QrOe2h9RtWI'/>
        <div className="accordion" >
      {beautifulLiarAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#F0AC25" borderColor2="#F0AC25" backgroundColor="#FF7861" backgroundColorContent="#FF7861" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    
  </Carousel>
  </>
  )
}

export default BeyonceCarousel