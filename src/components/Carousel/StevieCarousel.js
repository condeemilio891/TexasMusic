import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import {prideAndJoyAccordionData,loveStruckBabyAccordionData,tightRopeAccordionData,voodooChildAccordionData,skyIsCryingAccordionData,ScuttleButtinAccordionData
,lennyAccordionData,crossFireAccordionData,theHouseisRockinAccordionData,coldShotAccordionData } from '../utils/StevieContent'


let color = '#189AB4'
const StevieCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#ae647f'}}>Stevie Ray Vaughan</h1>
    <h2 className='selenah2' style={{color:'#ae647f'}}> Guitar Afficianado Stevie Ray Vaughan's jazzy and funky blues guitar hits like heavy metal while creating a psychedelic atmosphere similar to that of Jimi.</h2>

  <Carousel>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#ae647f'}}> Love Struck Baby </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=GlR4HYaCI1M&ab_channel=stevierayvaughnVEVO' playsinline/>
          <div className="accordion" >
        {loveStruckBabyAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462" title={title} content={content} />
        ))}
        </div>
      </CarouselItem>

      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> Pride And Joy </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=esVMLLL6Gg4&ab_channel=stevierayvaughnVEVO' playsinline/>
        <div className="accordion" >
      {prideAndJoyAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> TightRope </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=KYZcaAqZQDY' playsinline/>
        <div className="accordion" >
      {tightRopeAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> Voodoo Child </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=nuI5YPaZXIQ' playsinline/>
        <div className="accordion" >
      {voodooChildAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
  
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> Sky is Crying 1984 Version </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=S_6Y8YpWVzY' playsinline/>
        <div className="accordion" >
      {skyIsCryingAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> The House is Rockin'</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Ob6EJR9u-WM' playsinline/>
        <div className="accordion" >
      {theHouseisRockinAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> ScuttleButtinAccordionData</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Ob6EJR9u-WM' playsinline/>
        <div className="accordion" >
      {ScuttleButtinAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> Lenny</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=Ob6EJR9u-WM' playsinline/>
        <div className="accordion" >
      {lennyAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> CrossFire</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=t54xyIcgbks' playsinline/>
        <div className="accordion" >
      {crossFireAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#ae647f'}}> Cold Shot</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=-CixtG_bF28' playsinline/>
        <div className="accordion" >
      {coldShotAccordionData.map(({ title, content }) => (
        <Accordion borderColor="#701462" borderColor2="#701462" backgroundColor="#b9a6af" backgroundColorContent="#b9a6af" color="#701462"  title={title} content={content} />
      ))}
      </div>
    </CarouselItem>

    
  </Carousel>
  </>
  )
}

export default StevieCarousel