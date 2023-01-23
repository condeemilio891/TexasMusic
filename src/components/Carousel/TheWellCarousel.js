import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { MortalBonesAccordionData,DeathSongAccordionData,TheRavenAccordionData,thisIsHowTheWorldEndsAccordionData
          } from '../utils/theWellContent'


let color = '#189AB4'
const TheWellCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#878fc6'}}>The Well</h1>
    <h2 className='selenah2' style={{color:'#878fc6'}}> The Well combines the heavy progressive rock sound of a band like Sleep 
    and blends in psychedelic and punk styles </h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#3B6DC2'}}> Mortal Bones</h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=nrPVB8sfPCs' playsinline/>
          <div className="accordion" >
        {MortalBonesAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#36013f" borderColor2="#36013f" backgroundColor="#ae647f" backgroundColorContent="#ae647f" color="#D2C0B8" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> Death Song</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=PFVrAJTYY54' playsinline/>
        <div className="accordion" >
      {DeathSongAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#36013f" borderColor2="#36013f" backgroundColor="#ae647f" backgroundColorContent="#ae647f" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> The Raven</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=oXWBMZOjwyM' playsinline/>
        <div className="accordion" >
      {TheRavenAccordionData.map(({ title, content }) => (
   <Accordion borderColor="#36013f" borderColor2="#36013f" backgroundColor="#ae647f" backgroundColorContent="#ae647f" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#3B6DC2'}}> This Is How the World Ends</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=e5coWmo3Jq4' playsinline/>
        <div className="accordion" >
      {thisIsHowTheWorldEndsAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#36013f" borderColor2="#36013f" backgroundColor="#ae647f" backgroundColorContent="#ae647f" color="#D2C0B8" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    
  </Carousel>
  </>
  )
}

export default TheWellCarousel