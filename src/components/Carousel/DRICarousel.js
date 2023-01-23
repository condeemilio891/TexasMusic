import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import {trashardAccordionData, hookedDoomAccordionData,KillTheWordsAccordionData,iDontNeedSocietyAccordionData,acidRainAccordionData,
suitAndTieGuyAccordionData,beneathTheWheelAccordionData,violentPacificationAccordionData,idRatherBeSleepingAccordionData,
asSeenOnTVAccordionData} from "../utils/DRIContent"


const DRICarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#7c0000'}}> Dirty Rotten Imbeciles</h1>
    <h2 className='selenah2' style={{color:'#FFFFFF'}}>DRI's style, known as crossover, switchs between the tight, 
    stripped down and fast paced instrumentation of the Punk Genre and at times slows down to long distorted metal riffs. The Transitions are seemless. 
      The adrenaline DRI invokes makes for a great moshpit and inspired the GTA-V and DOOM soundtracks.</h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> I Dont Need Society </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=farFbNMNJm8' playsinline/>
        <div className="accordion" >
      {iDontNeedSocietyAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> Acid Rain</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=YummFZ70WkY' playsinline/>
        <div className="accordion" >
      {acidRainAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> Kill the Words </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=q76pqSXcstE' playsinline/>
        <div className="accordion" >
      {KillTheWordsAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#f80000'}}> Thrashard </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=VirLJjG31kQ&ab_channel=D.R.I.-Topic' playsinline/>
          <div className="accordion" >
        {trashardAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>

      
  
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> Suit and Tie Guy</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=mid1LPj4Y9M' playsinline/>
        <div className="accordion" >
      {suitAndTieGuyAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> Beneath The Wheel </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=IxR1xluLvAs' playsinline/>
        <div className="accordion" >
      {beneathTheWheelAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> At Doom's Gate by e1m1 </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=YNQ5wMc7LZ8' playsinline/>
        <div className="accordion" >
      {hookedDoomAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> Violent Pacification </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=o71tSJ0aYXM' playsinline/>
        <div className="accordion" >
      {violentPacificationAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> Id Rather Be Sleeping </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=hYJVqlNNrAE' playsinline/>
        <div className="accordion" >
      {idRatherBeSleepingAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#f80000'}}> As Seen on TV</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Bj2gnAug_i0' playsinline/>
        <div className="accordion" >
      {asSeenOnTVAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#f80000" borderColor2="#f80000" backgroundColor="#7c0000" backgroundColorContent="#000000" color="#f80000" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>


    
  </Carousel>
  </>
  )
}

export default DRICarousel