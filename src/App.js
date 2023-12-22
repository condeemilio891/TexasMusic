import React,{useState,useEffect} from 'react'
import "./App.css"
import Title from './components/Title/Title'
import SelenaCarousel from './components/Carousel/SelenaCarousel'
import MarenCarousel from "./components/Carousel/MarenCarousel"
import BuddyCarousel from './components/Carousel/BuddyCarousel'
import SahadCarousel from './components/Carousel/sahadCarousel'
import DRICarousel from './components/Carousel/DRICarousel'
import StevieCarousel from './components/Carousel/StevieCarousel'
import GeorgeCarousel from './components/Carousel/GeorgeCarousel'
import BigJadeCarousel from './components/Carousel/BigJadeCarousel'
import JanisCarousel from './components/Carousel/JanisCarousel'
import AGiantDogCarousel from './components/Carousel/AGiantDogCarousel'
import NoogyCarousel from './components/Carousel/noogyCarousel'
import BarryWhiteCarousel from './components/Carousel/BarryWhiteCarousel'
import ExplosionsInTheSkyCarousel from './components/Carousel/ExplosionsInTheSkyCarousel'
import ErykaBaduCarousel from './components/Carousel/ErykahBadu'
import CommentButton from './components/Comments/CommentsButton/CommentButton'
import SideBarNav from './components/SideBarNav/SideBarNav'
import CommentBox from './components/Comments/CommentBox/CommentBox'
import BeyonceCarousel from './components/Carousel/Beyonce'
import SpoonCarousel from './components/Carousel/SpoonCarousel'
import GhostlandCarousel from './components/Carousel/GhostLandObservatory'
import ErkykaBaduCarousel from './components/Carousel/ErykahBadu'
const App = () => {
  return (
    <>
     
    <Title/>
    {/* <CommentBox/> */}
    <section 
    id="backgroundSahad"
    title='backgroundSahad'
    >
    <SahadCarousel/>
    
    </section>
    <section id="backgroundSelena">
    <SelenaCarousel/>
    </section>
    <section id="backgroundBigJade">
      <BigJadeCarousel/>
    </section>
    <section id="backgroundNoogy">
      <NoogyCarousel/>
    </section>

    <section id="backgroundHolly">
      <BuddyCarousel/>
    </section>
   
    <section id ="backgroundMaren">
      <MarenCarousel/>
    </section>
    <section id="backgroundDRI">
      <DRICarousel/>
    </section>
    <section id="backgroundStevie">
      <StevieCarousel/>
    </section>
    <section id="backgroundJanisJoplin">
      <JanisCarousel/>
    </section>
    <section id="backgroundAGiantDog">
      <AGiantDogCarousel/>
    </section>
    <section id="backgroundExplosionsInTheSky">
      <ExplosionsInTheSkyCarousel/>
    </section>
    <section id="backgroundBarryWhite">
      <BarryWhiteCarousel/>
    </section>
    <section id="backgroundErykahBadu">
      <ErkykaBaduCarousel/>
    </section>
    <section id="backgroundBeyonce">
      <BeyonceCarousel/>
    </section>
 <section id="backgroundGeorge">
      <GeorgeCarousel/>
    </section>

    {/* <CommentButton/> */}
    
    <SideBarNav/>
   

    </>
  )
}

export default App