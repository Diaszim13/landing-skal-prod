import { InstagramLogo } from 'phosphor-react';
import './style.css';

export function Footer() {
  return (
    <footer className="footer-page" id="team">
      <div>
        <div className="social-links">
          <a href="https://www.instagram.com/skal.xyz/">
            <InstagramLogo size={32} />
          </a>
        </div>
        <p>&copy; 2022 Skål - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}