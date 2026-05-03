import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import {
  MdEventAvailable,
  MdMovieCreation,
  MdLocalShipping,
  MdTrendingUp,
} from 'react-icons/md'
import '../styles/Home.css'
import { useEffect } from 'react'

// Services
const services = [
  { icon: <MdEventAvailable />, title: 'Event Support', desc: 'End-to-end management for premium physical and digital experiences.' },
  { icon: <MdMovieCreation />, title: 'Media Production', desc: 'Cinematic quality content creation tailored for modern platforms.' },
  { icon: <MdLocalShipping />, title: 'Logistics', desc: 'Flawless execution and supply chain management for global campaigns.' },
  { icon: <MdTrendingUp />, title: 'Marketing', desc: 'Data-driven strategies that guarantee ROI and audience growth.' },
]

// Gallery Images
const galleryImages = [
  { src: 'https://res.cloudinary.com/dodouazko/image/upload/q_auto/f_auto/v1777835256/event_3_x9xaeq.jpg', tag: 'Concerts' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', tag: 'Live Events' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', tag: 'Corporate' },
]

export default function Home() {
  const navigate = useNavigate()

  // 🔥 SCROLL ANIMATION LOGIC
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show') // 👈 important
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero__container">

          {/* LEFT */}
          <div className="hero__left">
            <h1 className="hero__title fade-up fade-up-1">
              BONDED BY <br />
              <span className="red">WORK,</span><br />
              <span className="outline">GROWING LIKE</span><br />
              A FAMILY.
            </h1>

            <p className="hero__desc fade-up fade-up-2">
              We're a group of passionate people who come together like a family
              to support, manage, and bring events to life.
            </p>

            <div className="hero__actions fade-up fade-up-3">
              <button className="btn-primary" onClick={() => navigate('/services')}>
                Explore Services <FiArrowRight />
              </button>

              <button className="btn-outline" onClick={() => navigate('/gallery')}>
                View Portfolio
              </button>
            </div>

            <div className="hero__mini-stats fade-up fade-up-4">
              <div className="mini-stat">
                <span>🏆</span>
                <h4>2+</h4>
                <p>Years</p>
              </div>

              <div className="mini-stat">
                <span>🎉</span>
                <h4>50+</h4>
                <p>Events</p>
              </div>

              <div className="mini-stat">
                <span>😊</span>
                <h4>100+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero__right fade-up fade-up-2">
            <div className="hero-image">
              <img
                src="https://res.cloudinary.com/dodouazko/image/upload/q_auto/f_auto/v1776624050/Pic_0_fhnppk.jpg"
                alt="event"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services-preview">
        <div className="services-preview__header fade-up">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Comprehensive <span>Capabilities</span>
          </h2>
          <p>
            Everything your event needs, handled with dedication and trust.
          </p>
        </div>

        <div className="services-preview__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card-mini fade-up fade-up-${i + 1}`}
              onClick={() => navigate('/services')}
            >
              <div className="service-card-mini__icon">{s.icon}</div>
              <div className="service-card-mini__title">{s.title}</div>
              <p className="service-card-mini__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-preview">
        <div className="gallery-preview__header fade-up">
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-title">
              Featured <span>Portfolio</span>
            </h2>
          </div>
        </div>

        <div className="gallery-preview__grid">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-preview__item fade-up fade-up-1">
              <img src={img.src} alt={img.tag} />
              <div className="gallery-preview__overlay"></div>
              <span className="gallery-preview__tag">{img.tag}</span>
            </div>
          ))}
        </div>

        <div className="gallery-preview__footer fade-up">
          <button
            className="btn-primary"
            onClick={() => navigate('/gallery')}
          >
            View Full Gallery <FiArrowRight />
          </button>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-strip fade-up">
        <blockquote className="testimonial-strip__quote">
          "At Event Crew, our strength lies in our unity. We turn every event into a memorable experience."
        </blockquote>
      </section>

    </main>
  )
}