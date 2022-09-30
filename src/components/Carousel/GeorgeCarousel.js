import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { allMyExesLiveInTexasAccordionData,amarilloByMorningTexasAccordionData,youLookSoGoodInLoveAccordionData,cowBoyRidesAwayAccordionData,
  theChairAccordionData,
 } from '../utils/georgeContent'


let color = '#189AB4'
const GeorgeCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#7380A2'}}> George Strait</h1>
    <h2 className='selenah2' style={{color:'#9B9BA1'}}> </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#7380A2'}}> All My Exes Live In Texas </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=7KOKM46MnhE&ab_channel=JoeMar'/>
          <div className="accordion" >
        {allMyExesLiveInTexasAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#7F6451" borderColor2="#7F6451" backgroundColor="#9B9BA1" backgroundColorContent="#BCADA1" color="#312826" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#7380A2'}}> You Look So Good In Love </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=sAESfPQdq0M'/>
        <div className="accordion" >
      {youLookSoGoodInLoveAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#7F6451" borderColor2="#7F6451" backgroundColor="#9B9BA1" backgroundColorContent="#BCADA1" color="#312826" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#7380A2'}}> Amarillo by Morning </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=FbVISS-lEAc'/>
        <div className="accordion" >
      {amarilloByMorningTexasAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#7F6451" borderColor2="#7F6451" backgroundColor="#9B9BA1" backgroundColorContent="#BCADA1" color="#312826" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#7380A2'}}> The Cowboy Rides Away </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=4AnTe663mrY'/>
        <div className="accordion" >
      {cowBoyRidesAwayAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#7F6451" borderColor2="#7F6451" backgroundColor="#9B9BA1" backgroundColorContent="#BCADA1" color="#312826" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#7380A2'}}>The Chair</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=_Nh-NsqBsGE'/>
        <div className="accordion" >
      {theChairAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#7F6451" borderColor2="#7F6451" backgroundColor="#9B9BA1" backgroundColorContent="#BCADA1" color="#312826" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>


    
  </Carousel>
  </>
  )
}

export default GeorgeCarousel