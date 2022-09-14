import React from 'react'
import "./App.css"
import SelenaCarousel from './components/Carousel/SelenaCarousel'
import MarenCarousel from "./components/Carousel/MarenCarousel"
import BuddyCarousel from './components/Carousel/BuddyCarousel'
import SahadCarousel from './components/Carousel/sahadCarousel'
import DRICarousel from './components/Carousel/DRICarousel'
import StevieCarousel from './components/Carousel/StevieCarousel'
import GeorgeCarousel from './components/Carousel/GeorgeCarousel'
import BigJadeCarousel from './components/Carousel/BigJadeCarousel'
import JanisCarousel from './components/Carousel/JanisCarousel'


const App = () => {
  return (
    <>
    <section id="backgroundSahad">
    <SahadCarousel/>
    </section>
    <section id="backgroundSelena">
    <SelenaCarousel/>
    </section>
    <section id="backgroundBigJade">
      <BigJadeCarousel/>
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
    <section id="backgroundGeorge">
      <GeorgeCarousel/>
    </section>

    <section id="backgroundJanisJoplin">
      <JanisCarousel/>
    </section>
    <section id="backgroundAGiantDog">
      <JanisCarousel/>
    </section>
    </>
  )
}

export default App