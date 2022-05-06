import Logo from '../Images/Logo2021-red.png'

const TopBar = () => {
  return (
    <div id='topbarLandingContainer'>
      <img id='topbar-logo' src={Logo} alt="Logo Vitaminds" />
      {/* <button id='topbarButton'>Inloggen</button> */}
    </div>
  )
}

export default TopBar