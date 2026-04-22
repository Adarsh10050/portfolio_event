import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={close}>
          <div className="navbar__logo-icon">EC</div>
          <span className="navbar__logo-text">
            Event<span>Crew</span>
          </span>
        </Link>

        {/* Links */}
        <ul className={`navbar__links ${open ? 'open' : ''}`}>

          <li>
            <NavLink
              to="/"
              end
              onClick={close}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={close}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              onClick={close}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Gallery
            </NavLink>
          </li>

          {/* ✅ NEW FAMILY SECTION */}
          <li>
            <NavLink
              to="/family"
              onClick={close}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Family
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={close}
              className={({ isActive }) => isActive ? 'active navbar__cta' : 'navbar__cta'}
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Hamburger */}
        <div
          className={`navbar__hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </div>

      </div>
    </nav>
  )
}