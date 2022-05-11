import macBookMockup from '../Images/MacBookAir.png'
import Ipad from '../Images/Ipad.png'
import IpadTilted from '../Images/Ipad-tilted.png'
import '../Styles/home.css'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { doc, collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase/config";

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const nameHandler = (e) => {
    const name = e.target.value 

    setName(name)
  }

  const emailHandler = (e) => {
    const email = e.target.value 

    setEmail(email)
  }

  const sendFormHandler = async (e) => {

    e.target.innerText = 'Verzonden'
    e.target.style.backgroundColor = '#cecece'
    e.target.style.borderColor = '#cecece'

    await addDoc(collection(db, "Commission"), {
        Name: name,
        Email: email,
        Timestamp: serverTimestamp()
    })
      

    await addDoc(collection(db, "Mail"), {
        to: "info@vitaminds.nu",
        message: {
        subject: `Nieuwe aanmelden voor de meedenk commissie voor Vitaminds.`,
        html: ` Naam: ${name}</br></br>
                Email: ${email}</br></br>
                `,
        Emailadres: email,
        Type: "Commission"
        }
    })


  }

  return (
    <>
    <div id='landingContainer'>
        <div id='heroContainer'>
          <div id='titleContainer'>
            <h1 id='title-hero'>Online herstel community</h1>
            <p>Vitaminds is een online herstel community voor en door mensen die herstellen van een heftige periode in hun leven</p>
            <div id='research-container'>
              <p>Vitaminds is momenteel in ontwikkeling. Wil je meedenken over hoe Vitaminds er uiteindelijk uit komt te zien? 
                Meld je dan aan voor de meedenk-commissie</p>
                <a href="#commission-container"><button>Aanmelden</button></a>
            </div>
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
                <li> <a href="#commission-container">Denk mee</a>  over toekomstige mogelijkheden</li>
              </ul>
          </div>
        </div>
       
        <div className='sectionContainer'>
          <div className='textContainer'>
              <h1>Word onderdeel van een groeiende gemeenschap</h1>
              <p>Herstellen hoef je niet alleen te doen. Op Vitaminds word je onderdeel 
                van een groeiende en levendige gemeenschap van mensen die weten wat je doormaakt.</p>
              <ul>
                <li>Je hoeft het niet alleen te doen</li>
                <li>Je bent geen cliënt of diagnose</li>
                <li>Ontdek wat er allemaal wel mogelijk is</li>
                <li> <a href="#commission-container">Denk mee</a>  over toekomstige mogelijkheden</li>
              </ul>
          </div>
          
          <div className='imageContainer'>
            <img className='smaller-image' src={IpadTilted} alt="" />
          </div>
        </div>
        <div className='sectionContainer'>
          <div className='imageContainer'>
            <img className='smaller-image' src={Ipad} alt="" />
          </div>
          <div className='textContainer'>
              <h1>Deel, leer en groei</h1>
              <p>Deel je ervaringen, je doelen en obstakels met mensen die weten wat je meemaakt.</p>
              <ul>
                <li>Deel en lees ervaringsverhalen</li>
                <li>Word actief in online themagroepen</li>
                <li>Lees inspirerende artikelen, nieuwsitems en dompel je onder in online workshops</li>
                <li>Meld je aan voor cursussen, trainingen en andere evenementen bij jou in de buurt</li>
                <li> <a href="#commission-container">Denk mee</a>  over toekomstige mogelijkheden</li>
              </ul>
          </div>
        </div>
        <div className='sectionContainer' id='commission-container'>
          <div className='imageContainer'>
            <h1>Meld je aan voor de meedenk commissie</h1>
            <p>De meedenk commissie bestaat uit toekomstige gebruikers en herstelacademies die mee willen denken over de 
              manier waarop Vitaminds er staks uit gaat zien en hoe Vitaminds gebruikt gaat worden.</p>
            <p>Wanneer je je aanmeldt wordt je uitgenodigd voor de (online) bijeenkomsten waarin we met 
              elkaar in gesprek gaan over de toekomst van Vitaminds.</p>
          </div>
          <div className='textContainer' id='send-form-container'>
              <p>Naam</p>
              <input type="text" placeholder='Schrijf hier je naam' onChange={nameHandler} />
              <p>emailadres</p>
              <input type="text" placeholder='Schrijf hier je emailadres' onChange={emailHandler}/>
              <div className='button-container'>
                <button onClick={sendFormHandler}>Versturen</button>
              </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}