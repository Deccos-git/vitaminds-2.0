import IpadTilted from '../Images/Ipad-tilted.png'
import Ipad from '../Images/Ipad.png'
import overOnsHeader from '../Images/overOnsHeader.png'

const OverOns = () => {
  return (
    <div id='landingContainer'>
      <div className='pageTitleContainer'>
        <div className='page-header-container'>
          <div className='page-header-title-container'>
            <h1>Over ons</h1>
            <p>1 op de 4 Nederlanders heeft ergens in zijn leven te maken met psychische problemen. 
              Verantwoordelijkheid nemen voor de klachten en hulp zoeken is een hele stap en ook na de 
              intense periode van hulp en ondersteuning is het herstellen en je leven vormgeven met deze 
              nieuwe rugzak een hele uitdaging zijn. Vitaminds wil je een plek bieden waarin je dit niet alleen hoeft te doen. 
              Een plek waar je samen kan komen met mensen die weten wat je meemaakt.
            </p>
          </div>
          <div className='page-header-image-container'>
            <img src={overOnsHeader} alt="hello" />
          </div>
        </div>
      </div>
      <div className='sectionContainer'>
        <div className='textContainer'>
            <h1>Herstelacademies</h1>
            <p>In Nederland zijn steeds meer herstelacademies waar je in kunt lopen en terecht kunt voor een goed gesprek en 
              verdiepende cursussen. Vitaminds biedt deze herstelacademies een online community omgeving. Een plek waar leden 
              24 uur per dag terecht kunnen mocht daar behoefte aan zijn. 
            </p>

            <p>
              Tegelijkertijd wil Vitaminds te toegankelijkheid van herstelacademies vergroten. Voor mensen voor wie de stap 
              naar een herstelacademie nog te groot is kan Vitaminds een laagdrempelige plek zijn waar je terecht kan voor 
              vragen en herkennen. Een plek waar je alvast onderdeel kan zijn van een herstelcommunity en kunt zien wat de 
              herstelacademie bij jou in buurt voor je kan betekenen. 
            </p>
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
              <h1>Ontstaan</h1>
              <p>Vitaminds is in 2022 ontstaan uit de wens van drie herstelacademies uit het noorden van het om een gezamenlijke 
                online omgeving te bieden voor haar deelnemers. </p>
          </div>
        </div>
      </div>
 
  )
}

export default OverOns