import React from 'react'
import "./style.css"
import { Link} from "react-scroll";



const SideBarNav = () => {

  
  return (
    <div id="sideNavBox">
      <ul className='navItems' id="navItems">
        <li className="navItem" id="navButton">
        <Link activeClass="active" to="backgroundSahad" spy={true} smooth={true}>01: Nané</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundSelena" spy={true} smooth={true}>02: Selena </Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundBigJade" spy={true} smooth={true}>03: Big Jade</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundNoogy" spy={true} smooth={true}>04: Noogy</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundHolly" spy={true} smooth={true}>05: Buddy Holly</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundMaren" spy={true} smooth={true}>06: Maren Morris</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundDRI" spy={true} smooth={true}>07: DRI</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundStevie" spy={true} smooth={true}>08: Stevie Ray</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundJanisJoplin" spy={true} smooth={true}>09: Janis Joplin</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundAGiantDog" spy={true} smooth={true}>10:A Giant Dog</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundExplosionsInTheSky" spy={true} smooth={true}>11:Explosions In The Sky</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundBarryWhite" spy={true} smooth={true}>12:Barry White</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundTheWell" spy={true} smooth={true}>13: The Well</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundBeyonce" spy={true} smooth={true}>14: Beyonce</Link>
        </li>
         <li className="navItem" id="navButton">
        <Link  to="backgroundGhostland" spy={true} smooth={true}>15: Ghostland Observatory</Link>
        </li>
        
     
     
     

        </ul>
    </div>
  )
}

export default SideBarNav