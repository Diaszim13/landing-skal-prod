import skalLogoImg from '../../assets/logo.svg'
import bandeiraBrasil from '../../assets/icons8-brazil-48.png'
import bandeiraEstadosUnidos from '../../assets/icons8-united-states-48.png'
import ReactCountryFlag from "react-country-flag"
import './style.css'

export function Header() {
  return (
    <header>
      <div>
        <div className="logo">
          <img src={skalLogoImg} width={30} height={50} alt="logo skal" />
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#message">Sobre</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#team">Team</a>
        </nav>
        <div className="header-buttons">
          <div>
            {/* <span>PT</span>
            <span>🇧🇷</span> */}
            {/* <span>  <ReactCountryFlag countryCode="US" svg  style={{
                    width: '28px',
                    height: '24px',
                }} /></span> */}
            <span>  <ReactCountryFlag countryCode="BR" svg style={{
                    width: '28px',
                    height: '24px',
                }} /></span>
          </div>
          {/* <button className='btn-connect'>Connect Wallet</button> */}
        </div>
      </div>
    </header>
  )
}