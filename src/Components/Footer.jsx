import Logo from '../Images/Logo2021-red.png'

const Footer = () => {
  return (
    <div id='footer-container'>
        <img id='footer-logo' src={Logo} alt="" />
        <p>info@vitaminds.nu</p>
        <p>06 244 098 43</p>
        <p id='footer-powered-by'>Powered bij <a href="https://deccos.nl/" target="_blank" >Deccos</a></p>
    </div>
  )
}

export default Footer