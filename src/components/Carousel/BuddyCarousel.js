import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { thatWillBeTheDayAccordionData,trueLoveWaysAccordionData,
  heartbeatAccordionData,itDoesntMatterAnymoreAccordionData,sendMeSomeLovinAccordionData,
  cryingWaitingHopingAccordionData, everydayAccordionData,blueSuedeShoesAccordionData,
  valleyOfTearsAccordionData,wordsOfLoveAccordionData} from '../utils/buddyContent'


const BuddyCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#E45826'}}>Buddy Holly</h1>
    <h2 className='selenah2' style={{color:'#E45826'}}> Buddy Holly's influnce can't be overstated. Not only did The Beatles derive their name from Buddy's band 'The Crickets'
    but their early performances rely heavily on Buddy Holly covers. Buddy also pioneered the 2 guitarist, 1 bassist and 1 drummer lineup that is considered standard today.
   </h2>

  <Carousel>

  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}>  True Love Ways </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=QjFRHIhSvwc&ab_channel=catman916'/>
        <div className="accordion" >
      {trueLoveWaysAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> Send Me Some Loving</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=A0chkCXzTSY'/>
        <div className="accordion" >
      {sendMeSomeLovinAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    
    
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> That Will Be The Day </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=eq9FCBatl3A&ab_channel=JBProduction'/>
        <div className="accordion" >
      {thatWillBeTheDayAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> Everyday</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=GEE2TyadgEM'/>
        <div className="accordion" >
      {everydayAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> HeartBeat</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=orD3dQRNj50'/>
        <div className="accordion" >
      {heartbeatAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> It Doesn't Matter Anymore</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=ygBo9Fmq5l4'/>
        <div className="accordion" >
      {itDoesntMatterAnymoreAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> Crying Waiting Hoping</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=hsjI7ekciZs'/>
        <div className="accordion" >
      {cryingWaitingHopingAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> Blue Suede Shoes</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=88Vr3ccFDZQ'/>
        <div className="accordion" >
      {blueSuedeShoesAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> Valley of Tears</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=XmgIqnmgMHg'/>
        <div className="accordion" >
      {valleyOfTearsAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#FFD700'}}> Words of Love</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=ZcuojSU_hOY'/>
        <div className="accordion" >
      {wordsOfLoveAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#FFD700" borderColor2="#FFD700" color='#FFD700' backgroundColor="#1B1A17" backgroundColorContent="#1B1A17" title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    

    
  </Carousel>
  </>
  )
}

export default BuddyCarousel