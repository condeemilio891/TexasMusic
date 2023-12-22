import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { JustTheWayYouAreAccordionData,ImSoBlueAccordionData,CantGetEnoughAccordionData,NeverGonnaGiveYouUpAccordionData,PracticeWhatYouPreachAccordionData
          } from '../utils/barryWhiteContent'


let color = '#189AB4'
const BarryWhiteCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#B30A14'}}>Barry White</h1>
    <h2 className='selenah2' style={{color:'#B30A14'}}>The King of the Bedroom. Great choice for anyone looking for a seductive,
    passionate, intimate or romantic atmosphere. Hang on to the one you love! </h2>

  <Carousel>

      <CarouselItem>
        <h3 className='selenah6' style={{color:'#C51313'}}> Can't Get Enough Of Your Love</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=fPMoLEjM_K4' playsinline/>
          <div className="accordion" >
        {CantGetEnoughAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#D72058" borderColor2="#D72058" backgroundColor="#B61059" backgroundColorContent="#B61059" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
        <h3 className='selenah6' style={{color:'#C51313'}}> Practice What You Preach</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=br-Dy3puDoc' playsinline/>
          <div className="accordion" >
        {PracticeWhatYouPreachAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#D72058" borderColor2="#D72058" backgroundColor="#B61059" backgroundColorContent="#B61059" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
        <h3 className='selenah6' style={{color:'#C51313'}}> I'm So Blue And You Are Too</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=0gcZwkMGOQs' playsinline/>
          <div className="accordion" >
        {ImSoBlueAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#D72058" borderColor2="#D72058" backgroundColor="#B61059" backgroundColorContent="#B61059" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
        <h3 className='selenah6' style={{color:'#C51313'}}> Never Gonna Give You Up</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=QQ55ywJwF1Q' playsinline/>
          <div className="accordion" >
        {NeverGonnaGiveYouUpAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#D72058" borderColor2="#D72058" backgroundColor="#B61059" backgroundColorContent="#B61059" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
        <h3 className='selenah6' style={{color:'#C51313'}}> Just the Way You Are</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=gWHkxqPfWQU' playsinline/>
          <div className="accordion" >
        {JustTheWayYouAreAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#D72058" borderColor2="#D72058" backgroundColor="#B61059" backgroundColorContent="#B61059" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
    
  </Carousel>
  </>
  )
}

export default BarryWhiteCarousel

