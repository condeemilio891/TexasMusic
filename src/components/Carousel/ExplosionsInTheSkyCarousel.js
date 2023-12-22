import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { yourHandInMineAccordionData,firstBreathAfterComaAccordionData,theOnlyMomentAccordionData,neverGiveUpAccordionData
          } from '../utils/explosionsInTheSkyContent'


let color = '#189AB4'
const ExplosionsInTheSkyCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#C0C0C0'}}>Explosions In The Sky</h1>
    <h2 className='selenah2' style={{color:'#FFFFFF'}}>Creating moving soundtracks for movies like Lone Survivor and shows like Friday Night Lights,
    this quartet has mastery over the theming and patience.  </h2>

  <Carousel><CarouselItem>
      
      <h3 className='selenah6' style={{color:'#DC1D44'}}> First Breath After Coma</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=aznXne3juPk' playsinline/>
        <div className="accordion" >
      {firstBreathAfterComaAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#26f7fd" backgroundColorContent="#26f7fd" color="#000000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#DC1D44'}}> Your Hand In Mine</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=cdiY6kijYHE' playsinline/>
          <div className="accordion" >
        {yourHandInMineAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#26f7fd" backgroundColorContent="#26f7fd" color="#000000" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#DC1D44'}}> The Only Moment We're Alone</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=tCzzd3BwLAc' playsinline/>
        <div className="accordion" >
      {theOnlyMomentAccordionData.map(({ title, content }) => (
      <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#26f7fd" backgroundColorContent="#26f7fd" color="#000000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#DC1D44'}}> Never, Never Give Up</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Gh5s_mPMuWU' playsinline/>
        <div className="accordion" >
      {neverGiveUpAccordionData.map(({ title, content }) => (
 <Accordion borderColor="#000000" borderColor2="#000000" backgroundColor="#26f7fd" backgroundColorContent="#26f7fd" color="#000000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
  
    
  </Carousel>
  </>
  )
}

export default ExplosionsInTheSkyCarousel