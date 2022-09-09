import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import ReactPlayer from 'react-player'
import Accordion from '../Accordion/Accordion'
import { siUnaVezAccordionData, bidibidibombomAccordionData,baileEstaCumbiaAccoridionData,comoLaFlorAccoridionData
 ,besitosAccoridionData,quieroAccoridionData,iCouldFallInLoveAccoridionData ,amorProhibidoAccoridionData,
noMeQuedaMasAccoridionData,ElChicoAccoridionData} from '../utils/selenaContent';


function SelenaCarousel() {

 
  return (
    
      <>
      <h1 className='selenah1'>#1 Selena Quintanilla</h1>
      <h2 className='selenah2'>Known as the Queen of Tejano Music, Selena incorporated R&B, Hip Hop and Cumbia the to the Tejano genre.
    Selena's approach was seen as revolutionary topping the charts with over 14 top ten hits.  </h2>
    <Carousel>
        <CarouselItem>
        <h3 className='selenah6'> #1. Si Una Vez </h3>
          <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=pjDc3nK8cN4&ab_channel=SelenaVEVO'/>
          <div className="accordion" id="selenaAccordianColors">
        {siUnaVezAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        </CarouselItem>
        
        <CarouselItem>
        <h3 className='selenah6'> #2. BidiBidiBomBom</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=4GsooP7u6N0&ab_channel=ArleneHawkins'/>
          <div className="accordion">
        {bidibidibombomAccordionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>

        <CarouselItem>
        <h3 className='selenah6'> #3. Baile esta Cumbia</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=JgmDB7XsOKY&ab_channel=Omster12'/>
          <div className="accordion">
        {baileEstaCumbiaAccoridionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>

        <CarouselItem>
        <h3 className='selenah6'> #4. Como la Flor</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=98mU-744U2A&ab_channel=JadeStratus'/>
          <div className="accordion">
        {comoLaFlorAccoridionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>

        <CarouselItem>
        <h3 className='selenah6'> #5. Besitos</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=awV5IcTkpQ8&ab_channel=cesar.urtrick'/>
          <div className="accordion">
        {besitosAccoridionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>

        <CarouselItem>
        <h3 className='selenah6'> #6. Quiero</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=p636I82GV5k&ab_channel=SelenaQRestorer'/>
          <div className="accordion">
        {quieroAccoridionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>

        <CarouselItem>
        <h3 className='selenah6'> #7. I Could Fall In Love</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=XBCDvINm0Vo&ab_channel=SelenaVEVO'/>
          <div className="accordion">
        {iCouldFallInLoveAccoridionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>

        <CarouselItem>
        <h3 className='selenah6'> #8. Amor Prohibido</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=UDZrTAaMjfk&ab_channel=ArleneHawkins'/>
          <div className="accordion">
        {amorProhibidoAccoridionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>

        <CarouselItem>
        <h3 className='selenah6'> #9. No Me Queda mas</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=hKVH5g99FPI&ab_channel=SelenaVEVO'/>
          <div className="accordion">
        {noMeQuedaMasAccoridionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>

        <CarouselItem>
        <h3 className='selenah6'> #10. El Chico del Apartamento 512</h3>
        <ReactPlayer className="reactPlayer" url ='https://www.youtube.com/watch?v=_g2KBWNHdgw&t=1s&ab_channel=SelenaVEVO'/>
          <div className="accordion">
        {ElChicoAccoridionData.map(({ title, content }) => (
          <Accordion borderColor="#630330" borderColor2="#630330" color="#DA70D6" backgroundColorContent="#630330" backgroundColor="#710193" title={title} content={content} />
        ))}
        </div>
        
        </CarouselItem>
  
  
    </Carousel>

    
    </>
    
    )

}

export default SelenaCarousel

