import Logo from '../Images/Logo2021-red.png'
import { NavLink } from "react-router-dom"

const TopBar = () => {
  return (
    <div id='topbarLandingContainer'>
      <NavLink to={`/`} activeClassName="selected">
        <img id='topbar-logo' src={Logo} alt="Logo Vitaminds" />
      </NavLink>
      <div id='nav-menu'>
        <NavLink to={`/herstelacademies`} activeClassName="selected">
        <p>Voor herstelacademies</p>
        </NavLink>
        <NavLink to={`/over-ons`} activeClassName="selected">
        <p>Over ons</p>
        </NavLink>
        <NavLink to={`/contact`} activeClassName="selected">
        <p>Contact</p>
        </NavLink>
      </div>
      <button id='topbarButton'>
        <a href="https://vitaminds.web.app/" target='_blank'>Mijn Vitaminds</a> 
      </button>
    </div>
  )
}

export default TopBar