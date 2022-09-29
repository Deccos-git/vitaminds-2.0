import contactHeader from '../Images/herstelacademiesHeader.png'
import PhoneIcon from '../Images/Icons/phone-icon.png'
import EmailIcon from '../Images/Icons/email-icon.png'

const Contact = () => {
  return (
    <div id='landingContainer'>
      <div className='pageTitleContainer'>
        <div className='page-header-container'>
          <div className='page-header-title-container'>
            <h1>Contact</h1>
            <p>Wil je meer weten over Vitaminds? Bel, mail of app ons. 
            </p>
          </div>
          <div className='page-header-image-container'>
            <img src={contactHeader} alt="hello" />
          </div>
        </div>
      </div>
      <div id='contact-outer-container'>

        <div className='contact-item-container'>
          <img src={PhoneIcon} alt="phone icon" />
          <p>06 244 098 43</p>
        </div>

        <div className='contact-item-container'>
          <img src={EmailIcon} alt="email icon" />
          <p>info@vitaminds.nu</p>
        </div>

      </div>
    </div>
  )
}

export default Contact