import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import {
  MdEventAvailable, MdMovieCreation, MdLocalShipping, MdTrendingUp
} from 'react-icons/md'
import '../styles/Services.css'

const services = [
  {
    icon: <MdEventAvailable />,
    title: 'Event Support',
    desc: 'End-to-end management for premium physical and digital experiences. We handle every detail so you can focus on what matters.',
    features: [
      'Full venue coordination & setup',
      'On-site crew management',
      'Digital & hybrid event platforms',
      'Real-time problem resolution',
      'Post-event reporting & analytics',
    ],
  },
  {
    icon: <MdMovieCreation />,
    title: 'Media Production',
    desc: 'Cinematic quality content creation tailored for modern platforms — from highlight reels to full documentary-style coverage.',
    features: [
      'Multi-camera live production',
      '4K video & photography',
      'Branded highlight packages',
      'Social media content creation',
      'Post-production & editing',
    ],
  },
  {
    icon: <MdLocalShipping />,
    title: 'Logistics',
    desc: 'Flawless execution and supply chain management for global campaigns — we ensure everything arrives on time, every time.',
    features: [
      'Nationwide equipment transport',
      'Vendor & supplier management',
      'Inventory tracking systems',
      'Last-mile delivery solutions',
      'International event logistics',
    ],
  },
  {
    icon: <MdTrendingUp />,
    title: 'Marketing',
    desc: 'Data-driven strategies that guarantee ROI and audience growth — turning every event into a marketing powerhouse.',
    features: [
      'Pre-event audience targeting',
      'Influencer & creator partnerships',
      'Social media campaign management',
      'Email & SMS marketing',
      'Post-event conversion strategies',
    ],
  },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <main className="page services-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container fade-up">
          <div className="section-label">Our Expertise</div>
          <h1 className="section-title">Comprehensive <span>Capabilities</span></h1>
          <div className="red-line" />
          <p style={{ color: 'var(--gray)', maxWidth: 520, fontSize: '0.95rem' }}>
            Everything your event needs, handled with dedication, trust, and the strength of a united crew.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-page__grid">
        {services.map((s, i) => (
          <div key={s.title} className={`service-card fade-up fade-up-${i + 1}`}>
            <span className="service-card__number">0{i + 1}</span>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <ul className="service-card__features">
              {s.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button
              className="service-card__link"
              onClick={() => navigate('/contact')}
              style={{ background: 'none', padding: 0 }}
            >
              Get a Quote <FiArrowRight />
            </button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="services-cta">
        <div className="container fade-up">
          <h2>Ready to Build <span style={{ color: 'var(--red)' }}>Something Great?</span></h2>
          <p>Let's talk about your next event. We'd love to be part of your story.</p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Start a Conversation <FiArrowRight />
          </button>
        </div>
      </section>
    </main>
  )
}
