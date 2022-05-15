import macBookMockup from '../Images/MacBookAir.png'
import Ipad from '../Images/Ipad.png'
import IpadTilted from '../Images/Ipad-tilted.png'
import '../Styles/home.css'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { doc, collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase/config";

export default function Home() {

  return (
    <>
    <div id='landingContainer'>
        <div id='heroContainer'>
          <div id='titleContainer'>
            <h1 id='title-hero'>Online herstel community</h1>
            <p>Vitaminds is een online herstel community voor en door mensen die herstellen van een heftige periode in hun leven</p>
          </div>
        </div>

        <div className='sectionContainer'>
          <div className='imageContainer'>
            <img className='smaller-image' src={IpadTilted} alt="" />
          </div>
          <div className='textContainer'>
              <h1>Word onderdeel van een groeiende gemeenschap</h1>
              <p>Herstellen hoef je niet alleen te doen. Op Vitaminds word je onderdeel 
                van een groeiende en levendige gemeenschap van mensen die weten wat je doormaakt.</p>
              <ul>
                <li>Je hoeft het niet alleen te doen</li>
                <li>Je bent geen cliënt of diagnose</li>
                <li>Ontdek wat er allemaal wel mogelijk is</li>
              </ul>
          </div>
        </div>

        <div className='sectionContainer'>
          <div className='textContainer'>
              <h1>Deel, leer en groei</h1>
              <p>Deel je ervaringen, je doelen en obstakels met mensen die weten wat je meemaakt.</p>
              <ul>
                <li>Deel en lees ervaringsverhalen</li>
                <li>Word actief in online themagroepen</li>
                <li>Lees inspirerende artikelen, nieuwsitems en dompel je onder in online workshops</li>
                <li>Meld je aan voor cursussen, trainingen en andere evenementen bij jou in de buurt</li>
              </ul>
          </div>
          <div className='imageContainer'>
            <img className='smaller-image' src={Ipad} alt="" />
          </div>
        </div>

        <div className='sectionContainer'>
          <div className='imageContainer'>
            <img src={macBookMockup} alt="" />
          </div>
          <div className='textContainer'>
              <h1>Voor en door mensen die herstellen</h1>
              <p>Vitaminds is een stichting die wordt beheerd door mensen die zelf herstelervaring hebben.</p>
              <ul>
                <li>Het bestuur en alle functies worden vervuld door mensen met herstelervaring</li>
                <li>Begin als communitylid en word ook actief in de stichting</li>
              </ul>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}