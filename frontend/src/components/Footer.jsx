import { Link } from 'react-router-dom'
import { FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">EC</div>
            <span>Event<span className="red">Crew</span></span>
          </div>
          <p>We bring events to life with care, energy, and the power of a united crew.</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/eventcrew.official?igsh=MXN6cm5rd3I4dnJobA%3D%3D" aria-label="Instagram"><FiInstagram /></a>
            <a href="https://www.linkedin.com/company/eventcrew-official/" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://youtube.com/@eventcrew.official?si=-h06QCTEwQLjgDYB" aria-label="YouTube"><FiYoutube /></a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Event Support</Link></li>
              <li><Link to="/services">Media Production</Link></li>
              <li><Link to="/services">Logistics</Link></li>
              <li><Link to="/services">Marketing</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:eventcrewofficial@gmail.com">eventcrewofficial@gmail.com</a></li>
              <li><span>Chandigarh University</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} EventCrew. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
