import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { allGasNoBrakesAccordionData,jadeWinsAccordionData,pressedAccordionData,getItAccordionData } from '../utils/bigJadeContent'



const BigJadeCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#59E255'}}> Big Jade</h1>
    <h2 className='selenah2' style={{color:'#59E255'}}>One thing that Big Jade brings to the table is authentic individuality.
    Jade Refused to sign with rapper Offset after being told to get plastic surgery.</h2>

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
      
      <h3 className='selenah6' style={{color:'#59E255'}}> No Hook </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=YBBe5aNL-1I'/>
        <div className="accordion" >
      {allGasNoBrakesAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#59E255" borderColor2="#59E255" backgroundColor="#45693E" backgroundColorContent="#97A3A9" color="#59E255" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#59E255'}}> Gucci Bag </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=kEQLm4g9kFc'/>
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