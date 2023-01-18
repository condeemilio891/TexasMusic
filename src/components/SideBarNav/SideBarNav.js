import React from 'react'
import "./style.css"
import { Link} from "react-scroll";



const SideBarNav = () => {

  
  return (
    <div id="sideNavBox">
      <ul className='navItems' id="navItems">
        <li className="navItem" id="navButton">
        <Link activeClass="active" to="backgroundSahad" spy={true} smooth={true}>1: Daniel Sahad</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundSelena" spy={true} smooth={true}>2: Selena </Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundBigJade" spy={true} smooth={true}>3: Big Jade</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundNoogy" spy={true} smooth={true}>4: Noogy</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundHolly" spy={true} smooth={true}>5: Buddy Holly</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundMaren" spy={true} smooth={true}>6: Maren Morris</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundDRI" spy={true} smooth={true}>7: DRI</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundStevie" spy={true} smooth={true}>8: Stevie Ray</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundJanisJoplin" spy={true} smooth={true}>9: Janis Joplin</Link>
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
        </li> <li className="navItem" id="navButton">
        <Link  to="backgroundBeyonce" spy={true} smooth={true}>15: Spoon</Link>
        </li>
         <li className="navItem" id="navButton">
        <Link  to="backgroundBeyonce" spy={true} smooth={true}>16: Ghostland Observatory</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundBeyonce" spy={true} smooth={true}>17: shakey Graves</Link>
        </li>
        <li className="navItem" id="navButton">
        <Link  to="backgroundBeyonce" spy={true} smooth={true}>18: Willie Nelson</Link>
        </li>
     
     
     

        </ul>
    </div>
  )
}

export default SideBarNav