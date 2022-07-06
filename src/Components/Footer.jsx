import Logo from '../Images/Logo2021-red.png'

const Footer = () => {
  return (
    <div id='footer-container'>
        <img id='footer-logo' src={Logo} alt="" />
        <p id='footer-powered-by'>Powered bij <a href="https://deccos.nl/" target="_blank" >Deccos</a></p>
    </div>
  )
}

export default Footer