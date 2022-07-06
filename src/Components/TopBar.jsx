import Logo from '../Images/Logo2021-red.png'

const TopBar = () => {
  return (
    <div>
      <div id='contact-container'> 
        <p>info@vitaminds.nu</p>
        <p>06 244 098 43</p>
      </div>
      <div id='topbarLandingContainer'>
        <img id='topbar-logo' src={Logo} alt="Logo Vitaminds" />
        {/* <button id='topbarButton'>Inloggen</button> */}
      </div>
    </div>

  )
}

export default TopBar