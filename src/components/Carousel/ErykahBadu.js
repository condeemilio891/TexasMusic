import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { BumpItAccordionData,HoneyAccordionData,RimShotAccordionData,DidntYouKnowAccordionData
          } from '../utils/theErykahContent'


let color = '#189AB4'
const ErykaBaduCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#e8bcf0'}}>Erykah Badu</h1>
    <h2 className='selenah2' style={{color:'#e8bcf0'}}> A trailblazer, Badu mixes elements of neo-traditional, hiphop, jazz and soul. 
    </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#A1045A'}}> Bump it</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=BbVIsYRP5P4' playsinline/>
          <div className="accordion" >
        {BumpItAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#36013f" borderColor2="#36013f" backgroundColor="#CCCCFF" backgroundColorContent="#CCCCFF" color="#ae647f" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Honey</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=C9Gka4eyrrY' playsinline/>
        <div className="accordion" >
      {HoneyAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#36013f" borderColor2="#36013f" backgroundColor="#ae647f" backgroundColorContent="#ae647f" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Didn't Cha Know</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Np21rH7Ldto' playsinline/>
        <div className="accordion" >
      {DidntYouKnowAccordionData.map(({ title, content }) => (
   <Accordion borderColor="#36013f" borderColor2="#36013f" backgroundColor="#ae647f" backgroundColorContent="#ae647f" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Rim Shot</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=OTfa4RQhU4Y' playsinline/>
        <div className="accordion" >
      {RimShotAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#36013f" borderColor2="#36013f" backgroundColor="#ae647f" backgroundColorContent="#ae647f" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    
  </Carousel>
  </>
  )
}

export default ErykaBaduCarousel