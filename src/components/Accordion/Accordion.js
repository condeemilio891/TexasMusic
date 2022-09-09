import React,{useState} from 'react';
// import "./Accordion.css"
import { AccordionContent,AccordionWrap,AccordionTitle } from './AccordianStyled';


const Accordion = ({title,content,backgroundColor,backgroundColorContent,color,borderColor,borderColor2}) => {


  


  const [isActive, setIsActive] = useState(false);


  return (


          <React.Fragment>
            <AccordionWrap color={color}>
        <div className="accordion-item">
          <AccordionTitle className="accordion-title" backgroundColor={backgroundColor} borderColor={borderColor}
          onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
      <div>{isActive ? '-' : '+'}</div>
          </AccordionTitle>
          {isActive && <AccordionContent className="accordion-content" borderColor2={borderColor2} backgroundColorContent={backgroundColorContent} 
          >{content}</AccordionContent>}
        </div>
      </AccordionWrap>
    </React.Fragment>




    // <React.Fragment>
    //   <div className="accordion">
    //     <div className="accordion-item">
    //       <div className="accordion-title" 
    //       onClick={() => setIsActive(!isActive)}>
    //         <div>{title}</div>
    //   <div>{isActive ? '-' : '+'}</div>
    //       </div>
    //       {isActive && <div className="accordion-content" 
    //       >{content}</div>}
    //     </div>
    //   </div>
    // </React.Fragment>
  );
};

export default Accordion;