import React from 'react'
import IpadTilted from '../Images/Ipad-tilted.png'
import Ipad from '../Images/Ipad.png'

const Herstelacademies = () => {
  return (
    <div id='landingContainer'>
      <div id='titleContainer'>
        <h1>Voor herstelacademies</h1>
      </div>
      <div className='sectionContainer'>
        <div className='textContainer'>
            <h1>Creeer een online community voor je herstelacademie</h1>
            <p>Bied een online community voor de leden van je herstelacademie binnen de Vitaminds community.</p>
            <ul>
              <li>Creeer groepen speciaal voor leden.</li>
              <li>Deel documenten waar leden 24 uur per dag op terug kunnen vallen.</li>
              <li>Word beter vindbaar voor mensen die willen herstellen.</li>
            </ul>
        </div>
        <div className='imageContainer'>
          <img className='smaller-image' src={Ipad} alt="" />
        </div>
      </div>

      <div className='sectionContainer reversed-container'>
          <div className='imageContainer'>
            <img className='smaller-image' src={IpadTilted} alt="" />
          </div>
          <div className='textContainer'>
              <h1>Verbind met andere herstelacademies</h1>
              <p>Deel je ervaringen, je doelen en obstakels met mensen die weten wat je meemaakt.</p>
              <ul>
                <li>Creeer groepen speciaal voor leden.</li>
                <li>Deel documenten waar leden 24 uur per dag op terug kunnen vallen.</li>
                <li>Leden kunnen binnen de omgeving van de herstelacademie communiceren en met de bredere Vitamidns community.</li>
              </ul>
          </div>
        </div>

        <div className='sectionContainer'>
          <div className='textContainer'>
              <h1>Meet de impact van je online communitie</h1>
              <p>Met de geïntgreerde impact software van <a href="https://deccos.nl/">Deccos</a> kun je eenvoudig de impact meten van je online community.</p>
              <ul>
                <li>Verzamel geautomatiseerde data uit je Vitaminds community in je Deccos account.</li>
                <li>Communiceer je impact in real-time met gemeenten, fondsen en andere stakeholders.</li>
              </ul>
          </div>
          <div className='imageContainer'>
            <img className='smaller-image' src={Ipad} alt="" />
          </div>
        </div>
 
    </div>
  )
}

export default Herstelacademies