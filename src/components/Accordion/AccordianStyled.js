import styled from 'styled-components'


export const AccordionWrap = styled.div`
    max-width: 300px;
    margin: .5rem auto;
    box-sizing: border-box;
    position:relative;
    right:0%;
    top:0%;
    color:${props=>props.color};
  


`

export const AccordionTitle=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
cursor: pointer;
background-color: ${props=>props.backgroundColor};
flex-wrap: wrap;
width: 280px;
padding: 1rem;
border:3px groove ;
border-color: ${props=>props.borderColor} ;
border-radius: 30px 30px 0px 0px;
`

export const AccordionContent=styled.div`
    padding:1rem;
  background-color: ${props=>props.backgroundColorContent} ;
  height: auto;
  width: 280px;
  overflow:visible;
  white-space: pre-line;
  text-align: center;
  border:3px groove ;
  border-color:${props=>props.borderColor2};
  border-radius: 0px 0px 30px 30px;

`