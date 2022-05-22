import React from 'react'
import "./App.css"
import SelenaCarousel from './components/Carousel/SelenaCarousel'
import MarenCarousel from "./components/Carousel/MarenCarousel"
import BuddyCarousel from './components/Carousel/BuddyCarousel'

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
    </>
  )
}

export default App