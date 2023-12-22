import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { myChurchAccordionData, iCouldUseALoveSongAccordionData,theMiddleAccordionData, theBonesAccordionData,
girlAccordionData,richAccordionData,makeOutWithMeAccordionData,iCantLoveYouAnymoreAccordionData,eightiesMercedesAccordionData,
 } from '../utils/marenContent'


let color = '#189AB4'
const MarenCarousel = () => {
  return (
      <>
    <h1 className='selenah1' style={{color:'#D4F1F4'}}> Maren Morris</h1>
    <h2 className='selenah2' style={{color:'#FFFDD0'}}> Releasing her debut album at 15 after only taking 3 years to learn guitar
    Maren Morris's country style blends perfectly when she decides to add elements of Pop, House and even Soul. It takes a master of style to extend a country song's reach
     without washing down the things that make Country good. </h2>

  <Carousel>
  <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> 80's Mercedes </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=m9md97nN_SQ' playsinline/>
        <div className="accordion" >
      {eightiesMercedesAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
      <CarouselItem>
      
        <h3 className='selenah6' style={{color:'#189AB4'}}> My Church </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=MiDJOrOFu1k&ab_channel=MarenMorrisVEVO' playsinline/>
          <div className="accordion" >
        {myChurchAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
        </div>
      </CarouselItem>
      <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> I Could Use a Love Song </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=ErdZ_W35xRs' playsinline/>
        <div className="accordion" >
      {iCouldUseALoveSongAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> The Middle </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=M3mJkSqZbX4' playsinline/>
        <div className="accordion" >
      {theMiddleAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> The Bones </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=gvPMVKUI9go' playsinline/>
        <div className="accordion" >
      {theBonesAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> Girl </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=X0vXCY-h9ks' playsinline/>
        <div className="accordion" >
      {girlAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> Rich </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=lcPh9UOhRPI' playsinline/>
        <div className="accordion" >
      {richAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> Make Out With Me </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=gk3ULB3ZTV0' playsinline/>
        <div className="accordion" >
      {makeOutWithMeAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>
    <CarouselItem>
      
      <h3 className='selenah6' style={{color:'#189AB4'}}> I Cant Love You Anymore </h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=JQ2Bc7Dr6dU' playsinline/>
        <div className="accordion" >
      {iCantLoveYouAnymoreAccordionData.map(({id, title, content }) => (
        <Accordion borderColor="#189AB4" borderColor2="#189AB4" backgroundColor="#D4F1F4" backgroundColorContent="#D4F1F4" color="#189AB4" key={id} title={title} content={content} />
      ))}
      </div>
    </CarouselItem>

   
    
  </Carousel>
  </>
  )
}

export default MarenCarousel