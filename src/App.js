import React from 'react'
import "./App.css"
import SelenaCarousel from './components/Carousel/SelenaCarousel'
import MarenCarousel from "./components/Carousel/MarenCarousel"
import BuddyCarousel from './components/Carousel/BuddyCarousel'
import DRICarousel from './components/Carousel/DRICarousel'
import StevieCarousel from './components/Carousel/StevieCarousel'
import GeorgeCarousel from './components/Carousel/GeorgeCarousel'
import BigJadeCarousel from './components/Carousel/BigJadeCarousel'

const App = () => {
  return (
    <>
    <section id="backgroundSelena">
    <SelenaCarousel/>
    </section>
    <section id ="backgroundMaren">
      <MarenCarousel/>
    </section>
    <section id="backgroundHolly">
      <BuddyCarousel/>
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
    <section id="backgroundBigJade">
      <BigJadeCarousel/>
    </section>
    </>
  )
}

export default App