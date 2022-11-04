import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { allGasNoBrakesAccordionData,jadeWinsAccordionData,pressedAccordionData,getItAccordionData,demGirldAccordionData,
superGremlinFreeStyleAccordionData,illTellYouWhatAccordionData } from '../utils/bigJadeContent'



const BigJadeCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#59E255'}}> Big Jade</h1>
    <h2 className='selenah2' style={{color:'#FFFFFF'}}>Big Jades Confidence hits hard. Her individualistic themes and non-conformist attitude are authentic 
      made evident by her refusal to sign with a label suggesting she needs plastic surgery.  </h2>
  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#59E255'}}> Jade Wins </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=WN4aTcqXmy4'/>
        <div className="accordion" >
      {jadeWinsAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#59E255'}}> All Gas No Brakes </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=qH1B_TTxOjM&ab_channel=BigJade'/>
          <div className="accordion" >
        {allGasNoBrakesAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#59E255'}}> Big Jade Free Styling </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=yuyCcm2TSDk'/>
        <div className="accordion" >
      {allGasNoBrakesAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#59E255'}}> Pressed </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=xmyvOWWg684'/>
        <div className="accordion" >
      {pressedAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#59E255'}}> Get It </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=HH7S7hrvA7E'/>
        <div className="accordion" >
      {getItAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#59E255'}}> Dem Girlz </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=H77DtT9MqAE'/>
        <div className="accordion" >
      {demGirldAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#59E255'}}>Super Gremlin Freestyle </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=s4UdX2QY-XU'/>
        <div className="accordion" >
      {superGremlinFreeStyleAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#59E255'}}> I'll Tell You What </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=ibLLUVUXzzY'/>
        <div className="accordion" >
      {illTellYouWhatAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>




    
  </Carousel>
  </>
  )
}

export default BigJadeCarousel